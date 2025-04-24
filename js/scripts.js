// URL do backend (substitua se estiver em produção)
const API_URL = "http://localhost:8000"; 

// Exemplo 1: Chamada básica
fetch(`${API_URL}/api/hello`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // {"message": "Olá, Bruno! Sou o backend Python."}
    document.getElementById("mensagem").innerText = data.message;
  })
  .catch(error => console.error("Erro:", error));

