let catalogo = [];
// consumir JSON de Catalogo

async function cargarCatalogo() {
  const response = await fetch("../JSON/productos.json");
  // extaer datos del JSON en forma de objetos
  const data = await response.json();

  // le asigno clase a cada objeto
  for (let producto of data) {
    nuevoProducto = new Producto(
      producto.id,
      producto.nombre,
      producto.descripcion,
      producto.rubro,
      producto.marca,
      producto.precio,
      producto.oferta,
      producto.descuentoPorcentaje,
      producto.precioDescuento,
      producto.imagen,
      producto.imagen_sm
    );

    // agrego el producto con clase al array
    catalogo.push(nuevoProducto);
  }
}

// Cargar el catalogo
cargarCatalogo();
