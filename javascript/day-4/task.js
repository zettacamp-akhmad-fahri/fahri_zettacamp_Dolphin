// books array contains all book information as objects
books = [
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
        stock: 0,
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
shoppingCart = [
    {
        id: 2,
        quantity: 15
    },

    {
        id: 3,
        quantity: 22
    }
]

let discount = 10
let tax = 10

// the main function
function bookPurchase (books, shoppingCart, discount, tax) {
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
                    let discountAmount = book.isManga ? 0 : subtotal * discount / 100
                    let priceAfterDiscount = subtotal - discountAmount

                    let taxAmount = priceAfterDiscount * tax / 100
                    const finalPrice = priceAfterDiscount + taxAmount
                    
                    //grandTotal is added for each item
                    grandTotal += finalPrice

                    console.log(`Title: ${book.title}`)
                    console.log(`Current Stock: ${book.stock}`)
                    console.log(`Price: ${book.price}`)
                    console.log(`Quantity: ${item.quantity}`)
                    console.log(`Subtotal: ${subtotal}`)
                    console.log(`Discount Amount: Rp${discountAmount}`)
                    console.log(`Price After Discount: Rp${priceAfterDiscount}`)
                    console.log(`Tax amount: Rp${taxAmount}`)
                    console.log(`Final Price: Rp${finalPrice}`)

                    // stock calculation
                    book.stock -= item.quantity
                    book.amountPurchased += item.quantity

                    if (book.stock > 0) {
                        console.log(`This book is still in stock. There are ${book.stock} available.`)
                    }
                    else {
                        console.log("This book is sold out")
                    }

                    console.log("-----------------------------------------")
                }
            }
        }
    }
    console.log(`Grand Total: Rp${grandTotal}`)
}

bookPurchase (books, shoppingCart, discount, tax)