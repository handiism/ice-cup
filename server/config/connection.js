const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ice-cup");

module.exports = mongoose.connection;
