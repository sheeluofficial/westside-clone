const mongoose = require("mongoose");

const productScehama = new mongoose.Schema(
  {
    image: { type: "String", required: true },
    brand: { type: "String", required: true },
    img1: { type: "String", required: true },
    img2: { type: "String", required: true },
    img3: { type: "String", required: true },
    img4: { type: "String", required: true },
    simg1: { type: "String", required: true },
    simg2: { type: "String", required: true },
    simg3: { type: "String", required: true },
    simg4: { type: "String", required: true },
    prices: { type: "Number", required: true },
    category: { type: "String", required: true },
  },
  {
    versionKey: false,
    timeStamp: true,
  }
);

module.exports = mongoose.model("product", productScehama);
