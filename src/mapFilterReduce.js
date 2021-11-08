let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 1, productName: "Bardak", quantity: 2, unitPrice: 30 },
    { id: 1, productName: "Kalem", quantity: 1, unitPrice: 20 },
    { id: 1, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
    { id: 1, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 1, productName: "Pot", quantity: 5, unitPrice: 150 },

]

// map ile elemanları tektek dolaşır iterate eder ve istersen işlem yaptırabilirsin. Sana yeni bir array verir istersen
//tek tek elemanları dolaşıp "product" takma adını her birine sırayla vererek gerekli işlemi gerçekleştirir.
//cart.map(product=>console.log(product.productName))

//map de birden fazla işlem yapılacaksa kullanım bu şekilde oluyor
cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})


//reduce komutu
let total = cart.reduce((acc, product) => acc + product.unitPrice*product.quantity,0)

console.log(total)


//datanın içinde bir şey aramak veya filtrelemek için kullanılır
// yeni bir arrayin içine doldurur
let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)
