const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((productData) => {
    // console.log(JSON.stringify(productData, null, 4));
    res.json(productData);
  })
  // be sure to include its associated Product data
  // res.json({"message": "okay"});
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.tag_id).then((tagData) => {
    res.json(tagData)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});


router.post('/', (req, res) => {
  // Tag.create(req.body)
  //  // create a new tag
  // .then((newTag) => {
  //   res.json(newTag);
  // })
  // .catch((err) => {
  //   res.json(err)
  // })
 
});

router.put('/:id', (req, res) => {

  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
