const { Sequelize } = require("sequelize");

module.exports  = (sequelize,Sequelize) => {
    const place = sequelize.define("Place", {
        image : {
           type : Sequelize.STRING,
        } ,
         title : {
           type :  Sequelize.STRING,
        },
        price : {
            type : Sequelize.INTEGER
        },
        description : {
            type : Sequelize.STRING
        }
    });
    return place
}