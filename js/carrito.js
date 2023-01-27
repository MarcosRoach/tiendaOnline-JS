window.addEventListener("load", function (event) {
  // Cargo carrito de localStorage o si es vacio declaro la variable vacia
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    let carrito = [];
  }

  // CAPTURAS DE DOM------------------------------------------------------
  let tarjetaCarrito = document.getElementById("pedido");
  tarjetaCarrito.innerHTML = "";

  // Carga de tarjetas al DOM
  if (carrito.length > 0) {
    carrito.forEach((producto) => {
      // veo que precio cargo si normal o decuento
      let totalFinal;
      if (producto.oferta == "si") {
        totalFinal = producto.precioDescuento;
      } else {
        totalFinal = producto.precio;
      }
      console.log(totalFinal);

      let nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.classList.add("pedido-tarjeta", "row", "mt-2", "mb-2");

      nuevaTarjeta.innerHTML = `
              <div class="imagen col-4">
                <img src="../images/${producto.imagen}.webp" alt="" />
              </div>
              <div class="datos col-8 pt-2 pb-2">
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
                <button class="btn btn-warning">Eliminar</button>
              </div>
      `;

      tarjetaCarrito.append(nuevaTarjeta);
    });
  } else {
    alert("Carrito vacio");
  }

  // LLAMAR A FUNCIONES---------------------------------------------------
  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  // FUNCIONES------------------------------------------------------------
  // Cargar Icono Carrito
  function cargarCarritoIcono(arrCarrito) {
    const carritoCantidad = document.getElementById("carrito-cantidad");
    carritoCantidad.innerText = arrCarrito.length;
  }
});
