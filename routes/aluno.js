const express = require("express");

const Aluno = require("../models/model-aluno");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.send(alunos);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro buscando alunos");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const aluno = await Aluno.findOne({ id: req.params.id });
        res.send(aluno);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Erro buscando aluno com id ${req.params.id}`);
    }
});

router.post("/", async (req, res) => {
    try {
        const result = await Aluno.create({
            nome: req.body.nome,
            curso: req.body.curso,
            ira: req.body.ira,
        });
        res.send({ message: "Aluno criado com sucesso", _id: result._id });
    } catch (err) {
        console.error(err);
        res.status(400).send("Erro adicionando aluno");
    }
});

router.put("/:id", async (req, res) => {
    try {
        await Aluno.findByIdAndUpdate(req.params.id);
        res.send("Aluno atualizado com sucesso");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro atualizando aluno");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.send("Aluno removido com sucesso");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro deletando aluno");
    }
});

module.exports = router;
