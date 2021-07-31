import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTablePeople1627615087152 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'People',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy:'increment'
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
      await queryRunner.dropTable('People');
    }
}
