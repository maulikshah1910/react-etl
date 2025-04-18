"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolesTable1744977059889 = void 0;
class CreateRolesTable1744977059889 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE roles (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                description TEXT,
                permissions JSON,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS roles;
        `);
    }
}
exports.CreateRolesTable1744977059889 = CreateRolesTable1744977059889;
