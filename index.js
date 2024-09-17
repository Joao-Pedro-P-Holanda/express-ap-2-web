require("dotenv").config();
require("./db");
const express = require("express");
const alunoRouter = require("./routes/aluno");

const app = express();

app.use(express.json());
app.use("/aluno", alunoRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {});
