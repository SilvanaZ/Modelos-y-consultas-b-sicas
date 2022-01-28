const { UPDATE } = require('sequelize/dist/lib/query-types');
const movies = require('../../models/movies');
const db = require('../database/models');

modules.exports = {
    list: (req, res) => {
        db.genre.findAll()
            .then((genres) => res.send(genres));
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                res.render('moviesDetail', {
                    movie
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
                rating: { [Op.gte]: 8 },
            },
            order: [['release_date', 'DESC']], limit: 5
        })
            .then((movies) => {
                res.render('recommendedMovies', {
                    movies
                })
            })
    },
    add: function (req, res) {

    },
    create: function (req, res) {
        const { title, rating, release_date, length, awards }
        db.Movie.create({
            title,
            rating,
            release_date,
            length,
            awards
        })
            .then(movie => {
                res.redirect('/movies')
            })
            .catch((error) => {
                res.send(error)
            })
    },
    create: function (req, res) {
        const { title, rating, awards, release_date, length, genre_id } = req.body;
        Movies.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        })
            .then((movie) => {
                res.redirect("/movies");
                // res.redirect(`/movies/detail/${movie.id}`); }) .catch((error) => console.log(error)); 
                db.genre.findAll
            }
    },
    edit: function (req, res) {
        const movie = Movies.findByPk(req.params.id);
        const genres = Genres.findAll();

        Promise.all([movie, genres])
            .then(([Movie, allGenres]) => {
                res.render('moviesEdit', {
                    Movie, allGenres,
                    errors: errors.mapped(),
                    old: req.body
                })
            })
    },
    update: function (req, res) {

    },
    delete: function (req, res) {
        movies.findByPk(req.params.id)
            .then((movie))=> {
            res.render('moviesDelete', {
                movie
            })
        }
        destroy: function(req, res){
            Movies.destroy({ 
                where: { id: req.params.id } 
            })
            .then((result) => { 
                if (result) { 
                    res.redirect('/movies') 
                } 
            })
            .catch((error) => console.log(error));
        }
    },
}
