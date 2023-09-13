const express = require('express')
const books = require('./books')
const app = express()
const port = 3000

app.use(express.json())

const checkAuth = (req, res, next) => {
    //get the authorization header that was sent by the client
    const auth = req.headers["authorization"]
  
    /*
    auth = "Basic <encoded username:password>"
    get userpass via split and access index 1
    */
    const userpass = auth.split(" ")[1]
  
    //decode userpass to "username:password"
    const text = Buffer.from(userpass, "base64").toString("ascii")
  
    //get username and password individually
    const username = text.split(":")[0]
    const password = text.split(":")[1]
  
    if (username === "admin" && password === "admin") 
    {
      //auth successful, access to the route is granted
      return next()
    } else {
      //username and password is wrong, auth unsuccessful
      return res.json("Access Denied.")
    }
};


app.use(checkAuth) // calling checkAuth function as middleware

app.get('/test', (req, res) => {
    const auth = req.headers["authorization"]
    const userpass = auth.split(" ")[1]
    const text = Buffer.from(userpass, "base64").toString("ascii")
    const username = text.split(":")[0]
    const password = text.split(":")[1]

    console.log(auth)
    console.log(userpass)
    console.log(text)
    console.log(username)
    console.log(password)

    res.json("ok")
})

// get book catalog
app.get('/', (req, res) => {
  res.send(books.books)
})

// book purchase using get
app.get('/book-purchase', (req, res) => {
    const output = books.bookPurchase(books.books, books.shoppingCart)
    res.send(output)
})

// book purchase using post
app.post('/book-purchase', (req, res) => {
    const output = books.bookPurchase(books.books, req.body)
    res.send(output)
})

// add book
app.post('/add-book', (req, res) => {
    books.books.push(req.body)
    res.send(books.books)
})

// book purchase using map
app.post('/book-purchase-map', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})