// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/homestay', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  review: String,
  rating: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Testimonial Model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// API Route to Get Testimonials
app.get('/api/testimonials', (req, res) => {
  Testimonial.find({}, (err, testimonials) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve testimonials' });
    }
    res.status(200).json(testimonials);
  });
});

// API Route to Post a Testimonial
app.post('/api/testimonials', (req, res) => {
  const { name, review, rating } = req.body;

  const newTestimonial = new Testimonial({
    name,
    review,
    rating,
  });

  newTestimonial.save((err, testimonial) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save testimonial' });
    }
    res.status(201).json(testimonial);
  });
});

// Set server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
