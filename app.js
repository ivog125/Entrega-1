let prod1 = { id: 1, nombre: "1. Camiseta Boca 2025/26", precio: 60000, estampado: [5,6,10,11,7,20] }
let prod2 = { id: 2, nombre: "2. Camsiseta Boca 2024/25", precio: 50000, estampado: [6,7,8,9,10,11] }
let prod3 = { id: 3, nombre: "3. Camiseta Boca 2000 Quilmes", precio: 55000, estampado: [7,9,10] }
let prod4 = { id: 4, nombre: "4. Camiseta Boca 96/97 Parmalat", precio: 50000, estampado: [7,10] }

let productos = []
productos.push(prod1)
productos.push(prod2)
productos.push(prod3)
productos.push(prod3)

console.log(productos)

let carrito = []

carrito.push(prod2)
console.log(carrito)

let seleccion = prompt("Bienvenidos al Almacen de Camisetas \nEscriba OK para continuar")

while(seleccion != "OK") {
    alert("Por favor, ingrese OK para ingresar a la tienda")
    seleccion = prompt("Bienvenidos al Almacen de Camisetas \nEscriba OK para continuar")
}

if(seleccion === "OK"){
    alert("A continuacion nuestra lista de productos: ")
alert(prod1.nombre+ "\n" + prod2.nombre + "\n" + prod3.nombre + "\n" + prod4.nombre)
}

while(seleccion == "OK"){
    let productos = prompt("Agregue una camiseta a su carrito de compras")
    let precio = 0

    if(productos == "1. Camiseta Boca 2025/26" || productos == "2. Camiseta Boca 2024/25" || productos == "3. Camiseta Boca 2000 Quilmes" || productos == "4. Camiseta Boca 96/97 Parmalat")
        switch(productos) {
    case "1. Camiseta Boca 2025/26":
        precio = 60000;
        break;
    case "2. Camiseta Boca 2024/25":
        precio = 50000;
        break;
    case "3. Camiseta Boca 2000 Quilmes":
        precio = 55000;
        break;
    case "4. Camiseta Boca 96/97 Parmalat":
        precio = 50000;
        break;
    default:
        break;
    }
}

