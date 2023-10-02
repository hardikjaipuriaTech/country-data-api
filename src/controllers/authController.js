const express = require('express');
const authService = require('../services/authService');
const router = express.Router();

router.post('/', (req, res, next) => {
    const { username, password } = req.body;

    try {
        const authToken = authService.generateAuthToken(username, password);
        res.json({ authToken });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
