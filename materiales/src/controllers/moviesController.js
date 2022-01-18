const db = require('../database/models');

modules.exports = {
    list: (req, res) => {
        db.genre.findAll()
            .then((genres) => res.send(genres));
    },
    detail: (req, res) => { 
        db.Movie.findByPk(req.params.id)
        .then((movie) => { 
            res.render('moviesDetail', { movie 
            }) 
        }) 
    }, 
    new: (req, res) => { 
        db.Movie.findAll({ 
            order: [['release_date', 'DESC']] 
        })
        .then((movies) => { 
            res.render('newestMovies', { 
                movies 
            }) 
        }) 
    },
    recomended: (req, res) => { 
        db.Movie.findAll({ 
            where: { 
                rating: {[Op.gte] : 8}, 
            }, 
            order: [['release_date', 'DESC']], limit: 5 
        }) 
        .then((movies) => { 
            res.render('recommendedMovies', {
                 movies 
                }) 
            }) 
        } 
}