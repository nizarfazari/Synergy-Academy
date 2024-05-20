import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("username", 255);
    table.string("email", 255);
    table.string("password", 255);
  });
}

export async function down(knex: Knex): Promise<void> {}
