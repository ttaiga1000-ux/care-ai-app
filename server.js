import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import advice from "./api/advice.js";

const app = express();
app.use(bodyParser.json());

// API
app.post("/api/advice", advice);

// フロント用（dist フォルダがある場合）
app.use(express.static("dist"));

// トップページ確認用
app.get("/", (req, res) => {
  res.send("Care AI App is running! ✅");
});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
