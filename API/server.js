import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import dbConnection from "./Database/dbConnection.js";
import { init } from "./src/modules/index.routes.js";

dotenv.config();
const app = express();
dbConnection();

const port = process.env.API_PORT;
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("uploads"));
init(app);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
