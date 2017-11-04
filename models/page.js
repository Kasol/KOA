const Sequelize=require('sequelize');
const models = require('../models');
var Page = models.define('page', {
    id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true
    },
    name: Sequelize.STRING(255),
    url: Sequelize.STRING(255),
    creator: Sequelize.STRING(255),
    public_time: Sequelize.DATE()
},
 {
        timestamps: false,
        freezeTableName: true
 }
);
module.exports=Page;