"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_controller_1 = require("../controller/node.controller");
const router = express_1.default.Router();
router.post("/save", node_controller_1.save);
router.get("/:id", node_controller_1.getNodes);
exports.default = router;
