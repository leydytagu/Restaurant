/**
 * Lógica para crear pedidos y cobrar los pedidos del usuario
 */


const usuario = { 
  nombre: "Tatiana",
  edad: 30,
  deuda: 0 // el usuario sabe cunanto debe
}

let pedido = []
let costoPedido = 0

// Lista todos los productos del menú 
const mostrarMenu = () => {
  console.log(`CÓDIGO - NOMBRE PRODUCTO - COSTO`)
  for(let producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}

const pedirProducto = cod => {
  if (!cod) return "Ingrese un código valido" //validar el código que escribe el usuario - !si no existe

  const productoEncontrado = productos.find(producto => producto.codigo === cod) //buscar el codigo del producto. Preguntar 
  if (!productoEncontrado) return "El producto no existe" //buscar si el producto existe

  pedido.push(productoEncontrado) // si el producto existe (agreagar un objeto al array con.push)
  console.log("El producto ha sido agregado a su pedido. Su pedido es:") 
  return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
  let costo = 0 //variable para que el costo inicie en 0
  for (producto of pedido) { //llamar un array con for
    costo += producto.costo //retorna el costo del pedido
  }
  costoPedido = costo
  return costoPedido
}

const finalizarPedido = () => {
  calcularCosto()
  usuario.deuda = costoPedido // guarde el valor del pedido en deuda antes de borrar

  pedido = [] // esta en 0 para empezar uno nuevo
  costoPedido = 0 // el usuario finaliza el pedido resetea el pedido

  return `${usuario.nombre}, debes pagar ${usuario.deuda} dólares.` //concatenar usuario y deuda
}


// Función que permite pagar todo un pedido y entrega cambio si es necesario.
const pagarPedido = montoEntregado => { //el valor que el usuario paga
  if(typeof montoEntregado === "number") { //probar que el valor sea numerico
    if (montoEntregado < usuario.deuda) {//si el monto en menor a la deuda?
      return `No te alcanza para pagar tu pedido.`
    } else if (montoEntregado === usuario.deuda) { //si el monto es igual a la deuda
      usuario.deuda = 0 // el usuario ya no tiene deuda
      return `Tu pedido ha sido pagado.`
    } else { // si el pedido fue pagado y necesita cambio
      console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}.`)
      usuario.deuda = 0 // la deuda del usuario luego de pagar el pedido
      return "Deuda pagada"
    }
  } else {
    return "Dato ingresado de forma erronea"
  }  
} 