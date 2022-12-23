import "dotenv/config";
import express from "express";
import NodeRoutes from "./routes/nodes.route";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://fflow-kohl.vercel.app",
//       process?.env?.DEPLOY || "",
//     ],
//   })
// );

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.2cmink6.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/node", NodeRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
