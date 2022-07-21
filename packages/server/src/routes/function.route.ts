import express from "express";
import { generate, runCode } from "../controller/functions.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Router function`);
});

router.post("/generate", generate);
router.post("/run", runCode);

export default router;
