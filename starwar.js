const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const router = require('express').Router();
fetch.Promise = Bluebird;

const BASE_URL = 'http://swapi.co/api/films/';

 function fetchAllFilms() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

 function fetchFilmByTitle(title) {
     const url = `${BASE_URL}?search=${title}`;
    return fetch(url)
       .then(res => res.json());
}

router.get('', async (req, res) => res.json(
    await fetchAllFilms()
    )
);

router.get('/:title', async (req, res) => {
    try {
        const title = req.params.name || 'The Phantom Menace';
        const film = await fetchFilmByTitle(title);
        res.json(film);
    } catch (error) {
        console.log(error)
        res.send(error.message);
    }
});

module.exports = router;