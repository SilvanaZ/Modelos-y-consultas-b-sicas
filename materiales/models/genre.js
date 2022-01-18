

const config = {
tableName: "genres",
createAt: "created_at",
updateAt: "updated_at",
};

const genre = sequelize.define(alias, cols, config)

return genre,

}