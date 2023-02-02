// a backend API route to send our API key to the frontend
// putting API key in the backend, and send it through a route to the frontend
// so that we can add middleware to prevent bad actors from using our key.
const router = require('express').Router();
const { googleMapsAPIKey } = require('../../config');

router.post('/key', (req, res) => {
    res.json({ googleMapsAPIKey });
});

module.exports = router;
