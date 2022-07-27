"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const nodes_route_1 = __importDefault(require("./routes/nodes.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.2cmink6.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.log(err);
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/node", nodes_route_1.default);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
