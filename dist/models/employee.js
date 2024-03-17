"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/employee.ts
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize")); // Adjust the import path according to your project structure
const Employee = sequelize_2.default.define('Employee', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    manager_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id',
        }
    },
    designation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'EMPLOYEE',
    timestamps: false
});
exports.default = Employee;
