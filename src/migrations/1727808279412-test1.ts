import { MigrationInterface, QueryRunner } from "typeorm";

export class Test11727808279412 implements MigrationInterface {
    name = 'Test11727808279412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`dummy\` CHANGE \`name\` \`test\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`dummy\` DROP COLUMN \`test\``);
        await queryRunner.query(`ALTER TABLE \`dummy\` ADD \`test\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`dummy\` DROP COLUMN \`test\``);
        await queryRunner.query(`ALTER TABLE \`dummy\` ADD \`test\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`dummy\` CHANGE \`test\` \`name\` varchar(255) NOT NULL`);
    }

}
