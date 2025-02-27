import React from 'react';
import TripCard from './TripCard';

function TripGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <TripCard key={index} item={item} />
      ))}
    </div>
  );
}

export default TripGrid;