window.addEventListener("load", function (event) {
  // Cargo carrito de localStorage o si es vacio declaro la variable vacia
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    let carrito = [];
  }

  // CAPTURAS DE DOM------------------------------------------------------
  let tarjetaCarrito = document.getElementById("pedido");

  let cantidadProductos = document.getElementsByClassName("cantidad-productos");
  let totalCarrito = document.getElementsByClassName("total-carrito");

  // LLAMAR A FUNCIONES---------------------------------------------------
  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  renderizarCarrito(carrito);

  // MANIPULACION DE DOM--------------------------------------------------
  // Carga de tarjetas al DOM
  function renderizarCarrito() {
    tarjetaCarrito.innerHTML = "";
    let totalImporteCarrito = 0;

    if (carrito.length > 0) {
      carrito.forEach((producto) => {
        // veo que precio cargo si normal o decuento
        let totalFinal = precioVenta(producto);

        // acumulador carrito
        totalImporteCarrito += precioVenta(producto);

        let nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.classList.add(
          "pedido-tarjeta",
          "row",
          "mt-2",
          "mb-2",
          "ms-2",
          "me-2"
        );
        nuevaTarjeta.setAttribute("id", producto.id);

        nuevaTarjeta.innerHTML = `
                <div class="imagen col-12 col-md-4">
                  <img src="../images/${producto.imagen}.webp" alt="" />
                </div>
                <div class="datos col-12 col-md-8 pt-2 pb-2">
                  <h4>${producto.nombre}</h4>
                  <h5>${producto.marca}</h5>
                  <p>
                  ${producto.descripcion}
                  </p>
                  <h3>$ ${producto.precio}</h3>
                  <h3>Descuento ${producto.descuentoPorcentaje}%</h3>
                  <h2>Total $ ${totalFinal}</h2>
                </div>
                <div class="eliminar col-12">
                  <button class="btn-eliminar btn btn-warning" id="${producto.id}">Eliminar</button>
                </div>
        `;

        tarjetaCarrito.append(nuevaTarjeta);
      });
    } else {
      console.log("vacio");
      let divVacio = document.createElement("div");
      divVacio.classList.add("vacio", "mt-2", "mb-2");

      divVacio.innerHTML = `
                <div class="imagen-cont">
                  <img class ="imagen-carrito-vacio" src="../images/carrito_vacio.webp" alt="" />
                </div>
        `;

      tarjetaCarrito.append(divVacio);
    }

    // carga cantidad de productos
    for (const etiqueta of cantidadProductos) {
      if (carrito.length > 0) {
        etiqueta.innerText = carrito.length + " Productos";
      } else {
        etiqueta.innerText = carrito.length + " Producto";
      }
    }

    // cargar total del carrito
    for (const etiqueta of totalCarrito) {
      etiqueta.innerText = `$ ${totalImporteCarrito}`;
    }
  }

  // CAPTURA DE DOM----------------------------------------------------------------
  function botonesEliminar() {
    let botonesEliminar = document.getElementsByClassName("btn-eliminar");
    return botonesEliminar;
  }
  // genero el listener con los botones capturados del DOM
  cargarListeerEliminar(botonesEliminar());

  function cargarListeerEliminar(arrBotonesEliminar) {
    for (const boton of arrBotonesEliminar) {
      boton.addEventListener("click", () => {
        let idProducto = boton.id;
        eliminarProducto(idProducto, carrito);
      });
    }
  }

  // FUNCIONES------------------------------------------------------------

  // Cargar Icono Carrito
  function cargarCarritoIcono(arrCarrito) {
    const carritoCantidad = document.getElementById("carrito-cantidad");
    carritoCantidad.innerText = arrCarrito.length;
  }

  // devolver precio de venta normal o con descuento
  function precioVenta(producto) {
    if (producto.oferta == "si") {
      return producto.precioDescuento;
    } else {
      return producto.precio;
    }
  }

  // Eliminar producto de carrito
  function eliminarProducto(idProducto, arrCarrito) {
    let indice = indiceEliminar(idProducto, arrCarrito);

    // borrar elemento array
    arrCarrito.splice(indice, 1);

    // cargar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // cargar icono nav
    cargarCarritoIcono(arrCarrito);
    // redibujar carrito
    renderizarCarrito(carrito);
    swal("PRODUCTO", "ELIMINADO DEL CARRITO", "error");
    // genero los listener para los nuevos botones eliminar
    cargarListeerEliminar(botonesEliminar());
  }

  // Obtener Indice a eliminar
  function indiceEliminar(id, array) {
    let index = array.findIndex((elemento) => elemento.id == id);
    return index;
  }
});
