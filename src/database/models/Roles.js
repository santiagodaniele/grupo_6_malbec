module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(255),
            primaryKey: true,
            autoIncrement: true
        }
    }
    
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };
    const Role = sequelize.define(alias, cols, config); 
}