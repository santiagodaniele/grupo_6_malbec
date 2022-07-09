module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        brand:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price:{
            type: dataTypes.DECIMAL(11,2),
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(700),
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        subcategory_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        variety_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
            };

    const Product = sequelize.define(alias, cols, config); 
    
    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
          as:  'category',
          foreignKey: 'category_id' 
        });
        Product.belongsTo(models.Subcategory, {
            as:  'subcategory',
            foreignKey: 'subcategory_id' 
          });
        Product.belongsTo(models.Variety, {
            as:  'variety',
            foreignKey: 'variety_id' 
          })
    }
    return Product;
}