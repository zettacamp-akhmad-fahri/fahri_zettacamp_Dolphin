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
}

async function binder (iterable) {
  try {
    const iterationWithAwait = await iteration (iterable)
    return iterationWithAwait
  }
  catch (err) {
    console.log(err)
  }
}

function iteration (iterable) {
  return new Promise((resolve, reject) => {
    if (true) {
      for (let i = 0; i < iterable.length; i++) {
        let outputString = `Item ${i}: ${iterable[i]}.`
        console.log(outputString)
        setTimeout(console.log("Next"), 2000)
      }
      resolve("OK")
    }
    else {
      reject("Not OK")
    }
  })
}

module.exports = {checkAuth, binder, iteration}