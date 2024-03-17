// config/sequelize.ts
import { Sequelize } from 'sequelize';

const databaseUrl: string = process.env.DATABASE_URL || '';

const sequelize = new Sequelize(
  databaseUrl,
  {
    dialect: 'postgres',
    logging: false, // set to console.log to see the raw SQL queries
    define: {
      timestamps: false // true by default
    }
  });


export default sequelize;
