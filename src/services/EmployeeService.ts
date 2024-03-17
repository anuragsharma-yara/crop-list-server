import { QueryTypes } from 'sequelize';
import sequelize from '../sequelize';
import { EmployeeDB } from '../types/EmployeeTypes';


export const getSubordinatesQuery = async (employeeId: number): Promise<EmployeeDB[]> => {
  const query = `
    WITH RECURSIVE subordinates AS (
      SELECT 
        id, 
        manager_id, 
        name,
        designation, 
        salary,
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
        e.designation,
        e.salary,
        s.level + 1 AS level
      FROM 
        employees e
        INNER JOIN subordinates s ON s.id = e.manager_id
    )
    SELECT S.id, S.manager_id, S.name, EMP.name AS manager_name, S.designation, S.salary
    FROM subordinates S
    LEFT JOIN employees EMP ON EMP.id = S.manager_id;
  `;

  try {
    const results: EmployeeDB[] = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { employeeId }
    });

    return results;
  } catch (error) {
    console.error('Error fetching subordinates:', error);
    throw error;
  }
}



