const  { Client }=require('pg');
const {promisify}=require('util');
const {database}=require('./keys');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'tienda',
  password: 'bobesponja48',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL');
    // Realiza tus operaciones con la base de datos aquí
  })
  .catch((error) => {
    console.error('Error al conectar a PostgreSQL', error);
  });

module.exports=client;