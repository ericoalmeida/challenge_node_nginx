import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTablePeaple1627615087152 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'peaple',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name:  'name',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('peaple');
    }
}
