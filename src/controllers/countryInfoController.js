const express = require('express');
const countryService = require('../services/countryService');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/:countryName', authMiddleware, async (req, res, next) => {
    const { countryName } = req.params;

    try {
        const countryInfo = await countryService.getCountryInfo(countryName);
        res.json(countryInfo);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
