const createServer = require('./server'),
    http = require('http'),
    { Sequelize } = require('sequelize')
    
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        HOST: "127.0.0.1",
        dialect: 'mssql'
    }
);

async function startServer() {
    const app = await createServer();
    http.createServer(app).listen(process.env.PORT || 8080, async () => {
        try {
            await sequelize.authenticate();
            console.log(`server is running at port ${process.env.PORT}`)
        } catch (error) {
            console.log(error)
        }
    })
}

startServer()