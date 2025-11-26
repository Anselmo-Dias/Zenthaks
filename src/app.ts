import express from "express";
import jogadorRoutes from "./routes/jogadorRoutes.js";
import missaoRoutes from "./routes/missaoRoutes.js";

export const app = express();

app.use(express.json());

// Rotas
app.use(jogadorRoutes);
app.use(missaoRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.status(200).send("Zenthaks");
});
