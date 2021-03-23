const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product
    }],
  }).then((categoryData) => {
    res.json(categoryData)
  })
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findAll({
    where:{
      id: req.params.id
    },
      include: [{
        model: Product,
      }]
  }).then((categoryData) => {
    res.json(categoryData)
  })
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory);
  }).catch((err) => {
    res.json(err)
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
  },
    {
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(204).end();
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
