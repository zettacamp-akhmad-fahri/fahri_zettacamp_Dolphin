function countDown (num) {
    if (num >= 0) {
        console.log(num)
        num--
        countDown(num)
    }
    else {
        console.log("Done")
    }
}

countDown(3)