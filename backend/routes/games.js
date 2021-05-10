var express = require('express');
var router = express.Router();

var games= [
    {
        name: "Mario Bros 3D world",
        id: 1
    },
    {
        name: "Nightmares",
        id: 2
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'My Collection of games', games: games });
});

/* POST */
router.post('/',function(req, res, next) {
    const id= req.body.id;
    const name = req.body.name;

    games.push({
        id: id, name:name
    });
    res.render('games', { title: 'My Collection of games', games: games });
});

/* PUT */
router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;

    games.find(x =>x.id == id).name = name;
    res.render('games', { title: 'My Collection of games', games: games });
})

module.exports = router;
