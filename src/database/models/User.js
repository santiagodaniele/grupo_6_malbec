module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        rol_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }/*consultar si va rol_id o roles_id*/
    };
    
    let config = {
        tableName: 'users',
        timestamps: false
            };

    const User = sequelize.define(alias, cols, config); 
    
    User.associate = function(models) {
        User.belongsTo(models.Role, {
          as:  'role',
          foreignKey: 'role_id' /*consultar si va rol_id o roles_id*/
        })}
    return Role;
}