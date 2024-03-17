import { EmployeeDB, EmployeeHierarchy } from "../types/EmployeeTypes";

export const transformToHierarchy = (employeesDb: EmployeeDB[], employeeId: number): EmployeeHierarchy[] => {
    const employeesMap = new Map<number, EmployeeHierarchy>();
  
    employeesDb.forEach(emp => {
      employeesMap.set(emp.id, { ...emp, subordinates: [] });
    });
  
    employeesDb.forEach(emp => {
      if (emp.manager_id && employeesMap.has(emp.manager_id)) {
        const manager = employeesMap.get(emp.manager_id);
        manager?.subordinates?.push(employeesMap.get(emp.id)!);
      }
    });
  
    return Array.from(employeesMap.values()).filter(emp => emp.id === employeeId);
  };
