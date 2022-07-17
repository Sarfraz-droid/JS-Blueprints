import express from "express";
import { run, test } from "../controller/node.controller";

const router = express.Router();

router.post("/run", run);
router.post("/test/:id", test);

export default router;
