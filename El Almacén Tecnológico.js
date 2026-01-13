let inventario = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 0 },
    { nombre: "Teclado", precio: 50, stock: 12 },
    { nombre: "Monitor", precio: 200, stock: 3 },
    { nombre: "Audífonos", precio: 80, stock: 0 }
];
 
// Filtrado
function filtrado_Disponiple (inventario) {
    let disponiples = []
    const logitud = inventario.length
    for( let i = 0 ; i < logitud ; i++) {
         if(inventario[i].stock > 0) {
             disponiples.push(inventario[i])
             console.log(disponiples)
         }
    }
}

filtrado_Disponiple(inventario)

// Calcular el precio total del inventario
function CalcualarValorTotal (inventario) {
        let valortotal = 0
    for(let i = 0 ; i < inventario.length ; i++) {
         valortotal += inventario[i].precio * inventario[i].stock
    }
    console.log(`Precio final  del inventario  : ${valortotal}`)
}

CalcualarValorTotal(inventario)

//aplicarInflacion

function aplicarInflacion (inventario) {
    let inventarioNuevo = []
    let calcular = 0
    for(let i = 0 ; i < inventario.length ; i++) {
         calcular = inventario[i].precio * 1.15

        inventarioNuevo.push({
        nombre: inventario[i].nombre,
        precioConInflacion: calcular,
    });
    }
    
    console.log(inventarioNuevo)
}

aplicarInflacion(inventario)



function Busqueda (inventario , Nombre_buscar ) {
        for (let i = 0; i < inventario.length; i++) {
                if(inventario[i].nombre === Nombre_buscar) {
                    console.log("Lo encontramos") 
                    break
                }
        }
}


Busqueda(inventario , "Laptop")