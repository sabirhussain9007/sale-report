import React, { useState } from 'react';
import BookingCard from './components/BookingCard';
import UpdateModal from './components/UpdateModal';

const initialData = {
  bookingDate: '2025-10-20',
  district: '03',
  zone: 'K',
  psrName: 'Sabir Hussain',
  outletPlanToday: 40,
  lrbBooking: 970,
};

function App() {
  const [bookingData, setBookingData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveData = (updatedData) => {
    setBookingData(updatedData);
    handleCloseModal();
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
     
      <BookingCard data={bookingData} onEdit={handleOpenModal} />
      <UpdateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveData}
        initialData={bookingData}
      />
    </div>
    </>
  );
}

export default App;
