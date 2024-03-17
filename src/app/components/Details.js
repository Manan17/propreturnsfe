import React, { useRef } from "react";
import Map from "react-map-gl";

// Icons
import { CiSettings } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { FaRegLightbulb, FaWalking } from "react-icons/fa";
import { MdOutlineLocalDrink } from "react-icons/md";
import { TfiSpray } from "react-icons/tfi";
import { RiBikeFill, RiTodoLine } from "react-icons/ri";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsTrainFrontFill } from "react-icons/bs";
const data = [
  {
    id: 1,
    title: "Rent",
    desc: "Fully serviced; includes monthly rent and maintenance",
    icon: () => <CiSettings size={25} />,
  },
  {
    id: 2,
    title: "Furniture",
    desc: "Ergonomic workstations, lounges, and whiteboards are ready for use",
    icon: () => <FaRegLightbulb size={20} />,
  },
  {
    id: 3,
    title: "Cleaning",
    desc: "Weekly cleaning, maintenance, and add-ons.",
    icon: () => <TfiSpray size={20} />,
  },
  {
    id: 4,
    title: "Fast WiFi",
    desc: "Be connected from day one and know that we’re only one call away",
    icon: () => <CiWifiOn size={25} />,
  },
  {
    id: 5,
    title: "Beverages",
    desc: "Tea, coffee, and sparkling water, restocked monthly",
    icon: () => <MdOutlineLocalDrink size={20} />,
  },
  {
    id: 6,
    title: "Office management",
    desc: "Fractional office management with on-site support",
    icon: () => <RiTodoLine size={20} />,
  },
];

const carouselData = [
  {
    id: 1,
    image:
      "https://assets.codi.com/ux/tr:w-600/phone-booth_mcGy1D3A2.png?updatedAt=1692754819979",
    title: "Phone Booth",
  },
  {
    id: 2,
    image:
      "https://assets.codi.com/ux/tr:w-600/zoom-room_81HdQZN5r.jpeg?updatedAt=1692669084958",
    title: "Zoom Room",
  },
  {
    id: 3,
    image:
      "https://assets.codi.com/ux/tr:w-600/phone-booth_mcGy1D3A2.png?updatedAt=1692754819979",
    title: "Phone Booth",
  },
  {
    id: 4,
    image:
      "https://assets.codi.com/ux/tr:w-600/zoom-room_81HdQZN5r.jpeg?updatedAt=1692669084958",
    title: "Zoom Room",
  },
  {
    id: 5,
    image:
      "https://assets.codi.com/ux/tr:w-600/phone-booth_mcGy1D3A2.png?updatedAt=1692754819979",
    title: "Phone Booth",
  },
  {
    id: 6,
    image:
      "https://assets.codi.com/ux/tr:w-600/zoom-room_81HdQZN5r.jpeg?updatedAt=1692669084958",
    title: "Zoom Room",
  },
  {
    id: 7,
    image:
      "https://assets.codi.com/ux/tr:w-600/phone-booth_mcGy1D3A2.png?updatedAt=1692754819979",
    title: "Phone Booth",
  },
  {
    id: 8,
    image:
      "https://assets.codi.com/ux/tr:w-600/zoom-room_81HdQZN5r.jpeg?updatedAt=1692669084958",
    title: "Zoom Room",
  },
];

const Details = () => {
  const ref = useRef();
  const [scroll, setScroll] = useState(0);
  const [screen, setScreen] = useState(1920);
  useEffect(() => {
    let width = window.innerWidth;
    setScreen(width);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setScreen(window.innerWidth);
      });
  }, []);
  const handleScroll = (amount) => {
    const newScoll = scroll + amount;
    setScroll(newScoll);
    ref.current.scrollLeft = newScoll;
  };
  return (
    <div className="px-[18%] py-6">
      <div className="flex  space-x-24 w-full items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[10px] text-gray-700">CAPACITY</h1>
          <h1 className="font-bold text-lg text-gray-700 my-2">16</h1>
          <p className="text-xs text-gray-700">seats</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[10px] text-gray-700">SIZE</h1>
          <h1 className="font-bold text-lg text-gray-700 my-2">2,170</h1>
          <p className="text-xs text-gray-700">sq. feet</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[10px] text-gray-700">MEETING</h1>
          <h1 className="font-bold text-lg text-gray-700 my-2">4</h1>
          <p className="text-xs text-gray-700">rooms</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col space-x-4 mt-12 lg:space-y-0 space-y-6">
        <img
          className="lg:w-[35%] h-[230px] rounded-2xl object-cover"
          src="https://assets.codi.com/production/tr:w-600,h-400/rqp4za17trpjs8fh1d7h815z5i6s"
        />
        <img
          className="lg:w-[35%] h-[230px] rounded-2xl object-cover"
          src="https://assets.codi.com/production/tr:w-600,h-400/2eha7qmyw63xtr6wz2pjpujdkp4r"
        />
        <img
          className="lg:w-[35%] h-[230px] rounded-2xl object-cover"
          src="https://assets.codi.com/production/tr:w-600,h-400/cf3bqw3a587nrqwf4e954et4s4g5"
        />
      </div>
      <div className="mt-8 relative py-8 pb-0 border-t flex lg:flex-row flex-col space-x-8 border-b">
        <div>
          <h1 className="text-2xl font-bold">About this office space</h1>
          <p className="mt-6 pb-8 border-b">
            This high end Williamsburg office suite features 1 large conference
            room, 3 meeting rooms / offices, great natural light, large windows
            and high exposed ceilings. Reach out to customize your office!
          </p>
          <div className="mt-8 pb-8 border-b">
            <h1 className="text-2xl font-bold">What{"'"}s included?</h1>
            <div className="grid grid-cols-2 gap-6 mt-8 bg-gray-50 rounded-lg px-6 py-8">
              {data.map((d) => (
                <div key={d.id}>
                  <div className="flex space-x-3">
                    <d.icon />
                    <div>
                      <h1 className="text-sm font-semibold text-gray-800">
                        {d.title}
                      </h1>
                      <p className="text-sm text-gray-700">{d.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pb-8 border-b">
            <h1 className="text-2xl font-bold">Optional add-ons</h1>
            <p className="mt-2 text-sm">
              Customize your office to fit your needs.{" "}
              <span className="text-blue-700">View all</span>{" "}
            </p>
            <div
              ref={ref}
              className="flex relative lg:w-[700px] overflow-x-scroll no-scrollbar space-x-4 mt-8 scroll-smooth"
            >
              {scroll > 0 && (
                <button
                  onClick={() => {
                    handleScroll(-200);
                  }}
                  className="sticky left-0 top-1/3 bg-white rounded-full p-3 shadow-lg h-fit duration-500 ease-linear transition-all mr-6"
                >
                  <IoIosArrowBack color="blue" />
                </button>
              )}
              {carouselData.map((c) => (
                <div key={c.id} className="w-1/3 flex-shrink-0">
                  <div className="bg-gray-50 p-1 w-full min-h-[150px] rounded-xl">
                    <img src={c.image} className="object-cover h-[130px]" />
                  </div>
                  <p className="ml-3 mt-2 text-gray-700 text-sm">{c.title}</p>
                </div>
              ))}

              <button
                onClick={() => {
                  handleScroll(200);
                }}
                className="sticky right-0 top-1/3 bg-white rounded-full p-3 shadow-lg h-fit"
              >
                <IoIosArrowForward color="blue" />
              </button>
            </div>
          </div>
          <div className="mt-8 pb-8">
            <h1 className="text-2xl font-bold">Location</h1>
            <div className="mt-8">
              {screen > 960 && (
                <Map
                  mapboxAccessToken="pk.eyJ1IjoibWFuYW4xNyIsImEiOiJja2F0ZzN4YWswdDVrMzdvYzN0aGVhc21uIn0.Vi9177bqFEOmAFNJz7Kwbw"
                  initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14,
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "40px",
                  }}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                />
              )}
              <div className="mt-16">
                <p className="text-sm font-semibold">
                  Neighborhood: Williamsburg
                </p>
                <div className="mt-8 border-b pb-8 flex justify-between">
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-sm">Walk Score</p>
                    <FaWalking size={25} />
                    <p>
                      <span className="text-blue-600">98</span>/100
                    </p>
                    <p className="text-[10px]">Walker Paradise</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-sm">Bike Score</p>
                    <RiBikeFill size={25} />
                    <p>
                      <span className="text-blue-600">98</span>/100
                    </p>
                    <p className="text-[10px]">Walker Paradise</p>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-sm">Transit Score</p>
                    <BsTrainFrontFill size={25} />
                    <p>
                      <span className="text-blue-600">98</span>/100
                    </p>
                    <p className="text-[10px]">Walker Paradise</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="text-2xl font-bold">Meet James</h1>
                  <div className="mt-4 flex lg:flex-row flex-col items-center justify-between space-x-8">
                    <img
                      src="https://assets.codi.com/ux/tr:w-200/James_YPSoLlEcG.png"
                      className="rounded-full w-[70px]"
                    />
                    <p>
                      Our Customer Success team is committed to help every step
                      of the way. Get hands-on professional support no matter
                      what your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 py-8 shadow-lg rounded-md w-[65%] h-fit sticky top-24">
          <div className="">
            <div className="pb-6 border-b flex lg:flex-row flex-col space-x-3">
              <img
                src="https://assets.codi.com/production/tr:w-600,h-400/rqp4za17trpjs8fh1d7h815z5i6s"
                className="rounded-lg h-16 w-16"
              />
              <div>
                <h1 className="font-bold">
                  Modern, Sunny Office in Williamsburg
                </h1>
                <p className="text-xs mt-3 text-gray-600">
                  New York City {">"} Brooklyn {">"} Williamsburg
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl mt-4 font-bold pb-1 border-b-2 w-fit border-b-black">
                <sup>$</sup>17,200
              </h1>
              <button className="text-sm w-full text-white bg-blue-700 py-4 px-6 rounded-md mt-8">
                Request a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Nearby office spaces</h1>
        <div className="mt-8 flex space-x-6 lg:flex-row flex-col">
          <div className="lg:w-1/3">
            <img
              className="w-full rounded-lg"
              src="https://assets.codi.com/production/tr:w-1200,h-800/iymt6xgbtf2if7rmqaktbry4dckd"
            />
            <p className="mt-3 text-gray-700">Williamsburg, Brooklyn, NY</p>
            <p className="text-gray-700">High End Office In Williamsburg</p>
            <p className="mt-3 font-bold">$14,713 / month</p>
          </div>
          <div className="lg:w-1/3">
            <img
              className="w-full rounded-lg"
              src="https://assets.codi.com/production/tr:w-1200,h-800/emp7bxhsgsh8d3utbw1mdo9q3ima"
            />
            <p className="mt-3 text-gray-700">Williamsburg, Brooklyn, NY</p>
            <p className="text-gray-700">High End Office In Williamsburg</p>
            <p className="mt-3 font-bold">$14,713 / month</p>
          </div>
          <div className="lg:w-1/3">
            <img
              className="w-full rounded-lg"
              src="https://assets.codi.com/production/tr:w-1200,h-800/fdfy7eh5yziuxtqmj1p78wdhcdjp"
            />
            <p className="mt-3 text-gray-700">Williamsburg, Brooklyn, NY</p>
            <p className="text-gray-700">High End Office In Williamsburg</p>
            <p className="mt-3 font-bold">$14,713 / month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
