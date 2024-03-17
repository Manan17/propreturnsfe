import React from "react";
import Map from "react-map-gl";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";
import HouseCard from "@/app/components/HouseCard";

const RoomsMobile = () => {
  const [showRooms, setShowRooms] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const rooms = await fetch(
        "https://propreturnsbe.vercel.app/api/get-rooms"
      );
      const res = await rooms.json();
      console.log(res.rooms);
      setRoomDetails(res.rooms);
    }
    fetchData();
  }, []);
  return (
    <div className="">
      {showRooms ? (
        <div className="relative h-screen overflow-y-scroll">
          <div
            onClick={() => setShowRooms(!showRooms)}
            className="p-3 bg-white rounded-full sticky top-[80vh] left-[35vw] z-[1000] w-fit shadow-xl"
          >
            <h1>Show Map</h1>
          </div>
          {roomDetails?.map((room) => (
            <Link key={room._id} href="/pages/SingleRoom">
              <HouseCard room={room} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-screen w-screen relative">
          <Map
            mapboxAccessToken="pk.eyJ1IjoibWFuYW4xNyIsImEiOiJja2F0ZzN4YWswdDVrMzdvYzN0aGVhc21uIn0.Vi9177bqFEOmAFNJz7Kwbw"
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            zoomControl={false}
          />
          <div className="p-3 bg-white rounded-full absolute bottom-20 left-6 z-[1000]">
            <AiOutlineMenuUnfold
              onClick={() => setShowRooms(!showRooms)}
              size={25}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomsMobile;
