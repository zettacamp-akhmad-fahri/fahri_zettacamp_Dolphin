// the variables
const book1 = {
    title: "One Piece",
    author: "Eiichiro Oda",
    releaseYear: 1997,
    isManga: true,
    price: 50000
}

const book2 = {
    title: "Mockingjay",
    author: "Suzanne Collins",
    releaseYear: 2010,
    isManga: false,
    price: 100000
}

const book3 = {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    releaseYear: 2003,
    isManga: false,
    price: 150000
}

const book4 = {
    title: "Oyasumi Punpun",
    author: "Inio Asano",
    releaseYear: 2007,
    isManga: true,
    price: 50000
}

let discount = 10
let tax = 10

// book purchase function

function bookPurchase (book, tax = 10, discount = 10) {
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


    return finalPrice
}


bookPurchase(book1, tax, discount)