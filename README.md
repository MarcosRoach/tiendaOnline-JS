# **Proyecto _Tienda Online_**

Proyecto de tienda online realizado en HTML5 + SASS + JS, como primera acción se cargan una lista de artículos de un archivo. JSON para después poder interactuar con los mismo en las 3 páginas que comprende el proyecto. El

[Web del Proyecyo en GitHub Pages](https://marcosroach.github.io/tiendaOnline-JS/)

---

> Todas las páginas contienen un nav con un icono de carrito que te dirige a la página "carrito" con un indicador de cuantos artículos hay en el mismo.

### **LAS PÁGINAS QUE DISPONE SON:**

1.  Home
    se compone de 2 secciones principales

    - Ofertas:
      - Se cargan las primeras 6 ofertas encontradas en el catálogo de productos .JSON
    - Top 10 Productos:
      - Se cargan las primeros 10 productos encontrados en el catalogo .JSON, ignorando las 6 primeras ofertas cargadas en la sección anterior.

    > Cada producto se agrega en forma de tarjeta con un botón de comprar el cual agrega el producto al carrito si es la primera compra del mismo y en caso de que el articulo este ya en el carrito se le suma 1 a la cantidad

2.  Shop

    - Se cargan todos los artículos encontrados en el catalogo .JSON, los mismo se generan en tarjetas con el botón comprar para poder agregar al carrito que funciona de igual forma que en “home” agrega el producto al carrito si es la primer compra y si existe en el carrito incrementa su cantidad en 1.
    - Tiene un buscador por nombre de producto que funciona de manera combinada con los filtros para ordenar los productos.
      - Filtros:
        - ALfabeticamente
        - Precio de mayor a menor
        - Precio de menor a mayor

3.  Carrito

    - Tiene un listado de todos los artículos agregados al carrito presentados en forma de tarjetas,
      Cada tarjeta tiene 2 botones.

              - Agregar:
                - Incrementa en 1 la cantidad.
              - Eliminar :
                - Si la cantidad es 1, elimina el producto del carrito.
                - Si la cantidad es mayor a 1 resta 1 unidad a la cantidad.

    - Tiene un botón finalizar compra que simula la compra emitiendo un cartel con 2 opciones:
    - SI: Confirma la compra generando Vaciado del carrito.
    - NO: Vuelve a la página carrito sin ningún cambio.
