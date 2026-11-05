const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.MYSQL_ROOT_PASSWORD, {
  host: 'db-mysql',
  //port: 3306,
  dialect: 'mysql'
});

async function testConexion() {
    try {
        await sequelize.authenticate();
        console.log('CONEXION EXITOSA CON BD.');
    } catch (error) {
        console.error('ERROR DE CONEXION CON BD:', error);
    }
}

testConexion();

module.exports = sequelize;