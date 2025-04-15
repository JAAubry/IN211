import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class MigrationMovies11744705981042 {
    name = 'MigrationMovies11744705981042'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "titre" character varying NOT NULL,
                "date" character varying NOT NULL,
                CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id")
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
    }
}
