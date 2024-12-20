import bodyParser from "body-parser";
import express from "express";
import mainRoutes from "./routes";

const app = express();
app.use(bodyParser.json());
app.use("/api", mainRoutes);

export default app;
