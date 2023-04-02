"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("products", [
			{
				name: "Indomie Goreng",
				price: 5000,
				category_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "iPhone 14 Pro Max",
				price: 30000000,
				category_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "Honda Brio",
				price: 100000000,
				category_id: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("products");
	},
};
