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
exports.getSubordinates = void 0;
const EmployeeService_1 = require("../services/EmployeeService");
// import { EmployeeDB, EmployeeHierarchy } from "../types/EmployeeTypes";
const EmployeeUtils_1 = require("../utils/EmployeeUtils");
const getSubordinates = (employeeId) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeData = yield (0, EmployeeService_1.getSubordinatesQuery)(employeeId);
    const employeeHierarchy = (0, EmployeeUtils_1.transformToHierarchy)(employeeData);
    return employeeHierarchy;
});
exports.getSubordinates = getSubordinates;
