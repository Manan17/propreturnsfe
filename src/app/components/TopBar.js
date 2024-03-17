"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// Icons
import { CiSearch } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { TfiRulerAlt } from "react-icons/tfi";
import { PiDoorLight } from "react-icons/pi";
import { MdGraphicEq } from "react-icons/md";

// Menu
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  RadioGroup,
  Radio,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Switch,
} from "@chakra-ui/react";
import Link from "next/link";

const TopBar = ({ singleRoom }) => {
  const [grayState, setGrayState] = useState(false);
  const [focus, setFocus] = useState(false);
  const [time, setTime] = useState("Full Time");
  const [price, setPrice] = useState([]);
  const [size, setSize] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`px-20 py-4 sticky z-[1000] w-full bg-white top-0 left-0 right-0 ${
        offset > 50 ? "shadow-lg" : ""
      }`}
    >
      <div className={`flex justify-between items-center`}>
        <div className="flex items-center w-[90%]">
          <Link href="/">
            <Image src="/logo_prop.avif" width={150} height={150} />
          </Link>
          {singleRoom ? (
            <div className="flex space-x-6 w-full ml-8 py-2 mt-2">
              <h1 className="font-semibold text-sm">Why Codi</h1>
              <h1 className="font-semibold text-sm">How It Works</h1>
              <h1 className="font-semibold text-sm">Solutions</h1>
              <h1 className="font-semibold text-sm">Resources</h1>
              <h1 className="font-semibold text-sm">Offsites</h1>
              <h1 className="font-semibold text-sm">List your space</h1>
            </div>
          ) : (
            <div
              className={`flex ml-8 items-center p-3 w-[40%] border rounded-md ${
                focus ? "border-blue-500 border-2" : ""
              }`}
              style={{
                backgroundColor: grayState ? "#f1f5f9" : "white",
              }}
              onMouseEnter={() => {
                setGrayState(true);
              }}
              onMouseLeave={() => {
                setGrayState(false);
              }}
            >
              <CiSearch size={22} />
              <input
                type="text"
                placeholder={focus ? "Where do you want to work?" : "Search"}
                className={`text-xs ml-2 w-full border-transparent focus:border-transparent focus:ring-0 p-1 outline-none`}
                style={{
                  backgroundColor: grayState ? "#f1f5f9" : "white",
                }}
                onFocus={() => {
                  setGrayState(false);
                  setFocus(true);
                }}
                onBlur={() => {
                  setFocus(false);
                }}
              />
            </div>
          )}
        </div>
        <p className="cursor-pointer text-sm font-semibold mt-2">Sign In</p>
      </div>
      {!singleRoom && (
        <div className="mt-6 flex justify-between">
          <div className="flex space-x-3">
            <Menu>
              <MenuButton>
                <div className="flex space-x-1 p-4 bg-blue-50 rounded-md">
                  <MdOutlineCalendarMonth size={20} className="text-blue-600" />
                  <p className="text-blue-600 text-sm font-semibold">{time}</p>
                </div>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Days needed per week">
                  <RadioGroup onChange={setTime} value={time}>
                    <Stack paddingLeft={5}>
                      <Radio value="Full Time" className="mt-2">
                        <p className="text-sm mt-2">
                          Full Time
                          <p className="text-xs text-neutral-500">
                            Includes weekends
                          </p>
                        </p>
                      </Radio>
                      <Radio value="3 days/week" className="mt-2">
                        <p className="text-sm mt-2">3 days/week</p>
                      </Radio>
                      <Radio value="2 days/week" className="mt-2">
                        <p className="text-sm mt-2">2 days/week</p>
                      </Radio>
                      <Radio value="1 day/week" className="mt-2">
                        <p className="text-sm mt-2">1 day/week</p>
                      </Radio>
                    </Stack>
                    <MenuItem
                      _focus={{ bg: "none" }}
                      maxW="fit-content"
                      closeOnSelect={true}
                    >
                      <div className="pl-4">
                        <button className="text-sm text-white bg-blue-600 py-1 px-2 rounded-md mt-4">
                          Done
                        </button>
                      </div>
                    </MenuItem>
                  </RadioGroup>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton>
                <div
                  className={`flex space-x-1 p-4 ${
                    price.length === 0 ? "bg-white border" : "bg-blue-50"
                  } rounded-md`}
                >
                  <BsCurrencyDollar
                    size={20}
                    className={
                      price.length === 0 ? "text-neutral-600" : "text-blue-600"
                    }
                  />
                  <p
                    className={`${
                      price.length === 0 ? "text-neutral-600" : "text-blue-600"
                    } text-sm font-semibold`}
                  >
                    {price.length > 0
                      ? `${price[0] + "k-" + price[1] + "k /mo"}`
                      : "Price"}
                  </p>
                </div>
              </MenuButton>
              <MenuList className="w-[20vw]">
                <MenuGroup title="Monthly Price">
                  <div className="px-8 mt-16">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 100]}
                      onChange={(val) => setPrice(val)}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack bg={"lightgray"} />
                      </RangeSliderTrack>
                      <RangeSliderThumb boxSize={6} index={0} bg={"#0078FE"}>
                        <Box color="white" as={MdGraphicEq} />
                      </RangeSliderThumb>
                      <RangeSliderThumb boxSize={6} index={1} bg={"#0078FE"}>
                        <Box color="white" as={MdGraphicEq} />
                      </RangeSliderThumb>
                    </RangeSlider>
                    <div className="flex justify-between items-center mt-4">
                      <div className="p-2 bg-white border rounded-md">
                        <input
                          className="border-transparent w-[100px] w-fit focus:border-transparent focus:ring-0 p-1 outline-none text-xs"
                          placeholder="Min Price"
                          value={price.length > 0 ? price[0] * 1000 : ""}
                          readOnly
                        />
                      </div>

                      <div className="p-2 bg-white border rounded-md">
                        <input
                          className="border-transparent w-[100px] focus:border-transparent focus:ring-0 p-1 outline-none text-xs"
                          placeholder="Max Price"
                          value={price.length > 0 ? price[1] * 1000 : ""}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between px-4">
                    <MenuItem
                      _focus={{ bg: "none" }}
                      maxW="fit-content"
                      closeOnSelect={true}
                    >
                      <div className="">
                        <button className="text-sm text-white bg-blue-600 py-1 px-2 rounded-md mt-4">
                          Done
                        </button>
                      </div>
                    </MenuItem>
                    <div
                      onClick={() => {
                        setPrice([]);
                      }}
                      className="self-end cursor-pointer"
                    >
                      <p className="text-xs text-neutral-400">Reset</p>
                    </div>
                  </div>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton>
                <div
                  className={`flex space-x-1 p-4 ${
                    size.length === 0 ? "bg-white border" : "bg-blue-50"
                  } rounded-md`}
                >
                  <TfiRulerAlt
                    size={20}
                    className={
                      size.length === 0 ? "text-neutral-600" : "text-blue-600"
                    }
                  />
                  <p
                    className={`${
                      size.length === 0 ? "text-neutral-600" : "text-blue-600"
                    } text-sm font-semibold`}
                  >
                    {size.length > 0
                      ? `${size[0] + "k-" + size[1] + "k /mo"}`
                      : "Size"}
                  </p>
                </div>
              </MenuButton>
              <MenuList className="w-[20vw]">
                <MenuGroup title="Monthly Price">
                  <div className="px-8 mt-16">
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, 100]}
                      onChange={(val) => setSize(val)}
                      max={20}
                      min={0.1}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack bg={"lightgray"} />
                      </RangeSliderTrack>
                      <RangeSliderThumb boxSize={6} index={0} bg={"#0078FE"}>
                        <Box color="white" as={MdGraphicEq} />
                      </RangeSliderThumb>
                      <RangeSliderThumb boxSize={6} index={1} bg={"#0078FE"}>
                        <Box color="white" as={MdGraphicEq} />
                      </RangeSliderThumb>
                    </RangeSlider>
                    <div className="flex justify-between items-center mt-4">
                      <div className="p-2 bg-white border rounded-md">
                        <input
                          className="border-transparent w-[100px] w-fit focus:border-transparent focus:ring-0 p-1 outline-none text-xs"
                          placeholder="Min Price"
                          value={size.length > 0 ? size[0] * 1000 : ""}
                          readOnly
                        />
                      </div>

                      <div className="p-2 bg-white border rounded-md">
                        <input
                          className="border-transparent w-[100px] focus:border-transparent focus:ring-0 p-1 outline-none text-xs"
                          placeholder="Max Price"
                          value={size.length > 0 ? size[1] * 1000 : ""}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between px-4">
                    <MenuItem
                      _focus={{ bg: "none" }}
                      maxW="fit-content"
                      closeOnSelect={true}
                    >
                      <div className="">
                        <button className="text-sm text-white bg-blue-600 py-1 px-2 rounded-md mt-4">
                          Done
                        </button>
                      </div>
                    </MenuItem>
                    <div
                      onClick={() => {
                        setSize([]);
                      }}
                      className="self-end cursor-pointer"
                    >
                      <p className="text-xs text-neutral-400">Reset</p>
                    </div>
                  </div>
                </MenuGroup>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton>
                <div
                  className={`flex space-x-1 p-4 ${
                    meetingRooms === 0 ? "bg-white border" : "bg-blue-50"
                  } rounded-md`}
                >
                  <PiDoorLight
                    size={20}
                    className={
                      meetingRooms === 0 ? "text-neutral-600" : "text-blue-600"
                    }
                  />
                  <p
                    className={`${
                      meetingRooms === 0 ? "text-neutral-600" : "text-blue-600"
                    } text-sm font-semibold`}
                  >
                    {meetingRooms > 0 ? `${meetingRooms}+` : "Meeting Rooms"}
                  </p>
                </div>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Meeting Rooms" className="w-full">
                  <div className="px-4 flex w-full">
                    <div
                      onClick={() => {
                        setMeetingRooms(0);
                      }}
                      className={`py-3 px-4 rounded-s-lg ${
                        meetingRooms === 0
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      Any
                    </div>
                    <div
                      onClick={() => {
                        setMeetingRooms(1);
                      }}
                      className={`py-3 px-4  cursor-pointer ${
                        meetingRooms === 1
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      1+
                    </div>
                    <div
                      onClick={() => {
                        setMeetingRooms(2);
                      }}
                      className={`py-3 px-4  cursor-pointer ${
                        meetingRooms === 2
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      2+
                    </div>
                    <div
                      onClick={() => {
                        setMeetingRooms(3);
                      }}
                      className={`py-3 px-4 cursor-pointer ${
                        meetingRooms === 3
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      3+
                    </div>
                    <div
                      onClick={() => {
                        setMeetingRooms(4);
                      }}
                      className={`py-3 px-4 rounded-e-lg cursor-pointer ${
                        meetingRooms === 4
                          ? "bg-blue-600 text-white"
                          : "bg-white"
                      }`}
                    >
                      4+
                    </div>
                  </div>
                  <div className="flex justify-between px-4">
                    <MenuItem
                      _focus={{ bg: "none" }}
                      maxW="fit-content"
                      closeOnSelect={true}
                    >
                      <div className="">
                        <button className="text-sm text-white bg-blue-600 py-1 px-2 rounded-md mt-4">
                          Done
                        </button>
                      </div>
                    </MenuItem>
                    <div
                      onClick={() => {
                        setMeetingRooms(0);
                      }}
                      className="self-end cursor-pointer"
                    >
                      <p className="text-xs text-neutral-400">Reset</p>
                    </div>
                  </div>
                </MenuGroup>
              </MenuList>
            </Menu>
            <p
              className="self-center text-sm text-neutral-600 cursor-pointer"
              onClick={() => {
                setMeetingRooms(0);
                setPrice([]);
                setSize([]);
                setTime("Full Time");
              }}
            >
              Reset
            </p>
          </div>
          <div className="flex space-x-2 self-center">
            <p>Show only offsite availability</p>
            <Switch />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
