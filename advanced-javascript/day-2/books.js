// books array contains all book information as objects
const books = [
    {
        id: 1,
        title: "One Piece",
        author: "Eiichiro Oda",
        releaseYear: 1997,
        isManga: true,
        price: 50000,
        stock: 20,
        amountPurchased: 0
    },

    {
        id: 2,
        title: "Mockingjay",
        author: "Suzanne Collins",
        releaseYear: 2010,
        isManga: false,
        price: 100000,
        stock: 20,
        amountPurchased: 0
    },
    
    {
        id: 3,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        releaseYear: 2003,
        isManga: false,
        price: 150000,
        stock: 20,
        amountPurchased: 0
    },

    {
        id: 4,
        title: "Oyasumi Punpun",
        author: "Inio Asano",
        releaseYear: 2007,
        isManga: true,
        price: 50000,
        stock: 20,
        amountPurchased: 0
    }
]

// shoppingCart contains the purchase detail
const shoppingCart = [
    {
        "id": 1,
        "quantity": 10,
        "discount": 10,
        "tax": 10
    },

    {
        "id": 2,
        "quantity": 10,
        "discount": 10,
        "tax": 10
    },

    {
        "addedPrice": 50000,
        "term": 1
    }
]

// the main function
function bookPurchase (books, shoppingCart) {
    const priceAddition = shoppingCart.pop()
    const output = []
    const creditDuration = 12 // define credit duration
    let grandTotal = 0 //initialize total price to be paid
    // loop through shoppingCart elements
    for (let item of shoppingCart) {
        // loop through books to find matching id
        for (let book of books) {
            // 
            if (item.id == book.id) {
                // stop operation if stock is empty
                if (book.stock == 0) {
                    console.log(`${book.title} is not in stock`)
                    console.log("-----------------------------------------")
                    break
                }

                // stop operation if quantity > stock
                if(item.quantity > book.stock) {
                    console.log(`We only have ${book.stock} of ${book.title}`)
                    console.log("-----------------------------------------")
                    break
                }
                else {
                    // price calculation
                    let subtotal = book.price * item.quantity
                    let discountAmount = subtotal * item.discount / 100
                    let priceAfterDiscount = subtotal - discountAmount

                    let taxAmount = priceAfterDiscount * item.tax / 100
                    const finalPrice = priceAfterDiscount + taxAmount
                    
                    //grandTotal is added for each item
                    grandTotal += finalPrice

                    // console.log(`Title: ${book.title}`)
                    // console.log(`Current Stock: ${book.stock}`)
                    // console.log(`Price: ${book.price}`)
                    // console.log(`Quantity: ${item.quantity}`)
                    // console.log(`Subtotal: ${subtotal}`)
                    // console.log(`Discount Amount: Rp${discountAmount}`)
                    // console.log(`Price After Discount: Rp${priceAfterDiscount}`)
                    // console.log(`Tax amount: Rp${taxAmount}`)
                    // console.log(`Final Price: Rp${finalPrice}`)

                    const outputObject = {
                        title: book.title,
                        currentStock: book.stock,
                        price: book.price,
                        quantity: item.quantity,
                        subtotal: subtotal,
                        discountAmount: discountAmount,
                        priceAfterDiscount: priceAfterDiscount,
                        taxAmount: taxAmount,
                        finalPrice: finalPrice
                    }

                    output.push(outputObject)

                    // // stock calculation
                    // book.stock -= item.quantity
                    // book.amountPurchased += item.quantity

                    // if (book.stock > 0) {
                    //     console.log(`This book is still in stock. There are ${book.stock} available.`)
                    // }
                    // else {
                    //     console.log("This book is sold out")
                    // }

                    // console.log("-----------------------------------------")
                    break
                }
            }
        }
    }
    // console.log(`Grand Total: Rp${grandTotal}`)
    // console.log("-----------------------------------------")

    
    // calling the installment function
    calculateInstallment(grandTotal, creditDuration, output, priceAddition)
    console.log(priceAddition)

    return output

}

// installment function
async function calculateInstallment (grandTotal, creditDuration, output, priceAddition) {
    const date = new Date() // get current date

    // declare empty array for date output 
    let termArray = []

    // console.log("Payment Due Dates")

    // showing due dates and monthly payment
    for (let term = 1; term <= creditDuration; term++) {
        let monthlyPayment = Math.ceil(grandTotal / creditDuration) // calculate monthly payment, round up

        // adjusment on the final term because of rounding up
        if (term == creditDuration) {
            monthlyPayment = monthlyPayment - (monthlyPayment * creditDuration - grandTotal)
        }

        date.setMonth(date.getMonth() + 1) // set date to next month
        const dateString = date.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }) // turn date to string with suitable format

        let termObject = {
            term: term ,
            date: dateString,
            monthlyPayment: monthlyPayment
        }

        termArray.push(termObject)
        // // declare an object that contains due date and amount to be paid
        // const paymentObject = {
        //     "Due Date": dateString,
        //     "Payment Amount": monthlyPayment
        // }
        // outputArray.push(paymentObject) // add object to output array
    }

    output.push({
        grandTotal: grandTotal,
        creditDuration: creditDuration,
        dueDates: termArray
    })

    try {
        additionalPriceMessage = await addPriceToTerm(output, priceAddition.addedPrice, priceAddition.term)
        console.log(additionalPriceMessage)
    }
    catch (err) {
        console.log(err)
    }
    

    // console.log(outputArray)

    // // calculationg total payment
    // let paymentArray = outputArray.map( (term) => term["Payment Amount"]) // create array of payment amount
    // let sumPayment = paymentArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // sum all payment value
    // console.log(`Total Payment: ${sumPayment}`)

}

function addPriceToTerm(output, addedPrice = 0, term = 1) {
    return new Promise ((resolve, reject) => {
        if (addedPrice >= 0) {
            output[output.length - 1]["dueDates"][term - 1]["monthlyPayment"] += addedPrice
            output[output.length - 1]["grandTotal"] += addedPrice

            setTimeout(() => {
                resolve("Price Added Successfully")
            }, 5000)
            
        }
        else {
            reject("Invalid added price")
        }
    })
    

    // return `Rp ${addedPrice} has been added to term ${term}`
}

module.exports = {books, shoppingCart, bookPurchase}
// console.log(bookPurchase (books, shoppingCart))