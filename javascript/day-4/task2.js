const book1 = {
    title: "Mockingjay",
    author: "Suzanne Collins",
    releaseYear: 2010,
    isManga: false,
    price: 100000,
    stock: 100,
    amountPurchased: 0
}

const book2 = {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    releaseYear: 2003,
    isManga: false,
    price: 150000,
    stock: 100,
    amountPurchased: 0
}

let discount = 10
let tax = 10

function bookPurchase (book, tax = 10, discount = 10, quantity = 1) {

    if (quantity > book.stock) {
        book.stock -= quantity
        console.log(`We only have ${book.stock} units of ${book.title}`)
    }
    else {
        // discount only for non-manga
        let discountAmount = book.isManga ? 0 : book.price * discount / 100
        let priceAfterDiscount = book.price - discountAmount

        let taxAmount = priceAfterDiscount * tax / 100
        const finalPrice = priceAfterDiscount + taxAmount

        console.log(book)
        console.log(`Discount Rate: ${discount}%`)
        console.log(`Tax Rate: ${tax}%`)
        console.log(`Discount Amount: Rp${discountAmount}`)
        console.log(`Price After Discount: Rp${priceAfterDiscount}`)
        console.log(`Tax amount: Rp${taxAmount}`)
        console.log(`Final Price: Rp${finalPrice}`)
    }


    return finalPrice
}