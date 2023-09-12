const fs = require('fs')


// asynchronous function to loop through the iterable
async function iteration (iterable) {
  try {
    const outputArray = [] // initialize output array

    // loop through the iterable
    for (let i = 0; i < iterable.length; i++) {
      // push book's title and author into output array
      outputArray.push({
        "title": iterable[i].title,
        "author": iterable[i].author
      })

      let outputString = `Item ${i + 1}: ${iterable[i].title}.` // create the string to be shown in console
      console.log(outputString)
      await new Promise(resolve => setTimeout(resolve, 2000))   // wait 2000 ms
      console.log("Waited 2 seconds")
    }
    return outputArray
  }
  catch (error) {
    return error
  }
}

// write file function
function createFile(filename, output) {
  fs.writeFile(`./${filename}`, JSON.stringify(output), (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("The file has been successfully created")
    }
})
}

// delete all files function
function deleteAllFiles() {
  const filenames = ["awaitOutput.json", "noAwaitOutput.json"] // files to be deleted

  for (let filename of filenames) {
    fs.unlink(`./${filename}`, (err) => {
      if (err) {
        console.log(`${filename} file not found`)
      }
      else {
        console.log(`${filename} file has been deleted`)
      }
    })
  }
}



module.exports = {iteration, createFile, deleteAllFiles}