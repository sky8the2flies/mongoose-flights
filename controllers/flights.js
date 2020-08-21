const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight'
    });
}

function create(req, res) {
    if (!req.body.departs) {
        req.body.departs = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

function index(req, res) {
    Flight.find({}).sort({departs: 'asc'}).exec({}, function (err, flights) {
        res.render('flights/index', {
            title: 'All Flights',
            flights 
        });
    });
}