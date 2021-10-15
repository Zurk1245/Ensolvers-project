import {MigrationInterface, QueryRunner} from "typeorm";

export class addTodo1634318595247 implements MigrationInterface {
    name = 'addTodo1634318595247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`task\` text NOT NULL, \`completed\` boolean NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}
