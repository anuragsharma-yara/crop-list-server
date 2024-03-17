// models/employee.ts
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize'; // Adjust the import path according to your project structure

const Employee = sequelize.define('Employee', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id',
        }
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {

    tableName: 'EMPLOYEE',
    timestamps: false
});


export default Employee;
