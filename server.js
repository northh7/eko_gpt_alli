const express = require("express");
const cors = require("cors");
const chatHandler = require("./api/chat");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", chatHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("GPT сервер запущен на порту " + PORT));
