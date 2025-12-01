import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import advice from "./api/advice.js";

const app = express();
app.use(bodyParser.json());

// API
app.post("/api/advice", advice);

// トップページ用の簡単なルート
app.get("/", (req, res) => {
  res.send("<h1>Care AI App is running!</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
