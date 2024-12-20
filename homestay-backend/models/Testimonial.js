const mongoose = require("mongoose");

// Define the Testimonial schema
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Testimonial model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
