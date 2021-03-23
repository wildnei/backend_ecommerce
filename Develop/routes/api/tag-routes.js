const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags
// console.log(JSON.stringify(productData, null, 4));
// be sure to include its associated Product data
// res.json({"message": "okay"});
router.get('/', (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: Product,
    }]
  }).then((tagData) => {
    res.json(tagData)
  })
});


router.post('/', (req, res) => {
  Tag.create(req.body)
    // create a new tag
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err)
    })
});


router.put('/:id', (req, res) => {
   // update a tag's name by its `id` value;
  console.log("ID parametro "+req.params.id)
  console.log("ID body " + req.body.id)
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.status(204).end();
    });
})
 

// router.put('/', (req, res) => {
//   Tag.update(
//     {
//       tag_name: req.body.tag_name
//     },
//     {
//     where: {
//       id: req.body.id
//     },
//     }).then(() => {
//       res.status(204).end();
//     });
// })

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
