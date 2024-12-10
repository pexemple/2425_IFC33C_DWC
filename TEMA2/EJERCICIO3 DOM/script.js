function mostrarURLActual(){
   alert(window.location.href)
}

function irAtras(){
    window.history.back()
}

function irAdelante(){
    window.history.forward()
}

function mostrarInfoNavegador(){
    alert( `Esto es el nombre del navegador: ${window.navigator.appName} \n`  +
            `Esto es el nombre del agente: ${window.navigator.userAgent} \n` +
            `Esto es el lenguaje de la pagina: ${window.navigator.language} \n` +
            `Esto es para saber si esta online: ${window.navigator.onLine} \n`)
}

function redirigirURL(){
    var url = document.getElementById('urlInput').value;
    if (url) {
        window.location.assign(url);
    } else {
        alert("Si us plau, introdueix una URL vàlida.");
    }
}

function abrirPopup() {
    popupWindow = window.open("https://paucasesnovescifp.cat", "Pau", "width=800,height=600");
}

function cerrarPopup(){
        popupWindow.close();
}