import express from 'express';
import { getSubordinates } from '../controllers/EmployeeController'; // Adjust the path as necessary

const router = express.Router();

router.get('/:id/subordinates', async (req, res) => {
    console.log("Fetching subordinates for employee with ID:", req.params.id);
  try {
    const employeeId = parseInt(req.params.id, 10);
    if (isNaN(employeeId)) {
      return res.status(400).send('Invalid employee ID');
    }

    const subordinates = await getSubordinates(employeeId);
    console.log("Subordinates:", subordinates);
    res.json(subordinates);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching subordinates.');
  }
});

export default router;
