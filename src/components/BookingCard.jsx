
import React from 'react';
import EditIcon from './icons/EditIcon';
import CalendarIcon from './icons/CalendarIcon';

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
};

const BookingCard = ({ data, onEdit }) => {
  const dropSize =
    data.outletPlanToday > 0
      ? (data.lrbBooking / data.outletPlanToday).toFixed(2)
      : 'N/A';

  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-md w-full font-sans">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800">{data.psrName}</h2>
                <p className="text-md text-gray-500">District: {data.district}</p>
                <p className="text-md text-gray-500">Zone: {data.zone}</p>
            </div>
             <button
                onClick={onEdit}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
                aria-label="Edit Booking Data"
            >
                <EditIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="flex items-center text-gray-600 mb-8">
            <CalendarIcon className="w-5 h-5 mr-3 text-indigo-500" />
            <p className="text-lg">
                <span className="font-semibold">Booking Date:</span> {formatDate(data.bookingDate)}
            </p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-500">Outlet Plan</p>
            <p className="text-2xl font-bold text-gray-800">{data.outletPlanToday}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">LRB Sale</p>
            <p className="text-2xl font-bold text-gray-800">{data.lrbBooking}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Drop Size</p>
            <p className="text-2xl font-bold text-indigo-600">{dropSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;