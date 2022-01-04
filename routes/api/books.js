const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route('/api/books')
    .get(searchController.findAll)
    .post(searchController.create)
console.log(dbData);
// router.route("/")
//     .get(searchController.findAll)
//     
//     console.log(dbData);
//.post(searchController.create);
router.route('/api:books/:id')
    .get(searchController.findById)
    .put(searchController.update)
    .delete(searchController.remove)
module.exports = router;