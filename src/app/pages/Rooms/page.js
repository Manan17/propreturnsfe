"use client";
import React from "react";
import { Select } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import HouseCard from "../../components/HouseCard";
import Link from "next/link";
import Map from "react-map-gl";
import { useEffect } from "react";
const options = [
  "Recommended",
  "Newest",
  "Price (high to low)",
  "Price (low to high)",
  "Oldest",
];

const Rooms = () => {
  const [border, setBorder] = useState(false);
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
    <div className="pl-20 mt-4">
      <div className="flex w-full">
        <div className="w-full no-scrollbar h-screen overflow-y-scroll flex-grow scroll-smooth">
          <div className="flex justify-between pr-8">
            <p className="">5 workspaces</p>
            <div className="flex items-center w-fit">
              <p className="text-sm w-1/4 mr-3">Sort By</p>
              <div
                onBlur={() => setBorder(false)}
                onClick={() => setBorder(true)}
                className={`p-2 rounded-lg bg-white ${
                  border ? "border-2 border-blue-500" : "border"
                } `}
              >
                <Select
                  focusBorderColor="white"
                  borderColor="white"
                  size={"xs"}
                >
                  {options.map((option) => (
                    <option value="option" className="m-2" key={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          {roomDetails?.length > 0 && (
            <Link href="/pages/SingleRoom">
              <HouseCard room={roomDetails[0]} key={roomDetails[0]._id} />
            </Link>
          )}
          <div className="p-6 items-center rounded-lg bg-[#F2F8FE] flex justify-between mr-4">
            <div className="max-w-[400px]">
              <h1 className="text-blue-900 text-2xl font-bold">
                Not seeing what you need?
              </h1>
              <p>
                Share your preferences and we’ll unlock an office with
                unbeatable terms, anywhere.
              </p>
            </div>
            <div className="min-w-fit">
              <button className="bg-blue-700 flex items-center text-white p-3 rounded-md text-xs font-bold">
                Request an office
                <GoArrowRight className="ml-3" />
              </button>
            </div>
          </div>
          <div className="border-b mt-4 mr-4"></div>
          {roomDetails?.length > 0 && (
            <div className="mt-6">
              {roomDetails?.slice(1, 5).map((room) => (
                <HouseCard room={room} key={room._id} />
              ))}
            </div>
          )}
        </div>
        <div className="h-screen w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Rooms;
