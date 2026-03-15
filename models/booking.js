const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    name: String,
    email: String,
    room: String,
    days: Number,
    date: String,
    price: Number,

    status: {
        type: String,
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);