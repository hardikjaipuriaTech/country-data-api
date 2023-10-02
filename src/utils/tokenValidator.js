const jwt = require('jsonwebtoken');

const SECRET_KEY = '2jPz8Xr2gAx!7BkQhZyE*5Fp9Sa@3vT6';

/**
 * Validates the provided authorization token.
 *
 * @param {string} authToken - The authorization token to be validated.
 * @throws {Error} Throws an error if the token is not present or is invalid.
 */
function validateAuthToken(authToken) {
    if (!authToken) {
        throw new Error('Authorization token not present');
    }

    try {
        jwt.verify(authToken, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid authorization token');
    }
}

module.exports = { validateAuthToken };
