const { DataTypes } = require("sequelize/dist");
const { defaultValueSchemable } = require("sequelize/dist/lib/utils");

ranking:{
    type: DataTypes.INTEGER(10).UNSIGNED,
    allowNull: false,
    unique: true,
},
active:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
};
const config = {
tableName:"genres",
createAt: "created_at",
updatedAt: "updated_at"
};
}