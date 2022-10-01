import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCarsTable1664642310333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    }, 
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'marca',
                        type: 'varchar'
                    },
                    {
                        name: 'imgurl',
                        type: 'varchar'
                    },
                    {
                        name: 'modelo',
                        type: 'varchar'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars")
    }

}
