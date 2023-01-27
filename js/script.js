window.addEventListener("load", function (event) {
  // ARRAY DE PRODUCTOS
  catalogo = [
    {
      id: 1,
      nombre: "Auriculares Sony",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Sony",
      precio: 9000,
      oferta: "si",
      descuentoPorcentaje: 20,
      precioDescuento: 7200,
      imagen: "auricularesVincha",
      imagen_sm: "auricularesVincha-sm",
    },
    {
      id: 2,
      nombre: "Parlante Sony",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Sony",
      precio: 3000,
      oferta: "si",
      descuentoPorcentaje: 10,
      precioDescuento: 2700,
      imagen: "parlante-portatil",
      imagen_sm: "parlante-portatil-sm",
    },
    {
      id: 3,
      nombre: "Iphone 7",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Celular",
      marca: "Iphone",
      precio: 120000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "iphone7",
      imagen_sm: "iphone7-sm",
    },
    {
      id: 4,
      nombre: "Camara IP",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Seguridad",
      marca: "Foscam",
      precio: 12000,
      oferta: "si",
      descuentoPorcentaje: 15,
      precioDescuento: 10200,
      imagen: "camara-ip",
      imagen_sm: "camara-ip-sm",
    },
    {
      id: 5,
      nombre: "Smart Watch",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Relojes",
      marca: "Xiaomy",
      precio: 8000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "smart-watch",
      imagen_sm: "smart-watch-sm",
    },
    {
      id: 6,
      nombre: "Ear Buts",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Xiaomy",
      precio: 5000,
      oferta: "si",
      descuentoPorcentaje: 10,
      precioDescuento: 4500,
      imagen: "ear-buts",
      imagen_sm: "ear-buts-sm",
    },
    {
      id: 7,
      nombre: "Lentes VR",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Realidad Virtual",
      marca: "Sony",
      precio: 29000,
      oferta: "si",
      descuentoPorcentaje: 30,
      precioDescuento: 20300,
      imagen: "lente-rv",
      imagen_sm: "lente-rv-sm",
    },
    {
      id: 8,
      nombre: "Camara Web",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Multimedia",
      marca: "Logitech",
      precio: 11000,
      oferta: "si",
      descuentoPorcentaje: 10,
      precioDescuento: 9900,
      imagen: "camara-web",
      imagen_sm: "camara-web-sm",
    },
    {
      id: 9,
      nombre: "Alexa",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Home",
      marca: "Google",
      precio: 50000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "alexa",
      imagen_sm: "alexa-sm",
    },
    {
      id: 10,
      nombre: "Termo Parlante",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Philco",
      precio: 6000,
      oferta: "si",
      descuentoPorcentaje: 13,
      precioDescuento: 5220,
      imagen: "termo-parlante",
      imagen_sm: "termo-parlante-sm",
    },
    {
      id: 11,
      nombre: "Smart Watch",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Relojes",
      marca: "Samsumg",
      precio: 29000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "smart-watch2",
      imagen_sm: "smart-watch2-sm",
    },
    {
      id: 12,
      nombre: "Parlante Llavero",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Jbl",
      precio: 8000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "parlante-llavero",
      imagen_sm: "parlante-llavero-sm",
    },
    {
      id: 13,
      nombre: "Parlante Rosa",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Jbl",
      precio: 5000,
      oferta: "no",
      descuentoPorcentaje: 0,
      precioDescuento: 0,
      imagen: "parlante-rosa",
      imagen_sm: "parlante-rosa-sm",
    },
    {
      id: 15,
      nombre: "Auriculares Rosa",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Audio",
      marca: "Sony",
      precio: 6300,
      oferta: "si",
      descuentoPorcentaje: 10,
      precioDescuento: 0,
      imagen: "auriculares-rosa",
      imagen_sm: "auriculares-rosa-sm",
    },
    {
      id: 16,
      nombre: "Celular S22",
      descripcion:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaqueillo, impedit tempore corporis vitae quisquam alias voluptatem isteconsequuntur, assumenda earum sed! Sequi, perspiciatis. Quas delectusvoluptatibus iure commodi! ",
      rubro: "Celular",
      marca: "Samsumg",
      precio: 220000,
      oferta: "si",
      descuentoPorcentaje: 15,
      precioDescuento: 187000,
      imagen: "s22",
      imagen_sm: "s22-sm",
    },
  ];

  // Cargo carrito de localStorage o si es vacio declaro la variable vacia
  let carrito = [];
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito);
  } else {
    carrito = [];
    console.log(carrito);
  }

  // OBJETOS
  class Producto {
    constructor(
      id,
      nombre,
      descripcion,
      rubro,
      precio,
      oferta,
      descuentoPorcentaje,
      imagen
    ) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.rubro = rubro;
      this.precio = precio;
      this.oferta = oferta;
      this.descuentoPorcentaje = descuentoPorcentaje;
      this.imagen = imagen;
    }

    // Metodos
    mostrarProducto() {
      console.log(
        `El Producto ${nombre} tiene un precio de ${precio} y ${oferta} esta de oferta`
      );
    }
  }

  // LLAMAR A FUNCIONES---------------------------------------------------

  // Cargar las Primeras 6 Ofertas
  cargarOfertas();

  // Cargar Productos
  cargarProductosTop10();

  // Cargar Icono Carrito
  cargarCarritoIcono(carrito);

  // FUNCIONES------------------------------------------------------------

  // Cargar Icono Carrito
  function cargarCarritoIcono(arrCarrito) {
    const carritoCantidad = document.getElementById("carrito-cantidad");
    carritoCantidad.innerText = arrCarrito.length;
  }

  // Cargar Ofertas
  function cargarOfertas() {
    let ofertasContenedor = document.getElementById("ofertas");
    ofertasContenedor.innerHTML = "";

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
            <h4 class="porcentaje"><span>${producto.descuentoPorcentaje} </span> %</h4>
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
    let productosContenedor = document.getElementById("productos");
    productosContenedor.innerHTML = "";

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

  // Funcion Agregar producto al carrito
  function agregarCarrito(arrCatalogo, arrCarrito, idProducto) {
    // // llamo a funcion para buscar producto a carrito
    let productoBuscado = buscarProducto(idProducto, arrCatalogo);
    if (productoBuscado !== undefined) {
      // Inserto Producto en el Carrito
      insertarProducto(productoBuscado, arrCarrito);
      swal("PRODUCTO", "AGREGADO AL CARRITO", "success");

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

  // Insertar Producto carrito
  function insertarProducto(producto, arrCarrito) {
    arrCarrito.push(producto);
  }

  // LISTENERS
  // Capturo Botones de Compra
  const botonesCompra = document.querySelectorAll(".comprar");

  // funcion Click comprar
  const comprarClick = function (idProducto) {
    agregarCarrito(catalogo, carrito, idProducto);
  };

  // botones es un arreglo así que recorro para crearle un listener a cada uno
  botonesCompra.forEach((boton) => {
    //Agregar listener
    boton.addEventListener("click", () => {
      let idProducto = boton.id;
      comprarClick(idProducto);
    });
  });
});
