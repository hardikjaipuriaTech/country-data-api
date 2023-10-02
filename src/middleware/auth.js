const tokenValidator = require('../utils/tokenValidator');

/**
 * Middleware for authentication checks based on the provided authorization token.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {Object} Throws an error object with status 401 and a message if authentication fails.
 */
function authMiddleware(req, res, next) {

    // Extracting the authorization token from the request headers
    const authToken = req.headers.authorization;

    try {
        // Validate the authorization token using the tokenValidator module
        tokenValidator.validateAuthToken(authToken);
        next();
    } catch (error) {
        next({ status: 401, message: 'Authentication failed' });
    }
}

module.exports = authMiddleware;
