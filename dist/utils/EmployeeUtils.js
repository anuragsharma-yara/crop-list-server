"use strict";
// import { EmployeeDB, EmployeeHierarchy } from "../types/EmployeeTypes";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToHierarchy = void 0;
const transformToHierarchy = (employeesDb) => {
    const employeesMap = new Map();
    employeesDb.forEach(emp => {
        employeesMap.set(emp.id, Object.assign(Object.assign({}, emp), { subordinates: [] }));
    });
    employeesDb.forEach(emp => {
        var _a;
        if (emp.manager_id && employeesMap.has(emp.manager_id)) {
            const manager = employeesMap.get(emp.manager_id);
            (_a = manager === null || manager === void 0 ? void 0 : manager.subordinates) === null || _a === void 0 ? void 0 : _a.push(employeesMap.get(emp.id));
        }
    });
    return Array.from(employeesMap.values()).filter(emp => emp.manager_id === null);
};
exports.transformToHierarchy = transformToHierarchy;
