window.addEventListener("load", function (event) {
  // VARIABLES----------------------------------------------------------

  // cargo variable carrito del localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito"));

  // LAMAR A FUNCIONES--------------------------------------------------

  // FUNCIONES----------------------------------------------------------

  // Cambio de menu a scroll
  window.addEventListener("scroll", function (e) {
    let scrollVertical = window.scrollY;
    let barraNav = document.getElementById("navbar");

    if (scrollVertical > 300) {
      barraNav.classList.add("navbar-back");
    } else {
      barraNav.classList.remove("navbar-back");
    }
  });
});
