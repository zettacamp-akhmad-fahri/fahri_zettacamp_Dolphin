const express = require('express')
const functions = require('./functions')
const app = express()
const port = 3000

const events = require('events')
const eventEmitter = new events.EventEmitter()

app.use(express.json())

// endpoint using await
app.post('/await', (req, res) => {
    async function caller (req) {
        const output = await functions.iteration(req.body)
        functions.createFile("awaitOutput.json", output)
        res.json(output)
    }
    caller(req)
})

// endpoint not using await
app.post('/noAwait', (req, res) => {
    async function caller (req) {
        const output = functions.iteration(req.body)
        functions.createFile("noAwaitOutput.json", output)
        res.json(output)
    }
    caller(req)
})


// delete files
app.delete('/deleteFiles', (req, res) => {
    eventEmitter.on('delete', functions.deleteAllFiles)
    eventEmitter.emit('delete')
    res.json("OK")
})

// negative test
app.post('/negativeTest', (req, res) => {
    async function caller (req) {
        const output = await functions.iteration()
        functions.createFile("negativeOutput.json", output)
        res.json(output)
    }
    caller(req)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })