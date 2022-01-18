const db = rquire('../database/models');

module.exports = {
    list: (req, res) => { 
        db.Genre.findAll() 
        .then((genres) => { 
            res.render('genresList', { 
                genres }) 
            }) 
    .catch(error => console.log(error)) } 
}