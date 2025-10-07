const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/main");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send("El Backend está funcionando");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: req.body.map((item) => ({
        title: item.title,
        quantity: Number(item.quantity),
        unit_price: Number(item.price),
        currency_id: "ARS",
      })),
      back_urls: {
        success: "https://martin-juncos.github.io/success/",
        failure: "https://martin-juncos.github.io/failure/",
        pending: "https://martin-juncos.github.io/pending/",
      },
      auto_return: "approved",
    };
    const preference = new Preference(mercadoPagoClient);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
