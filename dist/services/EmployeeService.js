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
exports.getSubordinatesQuery = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
// import { EmployeeDB } from '../types/EmployeeTypes';
const getSubordinatesQuery = (employeeId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
    WITH RECURSIVE subordinates AS (
      SELECT 
        id, 
        manager_id, 
        name,
        1 AS level
      FROM 
        employees
      WHERE 
        id = :employeeId
      UNION
      SELECT 
        e.id, 
        e.manager_id, 
        e.name,
        s.level + 1 AS level
      FROM 
        employees e
        INNER JOIN subordinates s ON s.id = e.manager_id
    )
    SELECT S.id, S.manager_id, S.name, EMP.name AS manager_name, S.level
    FROM subordinates S
    LEFT JOIN employees EMP ON EMP.id = S.manager_id;
  `;
    try {
        const [results] = yield sequelize_2.default.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
            replacements: { employeeId }
        });
        return results;
    }
    catch (error) {
        console.error('Error fetching subordinates:', error);
        throw error;
    }
});
exports.getSubordinatesQuery = getSubordinatesQuery;
