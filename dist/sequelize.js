"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config/sequelize.ts
const sequelize_1 = require("sequelize");
const databaseUrl = process.env.DATABASE_URL || '';
const sequelize = new sequelize_1.Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: false, // set to console.log to see the raw SQL queries
    define: {
        timestamps: false // true by default
    }
});
exports.default = sequelize;
