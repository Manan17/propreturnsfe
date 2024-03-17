import { Carousel } from "@material-tailwind/react";
import React from "react";

const HouseCard = ({ room }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:h-44 py-4 px-6 lg:px-0 lg:pr-4 border-b lg:mr-4 mb-4">
      <div className="min-w-[275px]">
        <Carousel className="rounded-xl lg:max-h-44 lg:max-w-[275px]">
          {room.images.map((imgs) => (
            <img src={imgs} key={imgs} className="h-full w-full object-cover" />
          ))}
        </Carousel>
      </div>
      <div className="h-full w-full flex flex-col justify-between mt-4 lg:mt-0">
        <div>
          <p className="text-sm text-neutral-500">{room.location}</p>
          <p className="text-lg font-medium">{room.title}</p>
        </div>
        <div className="flex space-x-4 justify-between">
          <div className="flex space-x-4">
            <p className="text-sm">{room.size} sqft</p>
            <p className="text-sm">{room.meetingRooms} meeting rooms</p>
          </div>
          <p className="font-semibold underline text-md">${room.rent}/mo</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
