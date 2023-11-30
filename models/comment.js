const {Model, Datatypes} = require('sequelize');

class Comment extends Model {}

Comment.init(
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
        modelName: 'Comment',
      }
    );
    
    module.exports = Comment;