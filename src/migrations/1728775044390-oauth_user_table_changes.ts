import { MigrationInterface, QueryRunner } from "typeorm";

export class OauthUserTableChanges1728775044390 implements MigrationInterface {
    name = 'OauthUserTableChanges1728775044390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`oauthId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_b07c65387b10640a67199cc549\` (\`oauthId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`profilePicture\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`authProvider\` varchar(255) NOT NULL DEFAULT 'oauth'`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`accessToken\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refreshToken\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`oauthData\` json NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`oauthData\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refreshToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`accessToken\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`authProvider\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`profilePicture\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_b07c65387b10640a67199cc549\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`oauthId\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`password\` varchar(45) NOT NULL`);
    }

}
