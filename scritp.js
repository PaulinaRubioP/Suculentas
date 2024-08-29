//Función alerta carrito
function alerta() {
    alert("Your Cart is empty");
}

//Función eliminar cuadro cookies
function eliminar_cookies(){
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

//Función cambiar imagen suculenta
function cambiaSuculenta(elemento_img){
    elemento_img.src = "images/assets/succulents-2.jpg";
}
function regresaSuculenta(elemento_img){
    elemento_img.src = "images/assets/succulents-1.jpg";
}