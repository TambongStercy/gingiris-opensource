const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    email: String,
    name: String,
    phone: Number,
    voted: Boolean,
});

const participant = mongoose.model("Participant", participantSchema);

module.exports = participant;