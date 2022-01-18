const db = require('../database/models');

modules.exports ={
list: (req, res) =>{
    db.genre.findAll()
    .then((genres) =>res.send(genres) );
}
}