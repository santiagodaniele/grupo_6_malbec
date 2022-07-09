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
    }
    
    let config = {
        tableName:'variety'
    };
    const Variety = sequelize.define(alias, cols, config); 
    
    return Variety;
}