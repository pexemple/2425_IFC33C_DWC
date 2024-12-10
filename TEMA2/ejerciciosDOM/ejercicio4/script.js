let cambiarImagen = false;

function cambiar() {
    const imagen = document.getElementById("imagen");
    cambiarImagen = !cambiarImagen; 

    if (cambiarImagen) {
        imagen.src = "img/amarillo.png";
    } else {
        imagen.src = "img/rojo.png";
    }


}


