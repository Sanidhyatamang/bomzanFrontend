import React, { useState, Component } from "react";

// Error Boundary Component
class BookingErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred in BookingSection:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-red-600 text-xl font-bold">
            Something went wrong. Please try again later.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

// BookingSection Component
const BookingSection = () => {
  const [numRooms, setNumRooms] = useState(1);
  const [selectedId, setSelectedId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isIdUploaded, setIsIdUploaded] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleRoomChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 4) {
      setNumRooms(value);
    }
  };

  const handleCheckInDateChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    if (checkOutDate && new Date(newCheckInDate) >= new Date(checkOutDate)) {
      alert("Check-in date must be earlier than the check-out date.");
      setCheckInDate("");
    }
  };

  const handleCheckOutDateChange = (e) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);

    if (checkInDate && new Date(checkInDate) >= new Date(newCheckOutDate)) {
      alert("Check-out date must be later than the check-in date.");
      setCheckOutDate("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setUploadError("No file selected.");
      setIsIdUploaded(false);
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setUploadError("Invalid file type. Please upload a JPG, PNG, or WEBP file.");
      setIsIdUploaded(false);
      return;
    }

    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file.size > maxSize) {
      setUploadError("File size exceeds 2MB. Please upload a smaller file.");
      setIsIdUploaded(false);
      return;
    }

    setUploadError("");
    setIsIdUploaded(true);
    console.log("File uploaded successfully:", file.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName || !phone || !selectedId || !checkInDate || !checkOutDate || !isIdUploaded) {
      alert("Please fill in all required fields and upload your ID!");
      return;
    }

    console.log("Form submitted with the following details:");
    console.log({ fullName, phone, numRooms, selectedId, checkInDate, checkOutDate });
  };

  const isFormValid =
    fullName &&
    phone &&
    selectedId &&
    checkInDate &&
    checkOutDate &&
    isIdUploaded;

  return (
    <div
      className="min-h-screen flex  justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background29.jpg')",
      }}
    >
      <form
        className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-6 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-thin mb-6 text-center text-gray-800">
          Booking Section
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numRooms" className="block text-gray-700 font-medium mb-2">
            Number of Rooms
          </label>
          <input
            type="number"
            id="numRooms"
            value={numRooms}
            onChange={handleRoomChange}
            min="1"
            max="4"
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-700 font-medium mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-700 font-medium mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="idProof" className="block text-gray-700 font-medium mb-2">
            ID Proof
          </label>
          <select
            id="idProof"
            value={selectedId}
            onChange={(e) => {
              setSelectedId(e.target.value);
              setIsIdUploaded(false);
            }}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select ID Proof</option>
            <option value="aadharcard">Aadhar Card</option>
            <option value="voterID">Voter ID</option>
            <option value="pancard">PAN Card</option>
          </select>
        </div>

        {selectedId && (
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">
              {selectedId === "aadharcard"
                ? "Upload your Aadhar Card"
                : selectedId === "voterID"
                ? "Upload your Voter ID"
                : "Upload your PAN Card"}
            </p>
            {!isIdUploaded ? (
              <div className="flex space-x-4">
                <label className="flex flex-col items-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
                  <span>Upload ID</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            ) : (
              <p className="text-green-600 font-medium">ID Uploaded: {selectedId}</p>
            )}
            {uploadError && <p className="text-red-600">{uploadError}</p>}
          </div>
        )}

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-2 px-4 ${
            isFormValid
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-300 cursor-not-allowed"
          } text-white font-medium rounded-lg focus:outline-none`}
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

// Export Wrapped in Error Boundary
export default function BookingWrapper() {
  return (
    <BookingErrorBoundary>
      <BookingSection />
    </BookingErrorBoundary>
  );
}
