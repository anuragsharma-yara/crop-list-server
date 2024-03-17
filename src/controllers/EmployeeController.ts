import { getSubordinatesQuery } from "../services/EmployeeService";
import { EmployeeDB, EmployeeHierarchy } from "../types/EmployeeTypes";
import { transformToHierarchy } from "../utils/EmployeeUtils";

export const getSubordinates = async (employeeId: number) : Promise<EmployeeHierarchy[]> => {
    const employeeData : EmployeeDB[] = await getSubordinatesQuery(employeeId);
    const employeeHierarchy : EmployeeHierarchy[] = transformToHierarchy(employeeData, employeeId);
    return employeeHierarchy;
}