import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "aws-0-ap-southeast-1.pooler.supabase.com",
      port: 6543,
      database: "postgres",
      user: "postgres.qpxdrndfgxlompxgirnd",
      password: "N2akV4mqQzYRwGWJ",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "cars_db",
      user: "postgres",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      host: "aws-0-ap-southeast-1.pooler.supabase.com",
      port: 6543,
      database: "postgres",
      user: "postgres.qpxdrndfgxlompxgirnd",
      password: "N2akV4mqQzYRwGWJ",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
};

module.exports = config;
