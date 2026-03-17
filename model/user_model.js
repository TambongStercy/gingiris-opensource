const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    horodateur: String,
    email: String,
    name: String,
    phone: String,
    class: String,
    voted: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;