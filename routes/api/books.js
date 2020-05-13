const router = require('express').Router();
const booksController = require('../../controllers/booksController');
const axios = require("axios");

// router.route('/').get(booksController.findAll).post(booksController.create);

router.route('/:id').get(booksController.findById).put(booksController.update).delete(booksController.remove);

router.get("/", (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
