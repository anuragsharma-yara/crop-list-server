"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/api/v1/employees', employeeRoutes_1.default);
const port = 4000;
app.get('/', (req, res) => {
    res.send('Hello World with Express!');
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
