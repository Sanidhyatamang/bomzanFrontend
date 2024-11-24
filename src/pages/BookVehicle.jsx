import React, { useState } from 'react';

const BookVehicle = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [basePrice, setBasePrice] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [advancePayment, setAdvancePayment] = useState(400); // Minimum advance payment
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const vehicles = [
    { type: 'Sedan', basePrice: 1000 },
    { type: 'SUV', basePrice: 1500 },
    { type: 'Mini Bus', basePrice: 2000 }
  ];

  const dropLocations = [
    { location: 'Darjeeling', additionalCost: 500 },
    { location: 'Takdah Cantonment', additionalCost: 600 },
    { location: 'Kalimpong', additionalCost: 700 },
    { location: 'Sikkim', additionalCost: 800 },
    { location: 'Gangtok', additionalCost: 900 },
    { location: 'Kurseong', additionalCost: 400 },
    { location: 'Sonada', additionalCost: 300 },
  ];

  const handleVehicleChange = (e) => {
    const selectedVehicle = vehicles.find(v => v.type === e.target.value);
    setVehicleType(selectedVehicle?.type || '');
    setBasePrice(selectedVehicle?.basePrice || 0);
  };

  const handleDropLocationChange = (e) => {
    const selectedLocation = dropLocations.find(loc => loc.location === e.target.value);
    setDropLocation(selectedLocation?.location || '');
    setAdditionalCost(selectedLocation?.additionalCost || 0);
  };

  const handleAdvancePaymentChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setAdvancePayment(value >= 400 ? value : 400);
  };


  const handleConfirmBooking = () => {
    if(!pickupLocation || !dropLocation || !bookingDate || !pickupTime || !vehicleType || !phoneNumber){
      setErrorMessage('Please fill out all fields before booking.');
      return;
    }

    if(phoneNumber.length !== 10) {
      setErrorMessage('Phone number must be exactly 10 digits.');
      return;
    }

    setErrorMessage('');
    alert('Vehicle booked successfully');
    


   // Clear all input fields
      setPickupLocation('');
      setDropLocation('');
      setBookingDate('');
      setPickupTime('');
      setVehicleType('');
      setBasePrice(0);
      setAdditionalCost(0);
      setAdvancePayment(400); 
      setPhoneNumber('');
  };

  const finalPrice = basePrice + additionalCost;

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(images/background14.jpg)' }}
    >
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-thin mb-6 text-center">
          Book Your Vehicle
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Pickup Location */}
          <div>
            <label className="block text-gray-900 mb-2">Pickup Location:</label>
            <select
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Select Pickup Location</option>
              <option value="NJP">NJP (New Jalpaiguri Station)</option>
              <option value="Bagdogra Airport">Bagdogra Airport</option>
              <option value="Junction">Junction</option>
            </select>
          </div>

          {/* Drop-off Location */}
          <div>
            <label className="block text-gray-900 mb-2">Drop-off Location:</label>
            <select
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={dropLocation}
              onChange={handleDropLocationChange}
            >
              <option value="">Select Drop-off Location</option>
              {dropLocations.map((location, index) => (
                <option key={index} value={location.location}>
                  {location.location}
                </option>
              ))}
            </select>
          </div>

          {/* Booking Date */}
          <div>
            <label className="block text-gray-900 mb-2">Booking Date:</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-gray-900 mb-2">Pickup Time:</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-gray-900 mb-2">Vehicle Type:</label>
            <select
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={vehicleType}
              onChange={handleVehicleChange}
            >
              <option value="">Select Vehicle Type</option>
              {vehicles.map((vehicle, index) => (
                <option key={index} value={vehicle.type}>
                  {vehicle.type}
                </option>
              ))}
            </select>
          </div>

          {/* Final Price */}
          <div className="text-blue-600 text-lg">
            <strong>Final Price:</strong> ₹{finalPrice}
          </div>

          {/* Advance Payment */}
          <div>
            <label className="block text-gray-900 mb-2">Advance Payment (₹):</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              min="400"
              max="1000"
              step="50"
              value={advancePayment}
              onChange={handleAdvancePaymentChange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-900 mb-2">Phone Number:</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 bg-white bg-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) { // Ensures only numbers up to 10 digits
                  setPhoneNumber(value);
                }
              }}
            />
            {phoneNumber.length > 0 && phoneNumber.length !== 10 && (
              <p className="text-red-600 text-sm mt-1">Phone number must be 10 digits.</p>
            )}
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-600 text-center mt-4">
            {errorMessage}
          </div>
        )}

        {/* Confirm Button */}
        <div className="mt-6 flex justify-center">
          <button
          onClick={handleConfirmBooking} 
          className="w-40 border border-gray-800 text-gray-800 p-2 rounded-full shadow-lg hover:scale-105 duration-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white focus:outline-none"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookVehicle;