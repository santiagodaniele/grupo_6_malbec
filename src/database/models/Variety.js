module.exports = (sequelize, dataTypes) => {
    let alias = 'Variety';
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
        tableName:'variety',
        timestamps: false 
    }
    const Variety = sequelize.define(alias, cols, config); 

    Variety.associate = function(models) {
        Variety.hasMany(models.Product, {
          as:  'products',
          foreignKey: 'variety_id' 
        });
    }
    
    return Variety;
}