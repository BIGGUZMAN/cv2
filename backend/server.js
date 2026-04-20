import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/form", async (req, res) => {
  console.log("Datos recibidos en proxy:", req.body);
  
  try {
    // AQUÍ PEGÁSTE LA URL CORRECTA
    const response = await fetch("https://script.google.com/macros/s/AKfycbwIE8pik9aucktKPRXcFRwAX0vMSfaP-eEvaCS8ceLdw5xNkpxE4w8-XWozFN19cgZa/exec", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
      redirect: 'follow' // OBLIGATORIO para Google Scripts
    });

    const data = await response.json();
    console.log("Respuesta de Google:", data);
    res.json(data);

  } catch (err) {
    console.error("Error en la conexión con Google:", err);
    res.status(500).json({ error: "Error en el servidor proxy" });
  }
});

app.listen(4000, () => console.log("Proxy corriendo en http://localhost:4000"));