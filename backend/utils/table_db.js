const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("CREATING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS users`;
  await sql`
    CREATE TABLE IF NOT EXISTS users(
            id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
            email VARCHAR(50) UNIQUE NOT NULL,
            name VARCHAR(50) NOT NULL,
            password TEXT NOT NULL,
            avatarImg TEXT,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
  `;
  console.log("created table");
};


const createTransaction = async () => {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
  
  console.log("CREATING transaction TABLE...");
  await sql`
  CREATE TABLE IF NOT EXISTS transaction (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid REFERENCE users(id),
    FOREIGN KEY (user_id) REFERENCE users(id),
    name VARCHAR(50) NOT NULL,
    amount REAL NOT NULL,
    transaction_type enumType,
    description Text,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id uuid DEFAULT uuid_generate_v4(),
    FOREIGN KEY(category_id) REFERENCE category(id))
    ;
    `;
  console.log("CREATED TABLE.");
};

// const insertData = () => {};
createTransaction();
// createTables();
// insertData();
