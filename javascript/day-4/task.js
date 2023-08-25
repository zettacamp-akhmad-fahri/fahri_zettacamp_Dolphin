// the variables
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

shoppingCart = [
    {
        id: 2,
        quantity: 21
    },

    {
        id: 3,
        quantity: 20
    }
]

let discount = 10
let tax = 10

function bookPurchase (books, shoppingCart, discount, tax) {
    let grandTotal = 0
    for (let item of shoppingCart) {
        for (let book of books) {
            if (item.id == book.id) {
                if (book.stock == 0) {
                    console.log(`${book.title} is not in stock`)
                    break
                }

                if(item.quantity > book.stock) {
                    console.log(`We only have ${book.stock} of ${book.title}`)
                    break
                }
                else {
                    // price calculation
                    let subtotal = book.price * item.quantity
                    let discountAmount = book.isManga ? 0 : subtotal * discount / 100
                    let priceAfterDiscount = subtotal - discountAmount

                    let taxAmount = priceAfterDiscount * tax / 100
                    const finalPrice = priceAfterDiscount + taxAmount

                    grandTotal += finalPrice

                    console.log(`Title: ${book.title}`)
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

                    console.log("--------------------------")
                }
            }
        }
    }
    console.log(`Grand Total: Rp${grandTotal}`)
}

bookPurchase (books, shoppingCart, discount, tax)