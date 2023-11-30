const {Model, Datatypes} = require('sequelize');

class Blogpost extends Model {}

Blogpost.init(
    {
       id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        content: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Blogpost',
      }
    );
    
    module.exports = Blogpost;