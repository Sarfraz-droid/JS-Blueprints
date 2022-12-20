"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodes = exports.save = void 0;
const nodes_model_1 = require("../models/nodes.model");
const save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body) {
        res.status(400).send("No body found");
        return;
    }
    try {
        const node = yield nodes_model_1.NodeModel.create(body);
        res.status(200).send(node);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
exports.save = save;
const getNodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const nodes = yield nodes_model_1.NodeModel.findById(id);
        if (!nodes)
            return res.status(404).send("Node with id " + id + " not found");
        res.status(200).send(nodes);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
exports.getNodes = getNodes;
