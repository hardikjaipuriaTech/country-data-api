const jwt = require('jsonwebtoken');

const SECRET_KEY = '2jPz8Xr2gAx!7BkQhZyE*5Fp9Sa@3vT6';

/**
 * Generates an authorization token based on the provided username and password.
 *
 * @param {string} username - The username for authentication.
 * @param {string} password - The password for authentication.
 * @returns {string} The generated authorization token.
 * @throws {Error} Throws an error if the provided credentials are invalid.
 */
function generateAuthToken(username, password) {
    if (username === 'admin' && password === 'admin@1234') {
        const authToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' });
        return authToken;
    } else {
        throw new Error('Invalid credentials');
    }
}

module.exports = { generateAuthToken };
