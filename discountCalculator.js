function calculateDiscountedPrice(quantity, pricePerItem) {
    
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
let result = calculateDiscountedPrice(5, 20)
console.log (result)


module.exports = calculateDiscountedPrice;