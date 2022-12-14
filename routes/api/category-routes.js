const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category
router.get('/:id', async (req, res) => {
  // '/:id' should be the id of the category you want to get
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a category
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      "category_name": "Games"
    }
  */
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a category
router.put('/:id', async (req, res) => {
  // '/:id' should be the id of the category you want to update
  /* req.body should look like this...
    {
      "category_name": "Books"
    }
  */
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  // '/:id' should be the id of the category you want to delete
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
