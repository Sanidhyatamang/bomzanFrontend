import { useState, useEffect } from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const fetchReviews = async () => {
  try {
    // Simulating the successful fetch of reviews
    return [
      { id: 1, name: "John Doe", message: "Great place to stay!", rating: 5 },
      { id: 2, name: "Jane Smith", message: "Loved the hospitality!", rating: 4 },
      { id: 3, name: "Sanidhya", message: "Loved the geographical area", rating: 5 },
    ];
  } catch (error) {
    throw new Error(error.message || "An error occurred while fetching reviews.");
  }
};


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '', rating: 5 });

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await fetchReviews();
      setReviews(reviews);
    };
    getReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...formData, id: Date.now() }; // Create a new review object
    setReviews((prev) => [newReview, ...prev]); // Add new review to the reviews list
    setFormData({ name: '', message: '', rating: 5 }); // Clear the form
  };

  return (
    <div className="container mx-auto p-6 bg-cover bg-center border-t-4"
    style={{backgroundImage: 'url("/images/background9.jpg")'}}
    >
      {/* Review Submission Form */}
      <div className="bg-white bg-opacity-40 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-light mb-4 text-gray-300">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded bg-white bg-opacity-60 placeholder-gray-500 text-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Your Review"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded bg-white bg-opacity-60 placeholder-gray-500 text-gray-900"
            required
          ></textarea>
          <StarRating rating={formData.rating} onRatingChange={handleRatingChange} />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      </div>

      {/* Testimonials Display */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white bg-opacity-60 shadow-lg rounded-lg p-6">
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-700 mt-2">{review.message}</p>
            <StarRating rating={review.rating} onRatingChange={() => {}} /> {/* Display rating */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;