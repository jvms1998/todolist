import { Column, MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTodo1662950651734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "todo",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name_task",
                    type: "varchar"
                },
                {
                    name: "description_task",
                    type: "varchar"
                },
                {
                    name: "status",
                    type: "integer"
                },
                {
                    name: "user_id",
                    type: "integer"
                },
                {
                    name: "category_id",
                    type: "integer"
                }
            ]
        })
        ),

            await queryRunner.createForeignKey(
                "todo",
                new TableForeignKey({
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    onDelete: "CASCADE",
                })
            ),

            await queryRunner.createForeignKey(
                "todo",
                new TableForeignKey({
                    columnNames: ["category_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "category",
                    onDelete: "CASCADE",
                })
            ),       

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("todo")
        await queryRunner.dropForeignKey("todo")
    }

}
