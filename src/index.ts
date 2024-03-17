import express from 'express';
import 'dotenv/config';
import employeeRoutes from './routes/employeeRoutes';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/v1/employees', employeeRoutes);

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World with Express!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
