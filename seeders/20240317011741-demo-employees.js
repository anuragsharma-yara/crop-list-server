'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
      { id: 1, name: 'Michael North', manager_id: null, designation: 'CEO', salary: 200000 },
      { id: 2, name: 'Megan Berry', manager_id: 1, designation: 'CTO', salary: 180000 },
      { id: 3, name: 'Sarah Berry', manager_id: 1, designation: 'CFO', salary: 180000 },
      { id: 4, name: 'Zoe Black', manager_id: 1, designation: 'COO', salary: 180000 },
      { id: 5, name: 'Tim James', manager_id: 1, designation: 'CIO', salary: 180000 },
      { id: 6, name: 'Bella Tucker', manager_id: 2, designation: 'Senior Developer', salary: 150000 },
      { id: 7, name: 'Ryan Metcalfe', manager_id: 2, designation: 'Senior Developer', salary: 150000 },
      { id: 8, name: 'Max Mills', manager_id: 2, designation: 'Senior Developer', salary: 150000 },
      { id: 9, name: 'Benjamin Glover', manager_id: 2, designation: 'Senior Developer', salary: 150000 },
      { id: 10, name: 'Carolyn Henderson', manager_id: 3, designation: 'Marketing Manager', salary: 140000 },
      { id: 11, name: 'Nicola Kelly', manager_id: 3, designation: 'Marketing Specialist', salary: 120000 },
      { id: 12, name: 'Alexandra Climo', manager_id: 3, designation: 'Marketing Specialist', salary: 120000 },
      { id: 13, name: 'Dominic King', manager_id: 3, designation: 'Marketing Specialist', salary: 120000 },
      { id: 14, name: 'Leonard Gray', manager_id: 4, designation: 'Operations Manager', salary: 140000 },
      { id: 15, name: 'Eric Rampling', manager_id: 4, designation: 'Operations Specialist', salary: 120000 },
      { id: 16, name: 'Piers Paige', manager_id: 7, designation: 'Developer', salary: 110000 },
      { id: 17, name: 'Ryan Henderson', manager_id: 7, designation: 'Developer', salary: 110000 },
      { id: 18, name: 'Frank Tucker', manager_id: 8, designation: 'Developer', salary: 110000 },
      { id: 19, name: 'Nathan Ferguson', manager_id: 8, designation: 'Developer', salary: 110000 },
      { id: 20, name: 'Kevin Rampling', manager_id: 8, designation: 'Developer', salary: 110000 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
