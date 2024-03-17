'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      manager_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'employees',
          key: 'id',
        }
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'employees',
      timestamps: false
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};
