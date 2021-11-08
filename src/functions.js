function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklenen ürün :" + productName + " adet "+ quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

//Arrow function
let sayHello = ()=> {
    console.log("Hello World")
}
sayHello()

//Normal funciton ama fonksiyonu bir değere ataybildiğin bir teknik
let sayHello2= function () {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",5,10)
addToCart2("Limon",5,10)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToCart3(product1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//gönderilen parametleri bir arrayin ( numbers adını verdiğin array) içerisine koy.
function add(bisey,...numbers) { // ...x REST operatörü birleştirir
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
add(20,30,40)

//spread  operatörü ayrıştırır
let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))


// ne operatrü olduğunu bul!!
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, newUnitPrice:unitPrice, newQuantity:quantity} 
    = {productName:"Karpuz", unitPrice:10, quantity:5}) //parantez içine alınca eşitliğin sol tarafındaki adamlara 
                                                //sen bir obje değilsin demiş oluyoruz yoksa kendini obje sanıyor.
console.log(product5)
