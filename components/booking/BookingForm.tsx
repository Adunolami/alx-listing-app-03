import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="border p-2 w-full mt-2"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="border p-2 w-full mt-2"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="border p-2 w-full mt-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="border p-2 w-full mt-2"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Payment Details</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            className="border p-2 w-full mt-2"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              className="border p-2 w-full mt-2"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              className="border p-2 w-full mt-2"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input
            type="text"
            name="streetAddress"
            className="border p-2 w-full mt-2"
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              className="border p-2 w-full mt-2"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              name="state"
              className="border p-2 w-full mt-2"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              className="border p-2 w-full mt-2"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              className="border p-2 w-full mt-2"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
