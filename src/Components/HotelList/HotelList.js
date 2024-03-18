import React from 'react';

function HotelList({ hotels }) {
  return (
    <div className="hotel-list">
      <h2>Hotel List</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h3>{hotel.name}</h3>
            <p>{hotel.address}</p>
            {/* Diğer hotel bilgilerini buraya ekleyin */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
