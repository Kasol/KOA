const Sequelize=require('sequelize');
const models = require('../models');
var File = models.define('file', {
    id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true
    },
    name: Sequelize.STRING(255),
    path: Sequelize.STRING(255),
    size: Sequelize.DOUBLE(255),
},
 {
        timestamps: false,
        freezeTableName: true
 }
);
module.exports=File;