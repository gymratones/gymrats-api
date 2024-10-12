import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1728762962157 implements MigrationInterface {
    name = 'Entities1728762962157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`like\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`post_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`photo_hash\` varchar(45) NOT NULL, \`content\` varchar(45) NOT NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(45) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym\` (\`id\` int NOT NULL AUTO_INCREMENT, \`google_maps_id\` int NOT NULL, \`name\` varchar(45) NOT NULL, \`latitude\` double NOT NULL, \`longitude\` double NOT NULL, \`active\` tinyint NOT NULL, \`gym_type_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(45) NOT NULL, \`last_name\` varchar(45) NOT NULL, \`username\` varchar(45) NOT NULL, \`email\` varchar(45) NOT NULL, \`password\` varchar(45) NOT NULL, \`phone\` bigint NULL, \`verified\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`follow\` (\`user_id\` int NOT NULL, \`follower_user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`user_id\`, \`follower_user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_gyms\` (\`user_id\` int NOT NULL, \`gym_id\` int NOT NULL, INDEX \`IDX_5d718bacb6e9d4f0d3a19aa5cf\` (\`user_id\`), INDEX \`IDX_0c32062e241434286a68e10087\` (\`gym_id\`), PRIMARY KEY (\`user_id\`, \`gym_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_d41caa70371e578e2a4791a88ae\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`like\` ADD CONSTRAINT \`FK_4356ac2f9519c7404a2869f1691\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_52378a74ae3724bcab44036645b\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gym\` ADD CONSTRAINT \`FK_afaaa29bc29b0b0d81277e4ef8e\` FOREIGN KEY (\`gym_type_id\`) REFERENCES \`gym_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`follow\` ADD CONSTRAINT \`FK_d3b514cd26ff6190a8f836f9b28\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`follow\` ADD CONSTRAINT \`FK_e7370e60f2f421cf2af607b3098\` FOREIGN KEY (\`follower_user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_gyms\` ADD CONSTRAINT \`FK_5d718bacb6e9d4f0d3a19aa5cfd\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_gyms\` ADD CONSTRAINT \`FK_0c32062e241434286a68e100876\` FOREIGN KEY (\`gym_id\`) REFERENCES \`gym\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_gyms\` DROP FOREIGN KEY \`FK_0c32062e241434286a68e100876\``);
        await queryRunner.query(`ALTER TABLE \`user_gyms\` DROP FOREIGN KEY \`FK_5d718bacb6e9d4f0d3a19aa5cfd\``);
        await queryRunner.query(`ALTER TABLE \`follow\` DROP FOREIGN KEY \`FK_e7370e60f2f421cf2af607b3098\``);
        await queryRunner.query(`ALTER TABLE \`follow\` DROP FOREIGN KEY \`FK_d3b514cd26ff6190a8f836f9b28\``);
        await queryRunner.query(`ALTER TABLE \`gym\` DROP FOREIGN KEY \`FK_afaaa29bc29b0b0d81277e4ef8e\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_52378a74ae3724bcab44036645b\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_4356ac2f9519c7404a2869f1691\``);
        await queryRunner.query(`ALTER TABLE \`like\` DROP FOREIGN KEY \`FK_d41caa70371e578e2a4791a88ae\``);
        await queryRunner.query(`DROP INDEX \`IDX_0c32062e241434286a68e10087\` ON \`user_gyms\``);
        await queryRunner.query(`DROP INDEX \`IDX_5d718bacb6e9d4f0d3a19aa5cf\` ON \`user_gyms\``);
        await queryRunner.query(`DROP TABLE \`user_gyms\``);
        await queryRunner.query(`DROP TABLE \`follow\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`gym\``);
        await queryRunner.query(`DROP TABLE \`gym_type\``);
        await queryRunner.query(`DROP TABLE \`post\``);
        await queryRunner.query(`DROP TABLE \`like\``);
    }

}
