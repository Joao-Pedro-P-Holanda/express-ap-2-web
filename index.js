require("dotenv").config();
require("./db");

const cors = require("cors");
const express = require("express");
const alunoRouter = require("./routes/aluno");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/aluno", alunoRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {});
