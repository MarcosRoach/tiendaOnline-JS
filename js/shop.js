window.addEventListener("load", function (event) {
  // Declaro arr catalogo filtrado
  let arrFiltrado = catalogo;

  // Captura de DOM-----------------------------------------------------------------------
  let shop = document.getElementById("shop-productos");
  let select = document.getElementById("orden");
  let busNombre = document.getElementById("nProd");

  // Listener con  Opciones de Filtros
  select.addEventListener("change", () => {
    ordenar(select);
  });

  // Listener Busqueda
  busNombre.addEventListener("input", () => {
    let prodBuscar = busNombre.value.toLowerCase();

    filtrarProducto(prodBuscar, catalogo);
  });

  // FUNCIONES------------------------------------------------------------------------------

  // Cargar articulos al div shop
  function cargarCatalogoCompleto(arrCatalogo) {
    shop.innerHTML = "";
    arrCatalogo.forEach((producto) => {
      let nuevoProducto = document.createElement("div");

      nuevoProducto.classList.add(
        "tarjeta-productos",
        "col-6",
        "col-md-4",
        "col-lg-3"
      );

      nuevoProducto.innerHTML = `
      <div class="imagen img-fluid">
        <img src="../images/${producto.imagen_sm}.webp" alt="" />
      </div>

      <div class="texto text-center">
      <h4>${producto.nombre}</h4>
      <h5><span>$</span>${producto.precio}</h5>
      <button class="btn btn-outline-warning btn-sm comprar" id="${producto.id}">
        Comprar Producto
      </button>
    </div>
  `;

      shop.appendChild(nuevoProducto);
    });
    // cargar Listeners de Botones comprar
    listBtnCom();
  }

  function ordenarPrecioMenosMas(arr) {
    arr.sort((a, b) => a.precio - b.precio);

    // Renderizar catalogo ordenado
    cargarCatalogoCompleto(arr);
  }

  function ordenarPrecioMasMenos(arr) {
    arr.sort((a, b) => b.precio - a.precio);

    // Renderizar catalogo ordenado
    cargarCatalogoCompleto(arr);
  }

  function ordenarAlfabeticamenete(arr) {
    arr.sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Renderizar catalogo ordenado
    cargarCatalogoCompleto(arr);
  }

  function filtrarProducto(terminoBusqueda, arr) {
    arrFiltrado = arr.filter((producto) =>
      producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    // Renderizar Shop
    cargarCatalogoCompleto(arrFiltrado);
    ordenar(select);
  }

  function ordenar(sel) {
    valorSelect = sel.value;

    switch (valorSelect) {
      case "Alfabeticamente":
        ordenarAlfabeticamenete(arrFiltrado);
        break;

      case "mayorMenor":
        ordenarPrecioMasMenos(arrFiltrado);
        break;

      case "menorMayor":
        ordenarPrecioMenosMas(arrFiltrado);
        break;

      default:
        break;
    }
  }

  // LLAMAR A FUNCIONES---------------------------------------------------
  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  cargarCatalogoCompleto(catalogo);
});
