const express = require('express');
const countryService = require('../services/countryService');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/list', authMiddleware, async (req, res, next) => {
    const { population,area, language, sorting, page, pageSize } = req.query;

    try {
        const countryList = await countryService.getCountryList(population, area, language, sorting, page, pageSize);
        res.json(countryList);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
