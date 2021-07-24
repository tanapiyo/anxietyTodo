import {MigrationInterface, QueryRunner} from "typeorm";

export class create1627110413268 implements MigrationInterface {
    name = 'create1627110413268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "habit" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "objectId" integer)`);
        await queryRunner.query(`CREATE TABLE "object" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "anxietyId" integer)`);
        await queryRunner.query(`CREATE TABLE "calendar" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "dayOfWeek" integer NOT NULL, "didIt" boolean NOT NULL, "row" integer NOT NULL, "page" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(100) NOT NULL, "password" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "anxiety" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_habit" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "objectId" integer, CONSTRAINT "FK_999000e9ce7a69128f471f0a3f9" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2a9d5b8aa4d9bb992f5ab62fa4a" FOREIGN KEY ("objectId") REFERENCES "object" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_habit"("id", "content", "createdAt", "updatedAt", "userId", "objectId") SELECT "id", "content", "createdAt", "updatedAt", "userId", "objectId" FROM "habit"`);
        await queryRunner.query(`DROP TABLE "habit"`);
        await queryRunner.query(`ALTER TABLE "temporary_habit" RENAME TO "habit"`);
        await queryRunner.query(`CREATE TABLE "temporary_object" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "anxietyId" integer, CONSTRAINT "FK_9553102ff22c8fb18fddc8a76b6" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_653229543e6cbeaf6e1e245b475" FOREIGN KEY ("anxietyId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_object"("id", "content", "createdAt", "updatedAt", "userId", "anxietyId") SELECT "id", "content", "createdAt", "updatedAt", "userId", "anxietyId" FROM "object"`);
        await queryRunner.query(`DROP TABLE "object"`);
        await queryRunner.query(`ALTER TABLE "temporary_object" RENAME TO "object"`);
        await queryRunner.query(`CREATE TABLE "temporary_calendar" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "dayOfWeek" integer NOT NULL, "didIt" boolean NOT NULL, "row" integer NOT NULL, "page" integer NOT NULL, "userId" integer, CONSTRAINT "FK_c423727dde9ebe36873c5b7087f" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_calendar"("id", "content", "dayOfWeek", "didIt", "row", "page", "userId") SELECT "id", "content", "dayOfWeek", "didIt", "row", "page", "userId" FROM "calendar"`);
        await queryRunner.query(`DROP TABLE "calendar"`);
        await queryRunner.query(`ALTER TABLE "temporary_calendar" RENAME TO "calendar"`);
        await queryRunner.query(`CREATE TABLE "temporary_anxiety" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, CONSTRAINT "FK_848d55d228bfe8519dc59cafb7e" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_anxiety"("id", "content", "createdAt", "updatedAt", "userId") SELECT "id", "content", "createdAt", "updatedAt", "userId" FROM "anxiety"`);
        await queryRunner.query(`DROP TABLE "anxiety"`);
        await queryRunner.query(`ALTER TABLE "temporary_anxiety" RENAME TO "anxiety"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anxiety" RENAME TO "temporary_anxiety"`);
        await queryRunner.query(`CREATE TABLE "anxiety" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "anxiety"("id", "content", "createdAt", "updatedAt", "userId") SELECT "id", "content", "createdAt", "updatedAt", "userId" FROM "temporary_anxiety"`);
        await queryRunner.query(`DROP TABLE "temporary_anxiety"`);
        await queryRunner.query(`ALTER TABLE "calendar" RENAME TO "temporary_calendar"`);
        await queryRunner.query(`CREATE TABLE "calendar" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "dayOfWeek" integer NOT NULL, "didIt" boolean NOT NULL, "row" integer NOT NULL, "page" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "calendar"("id", "content", "dayOfWeek", "didIt", "row", "page", "userId") SELECT "id", "content", "dayOfWeek", "didIt", "row", "page", "userId" FROM "temporary_calendar"`);
        await queryRunner.query(`DROP TABLE "temporary_calendar"`);
        await queryRunner.query(`ALTER TABLE "object" RENAME TO "temporary_object"`);
        await queryRunner.query(`CREATE TABLE "object" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "anxietyId" integer)`);
        await queryRunner.query(`INSERT INTO "object"("id", "content", "createdAt", "updatedAt", "userId", "anxietyId") SELECT "id", "content", "createdAt", "updatedAt", "userId", "anxietyId" FROM "temporary_object"`);
        await queryRunner.query(`DROP TABLE "temporary_object"`);
        await queryRunner.query(`ALTER TABLE "habit" RENAME TO "temporary_habit"`);
        await queryRunner.query(`CREATE TABLE "habit" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "content" text NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "userId" integer, "objectId" integer)`);
        await queryRunner.query(`INSERT INTO "habit"("id", "content", "createdAt", "updatedAt", "userId", "objectId") SELECT "id", "content", "createdAt", "updatedAt", "userId", "objectId" FROM "temporary_habit"`);
        await queryRunner.query(`DROP TABLE "temporary_habit"`);
        await queryRunner.query(`DROP TABLE "anxiety"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "calendar"`);
        await queryRunner.query(`DROP TABLE "object"`);
        await queryRunner.query(`DROP TABLE "habit"`);
    }

}
