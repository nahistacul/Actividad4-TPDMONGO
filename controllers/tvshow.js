var mongoose = require('mongoose');
var TVShow  = mongoose.model('TVShow');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	TVShow.find().then((tvshows, err) => {
        if(err){
            res.status(500).send(err);
        }else {
			console.log('GET /tvshows')
			res.status(200).json(tvshows);
		}
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id).then((tvshow, err) => {
    if(err){
        res.status(500).send(err.message);
        return;
    };

    console.log('GET /tvshow/' + req.params.id);
		res.status(200).json(tvshow);
	});
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var tvshow = new TVShow({
		title:    req.body.title,
		year: 	  req.body.year,
		country:  req.body.country,
		poster:   req.body.poster,
		seasons:  req.body.seasons,
		genre:    req.body.genre,
		summary:  req.body.summary
	});

	tvshow.save().then((tvshow, err) => {
        if(err){
            res.status(500).send(err.message);
            return err.message;
        }else {
			res.status(200).json(tvshow);
		}
	});
};

//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {
	TVShow.findById(req.params.id).then((tvshow, err) => {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		tvshow.save().then((err) => {
            if(err){
                res.status(500).send(err.message);
                return;
            };
      res.status(200).json(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
	TVShow.findById(req.params.id).then((tvshow, err) => {
		tvshow.remove(function(err) {
            if(err){
                res.status(500).send(err.message);
                return;
            };
      res.status(200);
		})
	});
};