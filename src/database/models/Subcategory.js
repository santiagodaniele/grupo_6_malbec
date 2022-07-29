module.exports = (sequelize, dataTypes) => {
    let alias = 'Subcategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    
    let config = {
        tableName:'subcategory',
        timestamps: false 
    }
    const Subcategory = sequelize.define(alias, cols, config); 

    Subcategory.associate = function(models) {
        Subcategory.hasMany(models.Product, {
          as:  'products',
          foreignKey: 'subcategory_id' 
        });
    }
    
    return Subcategory;
}