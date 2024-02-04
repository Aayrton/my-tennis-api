"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("./routes/players"));
const middlewares_1 = require("./middlewares");
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.status(201).json({ message: 'Welcome to EuroTennis Api' });
});
app.use('/api/players', players_1.default);
app.use(middlewares_1.notFound);
app.use(middlewares_1.errorHandler);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
