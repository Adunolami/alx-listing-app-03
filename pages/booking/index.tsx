import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const bookingDetails = {
  propertyName: "Luxury Villa",
  propertyImage: "https://example.com/property.jpg",
  reviewScore: 4.76,
  reviewCount: 345,
  startDate: "Aug 25",
  totalNights: 3,
  bookingFee: 50,
  price: 500,
};

const BookingPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
    <BookingForm />
    <div>
      <OrderSummary bookingDetails={bookingDetails} />
      <CancellationPolicy />
    </div>
  </div>
);

export default BookingPage;
