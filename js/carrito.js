window.addEventListener("load", function (event) {
  // CAPTURAS DE DOM------------------------------------------------------
  // div de pedido apara cargar el carrito
  let tarjetaCarrito = document.getElementById("pedido");
  // etiqueta cantidad d productos
  let cantidadProductos = document.getElementsByClassName("cantidad-productos");
  // etiqueta total de pedido
  let totalCarrito = document.getElementsByClassName("total-carrito");
  // botones eliminar
  let botonesEliminar = document.getElementsByClassName("btn-eliminar");
  // botones agregar
  let botonesAgregar = document.getElementsByClassName("btn-agregar");
  // Boton Finalizr compra
  let finalizarCompra = document.getElementById("finalizar-compra");

  // CAPTURA DE DOM-------------------------------------------------------

  // LLAMAR A FUNCIONES---------------------------------------------------
  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  // dibujar carrito
  renderizarCarrito(carrito);

  // LLAMAR A FUNCIONES---------------------------------------------------

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

        totalImporteCarrito = calculoImporteCarrito(carrito);

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
                  <div>
                  <h3> Cantidad:  ${producto.cantidad}</h3>
                  </div>
                  <h3>$ ${producto.precio}</h3>
                  <h3>Descuento ${producto.descuentoPorcentaje}%</h3>
                  <h2>Total $ ${totalFinal}</h2>
                </div>
                <div class="eliminar row col-12">
                  <button class="btn-eliminar btn btn-warning col-6" id="${producto.id}">Eliminar</button>
                  <button class="btn-agregar btn btn-primary col-6" id="${producto.id}">Agregar</button>
                </div>
        `;

        tarjetaCarrito.append(nuevaTarjeta);
      });
    } else {
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
      const cantProCarrito = cantidadProductosCarrito(carrito);

      if (carrito.length > 0) {
        etiqueta.innerText = cantProCarrito + " Productos";
      } else {
        etiqueta.innerText = cantProCarrito + " Producto";
      }
    }

    // cargar total del carrito
    for (const etiqueta of totalCarrito) {
      etiqueta.innerText = `$ ${totalImporteCarrito}`;
    }
  }

  // genero el listener con los botones capturados del DOM
  cargarListeerEliminar(botonesEliminar);
  cargarListeerAgregar(botonesAgregar);

  // listener finalizar compra
  finalizarCompra.addEventListener("click", () => {
    Swal.fire({
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },

      title: "Seguro de Finalizar la Compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3BED6D",
      cancelButtonColor: "#ED1818",
      confirmButtonText: "SI, Finalizar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // vaciar Local storage
        localStorage.removeItem("carrito");
        // vaciar carrito
        carrito = [];
        cargarCarritoIcono(carrito);

        Swal.fire({
          title: "Compra Finalizada",
          icon: "success",
        });

        renderizarCarrito(carrito);
      } else {
      }
    });
  });

  // FUNCIONES------------------------------------------------------------

  function cargarListeerEliminar(arrBotonesEliminar) {
    for (const boton of arrBotonesEliminar) {
      boton.addEventListener("click", () => {
        let idProducto = boton.id;
        eliminarProducto(idProducto, carrito);
      });
    }
  }

  function cargarListeerAgregar(arrBotonesAgregar) {
    for (const boton of arrBotonesAgregar) {
      boton.addEventListener("click", () => {
        let idProducto = boton.id;
        agregarProducto(idProducto, carrito);
      });
    }
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
    let proEliminar = buscarProducto(idProducto, arrCarrito);
    let indice = indiceEliminar(idProducto, arrCarrito);

    if (proEliminar.cantidad > 1) {
      proEliminar.cantidad -= 1;
    } else {
      // borrar elemento array
      arrCarrito.splice(indice, 1);
    }

    // cargar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // cargar icono nav
    cargarCarritoIcono(arrCarrito);
    // redibujar carrito
    renderizarCarrito(carrito);
    // alerta
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: "Producto eliminado del carrito",
      showConfirmButton: false,
      timer: 2000,
    });
    // genero los listener para los nuevos botones eliminar
    cargarListeerEliminar(botonesEliminar);
    // genero los listener para los nuevos botones Agregar
    cargarListeerAgregar(botonesAgregar);
  }

  function agregarProducto(idProducto, arrCarrito) {
    let productoBuscado = buscarProducto(idProducto, arrCarrito);
    productoBuscado.cantidad += 1;

    // cargar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // cargar icono nav
    cargarCarritoIcono(arrCarrito);
    // redibujar carrito
    renderizarCarrito(carrito);
    // alerta
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Producto Agregado al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
    // genero los listener para los nuevos botones Agregar
    cargarListeerAgregar(botonesAgregar);
    // genero los listener para los nuevos botones eliminar
    cargarListeerEliminar(botonesEliminar);
  }

  // Obtener Indice a eliminar
  function indiceEliminar(id, array) {
    let index = array.findIndex((elemento) => elemento.id == id);
    return index;
  }

  function calculoImporteCarrito(arrCarrito) {
    let total = 0;

    arrCarrito.forEach((producto) => {
      let preVent = precioVenta(producto);
      total += producto.cantidad * preVent;
    });

    return total;
  }
});
