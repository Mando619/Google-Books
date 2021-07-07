const db = require('../models');

module.exports = {
    findAll: function (request, response) {
        db.Books
            .find(request.query)
            .sort({ id: id })
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error));
    }
};