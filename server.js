const express = require("express");
const cors = require("cors");

const alunos = require("./dados");

const app = express();
const PORT = 3008;

app.use(cors());
app.use(express.json());


// READ
app.get("/alunos", (req, res) => {
  res.json(alunos);
});


// CREATE
app.post("/alunos", (req, res) => {

  const novoAluno = {
    id: Date.now(),
    nome: req.body.nome,
    curso: req.body.curso,
    idade: req.body.idade
  };

  alunos.push(novoAluno);

  res.json(novoAluno);
});


// UPDATE
app.put("/alunos/:id", (req, res) => {

  const id = Number(req.params.id);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado"
    });
  }

  aluno.nome = req.body.nome;
  aluno.curso = req.body.curso;
  aluno.idade = req.body.idade;

  res.json(aluno);
});


// DELETE
app.delete("/alunos/:id", (req, res) => {

  const id = Number(req.params.id);

  const indice = alunos.findIndex(a => a.id === id);

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado"
    });
  }

  alunos.splice(indice, 1);

  res.json({
    mensagem: "Aluno excluído"
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});