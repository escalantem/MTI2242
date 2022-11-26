import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.send("Hola");
});

export default app;
