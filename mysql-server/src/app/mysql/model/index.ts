const dbConfig=require('../config/config.ts');
const Sequelize=require('sequelize');

const sequelizeConfig=new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool:{
            max: dbConfig.pool.max, 
            min: dbConfig.pool.min, 
            acquire: dbConfig.pool.acquire,
             idle: dbConfig.pool.idle
        }
    }
);

 db={};
db.sequelize=Sequelize;
db.sequelizeConfig=sequelizeConfig;
db.tutorial=require('./model.ts')(sequelizeConfig,Sequelize);

module.exports=db;

