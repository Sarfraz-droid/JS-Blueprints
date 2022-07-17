import express from "express";
import functionRoutes from "./routes/function.route";
import NodeRoutes from "./routes/nodes.route";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/function", functionRoutes);
app.use("/node", NodeRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
