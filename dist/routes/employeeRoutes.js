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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmployeeController_1 = require("../controllers/EmployeeController"); // Adjust the path as necessary
const router = express_1.default.Router();
router.get('/:id/subordinates', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Fetching subordinates for employee with ID:", req.params.id);
    try {
        const employeeId = parseInt(req.params.id, 10);
        if (isNaN(employeeId)) {
            return res.status(400).send('Invalid employee ID');
        }
        const subordinates = yield (0, EmployeeController_1.getSubordinates)(employeeId);
        res.json(subordinates);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching subordinates.');
    }
}));
exports.default = router;
