const express = require('express');
const app = express();
const port = 5000; 

app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
