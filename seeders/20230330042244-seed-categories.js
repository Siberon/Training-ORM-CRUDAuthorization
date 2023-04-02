"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("categories", [
			{
				name: "food",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "electronics",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "automotive",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("categories", null, {});
	},
};
