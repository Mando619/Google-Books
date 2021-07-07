const router = require("express").Router();
const searchController = require("../../controllers/searchController");



router.route("/")
    .get(searchController.findAll)
    .post(searchController.create)
//.post(searchController.create);
router.route('/:id')
    .get(searchController.findById)
    .put(searchController.update)

module.exports = router;