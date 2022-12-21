const db = require("../config/connection");
const { User, Product, Reviews, Category } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");
const reviewSeeds = require("./reviewSeeds.json");
const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});

    await User.create(userSeeds);
    await Category.create(categorySeeds);
    await Product.create(productSeeds);
    const products = Product.find();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
