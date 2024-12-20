// routes/testimonialRoutes.js

const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET route to fetch all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
});

// POST route to submit a new testimonial
router.post("/", async (req, res) => {
  const { name, message, rating } = req.body;

  if (!name || !message || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newTestimonial = new Testimonial({
    name,
    message,
    rating,
  });

  try {
    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding testimonial" });
  }
});

module.exports = router;
