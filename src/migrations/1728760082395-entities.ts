import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1728760082395 implements MigrationInterface {
    name = 'Entities1728760082395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`follow\` (\`user_id\` int NOT NULL, \`follower_user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` int NULL, \`followerUserId\` int NULL, PRIMARY KEY (\`user_id\`, \`follower_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`like\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`postId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`photo_hash\` varchar(45) NOT NULL, \`content\` varchar(45) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(45) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym\` (\`id\` int NOT NULL AUTO_INCREMENT, \`google_maps_id\` int NOT NULL, \`name\` varchar(45) NOT NULL, \`latitude\` double NOT NULL, \`longitude\` double NOT NULL, \`active\` tinyint NOT NULL, \`gymTypeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(45) NOT NULL, \`lastName\` varchar(45) NOT NULL, \`username\` varchar(45) NOT NULL, \`email\` varchar(45) NOT NULL, \`password\` varchar(45) NOT NULL, \`phone\` bigint NULL, \`verified\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_gyms_gym\` (\`userId\` int NOT NULL, \`gymId\` int NOT NULL, INDEX \`IDX_bf47f597adb12481e70a1330cf\` (\`userId\`), INDEX \`IDX_22866f0650deb5ffda531d56ba\` (\`gymId\`), PRIMARY KEY (\`userId\`, \`gymId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`follow\` ADD CONSTRAINT \`FK_af9f90ce5e8f66f845ebbcc6f15\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`follow\` ADD CONSTRAINT \`FK_673eb90803096b4300d2f547a4c\` FOREIGN KEY (\`followerUserId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_3acf7c55c319c4000e8056c1279\` FOREIGN KEY (\`postId\`) REFERENCES \`post\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_e8fb739f08d47955a39850fac23\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_5c1cf55c308037b5aca1038a131\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gym\` ADD CONSTRAINT \`FK_ef2d2524b652b8b8f6de61c9fb9\` FOREIGN KEY (\`gymTypeId\`) REFERENCES \`gym_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_gyms_gym\` ADD CONSTRAINT \`FK_bf47f597adb12481e70a1330cf6\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_gyms_gym\` ADD CONSTRAINT \`FK_22866f0650deb5ffda531d56bad\` FOREIGN KEY (\`gymId\`) REFERENCES \`gym\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_gyms_gym\` DROP FOREIGN KEY \`FK_22866f0650deb5ffda531d56bad\``);
        await queryRunner.query(`ALTER TABLE \`user_gyms_gym\` DROP FOREIGN KEY \`FK_bf47f597adb12481e70a1330cf6\``);
        await queryRunner.query(`ALTER TABLE \`gym\` DROP FOREIGN KEY \`FK_ef2d2524b652b8b8f6de61c9fb9\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_5c1cf55c308037b5aca1038a131\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_e8fb739f08d47955a39850fac23\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_3acf7c55c319c4000e8056c1279\``);
        await queryRunner.query(`ALTER TABLE \`follow\` DROP FOREIGN KEY \`FK_673eb90803096b4300d2f547a4c\``);
        await queryRunner.query(`ALTER TABLE \`follow\` DROP FOREIGN KEY \`FK_af9f90ce5e8f66f845ebbcc6f15\``);
        await queryRunner.query(`DROP INDEX \`IDX_22866f0650deb5ffda531d56ba\` ON \`user_gyms_gym\``);
        await queryRunner.query(`DROP INDEX \`IDX_bf47f597adb12481e70a1330cf\` ON \`user_gyms_gym\``);
        await queryRunner.query(`DROP TABLE \`user_gyms_gym\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`gym\``);
        await queryRunner.query(`DROP TABLE \`gym_type\``);
        await queryRunner.query(`DROP TABLE \`post\``);
        await queryRunner.query(`DROP TABLE \`like\``);
        await queryRunner.query(`DROP TABLE \`follow\``);
    }

}
