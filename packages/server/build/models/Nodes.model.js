"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NodeSchema = new mongoose_1.default.Schema({
    nodes: [
        {
            type: Object,
        },
    ],
    edges: [
        {
            type: Object,
        },
    ],
});
exports.NodeModel = mongoose_1.default.model("Node", NodeSchema);
