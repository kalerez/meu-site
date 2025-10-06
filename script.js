function mostrarMensagem() {
  alert("Olá! Visitante! 😄");
}
function enviarMensagem() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const mensagem = input.value.trim();

  if (mensagem === "") return; // não envia mensagem vazia

  // Mostra a mensagem do usuário
  chatBox.innerHTML += "<p><b>Você:</b> " + mensagem + "</p>";

  // Resposta simples do site
  let resposta = "Não entendi 😅";

  if (mensagem.toLowerCase() === "oi") {
    resposta = "Oie!";
  } else if (mensagem.toLowerCase() === "tudo bem?") {
    resposta = "Tudo ótimo! 😄";
  }

  // Mostra a resposta
  chatBox.innerHTML += "<p><b>Site:</b> " + resposta + "</p>";

  // Limpa o campo de texto
  input.value = "";

  // Rola o chat para baixo automaticamente
  chatBox.scrollTop = chatBox.scrollHeight;
}
