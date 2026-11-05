const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mibd-productos', 'root', '123456', {
  host: 'localhost',
  port: 3333,
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