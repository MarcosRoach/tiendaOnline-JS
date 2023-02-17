// Cargar Icono Carrito
function cargarCarritoIcono(arrCarrito) {
  let carritoCantidad = document.getElementById("carrito-cantidad");

  let cantidadProductos = cantidadProductosCarrito(arrCarrito);
  carritoCantidad.innerText = cantidadProductos;
}
// Obtener cantidad de productos totales del carrito
function cantidadProductosCarrito(arrCarrito) {
  let cantidadProductos = 0;
  arrCarrito.forEach((producto) => {
    cantidadProductos += producto.cantidad;
  });

  return cantidadProductos;
}

// Capturo Botones de Compra
function listBtnCom() {
  const botonesCompra = document.querySelectorAll(".comprar");
  // botones es un arreglo así que recorro para crearle un listener a cada uno
  botonesCompra.forEach((boton) => {
    //Agregar listener
    boton.addEventListener("click", () => {
      let idProducto = boton.id;
      comprarClick(idProducto);
    });
  });
}

// funcion Click comprar
const comprarClick = function (idProducto) {
  agregarCarrito(catalogo, carrito, idProducto);
};

// Funcion Agregar producto al carrito
function agregarCarrito(arrCatalogo, arrCarrito, idProducto) {
  // llamo a funcion para buscar producto en catalogo
  let productoBuscado = buscarProducto(idProducto, arrCatalogo);

  if (productoBuscado !== undefined) {
    // Busco si ese producto ya esta en el carrito
    let productoEnCarrito = buscarProductoSinAlert(idProducto, arrCarrito);

    if (productoEnCarrito == undefined) {
      // Inserto Producto en el Carrito
      productoBuscado.cantidad = 1;
      insertarProducto(productoBuscado, arrCarrito);
    } else {
      productoEnCarrito.cantidad += 1;
    }

    // alerta
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 2000,
    });

    cargarCarritoIcono(carrito);

    // cargar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
}
// Funcion buscar producto en array
function buscarProducto(idProducto, arrCatalogo) {
  let productoEncontrado = arrCatalogo.find(
    (producto) => producto.id == idProducto
  );

  if (productoEncontrado == undefined) {
    alert("Producto no existe");
  } else {
    return productoEncontrado;
  }
}
function buscarProductoSinAlert(idProducto, arrCatalogo) {
  let productoEncontrado = arrCatalogo.find(
    (producto) => producto.id == idProducto
  );

  if (productoEncontrado == undefined) {
  } else {
    return productoEncontrado;
  }
}

// Insertar Producto carrito
function insertarProducto(producto, arrCarrito) {
  arrCarrito.push(producto);
}
