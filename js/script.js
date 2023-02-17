window.addEventListener("load", function (event) {
  // CAPTURAS DE DOM------------------------------------------------------

  // div de ofertas
  let ofertasContenedor = document.getElementById("ofertas");
  // div de productos
  let productosContenedor = document.getElementById("productos");
  // globo de carrito

  // CAPTURAS DE DOM------------------------------------------------------

  // LLAMAR A FUNCIONES---------------------------------------------------

  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  // Cargar Ofertas
  cargarOfertas();

  // Cargar Top10
  cargarProductosTop10();

  // cargar Listeners de Botones comprar
  listBtnCom();

  // FUNCIONES------------------------------------------------------------

  // Cargar Ofertas
  function cargarOfertas() {
    // vacio div de ofertas
    ofertasContenedor.innerHTML = "";

    // cargo solo las primeras 6 ofertas
    let maximoOfertas = 1;
    catalogo.forEach((producto) => {
      if (producto.oferta == "si" && maximoOfertas <= 6) {
        let nuevaOferta = document.createElement("div");
        nuevaOferta.classList.add(
          "tarjeta-oferta",
          "col-12",
          "col-md-6",
          "col-lg-4"
        );

        nuevaOferta.innerHTML = `
          <div class="oferta-item pt-3 pb-3 ps-2 pe-2">
            <div class="imagen col-7">
              <img
               class="img-fluid"
               src="images/${producto.imagen}.webp"
               alt=""
              />
              <h2 class="text-center pt-1">${producto.nombre}</h2>
            </div>
          <div class="texto col-5 text-center">
            <h4>DESCUENTO</h4>
            <h4><span>${producto.descuentoPorcentaje} </span> %</h4>
            <h4> $ ${producto.precioDescuento} </h4>
            <button class="btn btn-outline-warning btn-sm comprar" id="${producto.id}">COMPRAR</button>
            button  
          </div>
          </div>
        `;

        ofertasContenedor.appendChild(nuevaOferta);
        maximoOfertas += 1;
      }
    });
  }

  // cargar Primeros 10 productos ignorando las ofertas cargadas
  function cargarProductosTop10() {
    // vacio div de productos
    productosContenedor.innerHTML = "";

    // cargo los primeros 10 productos evitando las 6 primeras ofertas
    let ofertasDescartadas = 1;
    let productosCargados = 1;

    catalogo.forEach((producto) => {
      if (producto.oferta == "si" && ofertasDescartadas <= 6) {
        ofertasDescartadas += 1;
      } else {
        if (productosCargados < 9) {
          let nuevoProducto = document.createElement("div");
          nuevoProducto.classList.add(
            "tarjeta-productos",
            "col-6",
            "col-md-4",
            "col-lg-3"
          );

          nuevoProducto.innerHTML = `
              <div class="imagen img-fluid">
                <img src="images/${producto.imagen_sm}.webp" alt="" />
              </div>
  
              <div class="texto text-center">
              <h4>${producto.nombre}</h4>
              <h5><span>$</span>${producto.precio}</h5>
              <button class="btn btn-outline-warning btn-sm comprar" id="${producto.id}">
                Comprar Producto
              </button>
            </div>
          `;

          productosContenedor.appendChild(nuevoProducto);

          productosCargados += 1;
        }
      }
    });
  }
});
