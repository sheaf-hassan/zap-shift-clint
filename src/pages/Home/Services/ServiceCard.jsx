import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border hover:bg-[#CAEB66]">
      <div className="card-body items-center text-center">
        
        {/* Icon */}
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <Icon className="text-3xl text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg text-primary font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;