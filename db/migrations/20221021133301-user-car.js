'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // return Promise.all([
        //   queryInterface.removeColumn(
        //     'Cars',
        //     'id_user',
        //   ),
        // ])
        return Promise.all([
                queryInterface.addColumn(
                    'Cars',
                    'id_user', {
                        type: Sequelize.INTEGER,
                    }
                ),
            ])
            // return Promise.all([
            //         queryInterface.changeColumn('Cars', 'id_user', {
            //             type: Sequelize.INTEGER,
            //             allowNull: true,
            //         })
            //     ])

    },

    async down(queryInterface, Sequelize) {
        // return Promise.all([
        //   queryInterface.addColumn(
        //     'Cars',
        //     'id_user', 
        //     {
        //     type: Sequelize.INTEGER,
        //     }
        //   ),
        // ])
    }
};