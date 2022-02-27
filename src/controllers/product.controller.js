const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    console.log(product)
    return res.render("index",{ product });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});


router.get("/:category", async (req, res) => {
  try {
    const query = { category: req.params.category };
    const product = await Product.find(query).lean().exec();
    return res.render("mens",{product});
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
