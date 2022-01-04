const db = require('../models');

module.exports = {
    findAll: function (request, response) {
        db.Books
            .find(request.query)
            .sort({ id: id })
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error));
        console.log(dbData);
    },
    findById: function (request, response) {
        db.Books
            .findById(request.params.id)
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error))
    },
    create: function (request, response) {
        db.Books
            .create(request.body)
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error))
    },
    update: function (request, response) {
        db.Books
            .findOneAndUpdate({ _id: request.params.id }, request.body)
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error));
    },
    remove: function (request, response) {
        db.Books
            .findById({ _id: request.params.id })
            .then(dbData => dbData.remove())
            .then(dbData => response.json(dbData))
            .catch(error => response.status(422).json(error));
    }
};