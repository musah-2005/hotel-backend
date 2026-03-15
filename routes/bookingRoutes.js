const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");


// POST booking
router.post("/book", async (req, res) => {
    try {

        const booking = new Booking({
            name: req.body.name,
            email: req.body.email,
            room: req.body.room,
            date: req.body.date,
            days: req.body.days,
            price: req.body.price,
            status: "Pending"
        });

        await booking.save();

        res.json({
            message: "Booking saved",
            data: booking
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});


// GET all bookings
router.get("/bookings", async (req, res) => {
    try {

        const bookings = await Booking.find();

        res.json(bookings);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});


// DELETE booking
router.delete("/book/:id", async (req, res) => {

    try {

        await Booking.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


module.exports = router;

// UPDATE status
router.put("/book/:id", async (req, res) => {

    try {

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        res.json(booking);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});