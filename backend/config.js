const { Client } = require('pg');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: "postgres"})

sequelize.authenticate().then(() => {
  console.log(`Database connected to discover`)
}).catch((err) => {
  console.log(err)
})

module.exports = sequelize;

// const client = new Client({
//     user: process.env.USER,
//     password: process.env.PASSOWRD,
//     host: process.env.HOST,
//     port: process.env.PORT,
//     database: process.env.DATABASENAME,
//   });

  // client.connect()
  // .then(() => {
  //   console.log('Connected to PostgreSQL database');
  // })
  // .catch((err) => {
  //   console.error('Error connecting to PostgreSQL database', err);
  // });
  // client.Close()


    
//   client.query('SELECT * FROM customers', (err, result) => {
//     if (err) {
//       console.error('Error executing query', err);
//     } else {
//       console.log('Query result:', result.rows);
//     }
//   });
//   client.end()
//   .then(() => {
//     console.log('Connection to PostgreSQL closed');
//   })
//   .catch((err) => {
//     console.error('Error closing connection', err);
//   });
// const createTable = `
//   CREATE TABLE employees(
//     id int PRIMARY KEY,
//     column1 text,
//     column2 text
//   );`;
// client.query(createTable, (err, result) => {
//   if (err) {
//     console.error('Error creating table', err);
//   } else {
//     console.log('Table created successfully');
//   }

//   client.end();
// });
// (async () => {
//     const client = await getClient();
//     const name = process.argv[2] ?? 'john';
//     let insertRow = await client.query('INSERT INTO my_table(name) VALUES($1);', [`${name}`]);
//     console.log(`Inserted ${insertRow.rowCount} row`);
//     await client.end();
//   })();