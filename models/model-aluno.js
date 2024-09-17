const { default: mongoose } = require("mongoose");

const schemaAluno = new mongoose.Schema({
    nome: String,
    curso: String,
    ira: Number,
});

const Aluno = mongoose.model("Aluno", schemaAluno);

module.exports = Aluno;
