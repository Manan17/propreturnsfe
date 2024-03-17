import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const data = [
  {
    id: 1,
    title: "Company",
    sub: ["About", "Press", "Blog", "Careers"],
  },
  {
    id: 2,
    title: "Explore",
    sub: ["San Francisco", "New York", "Los Angeles"],
  },
  {
    id: 3,
    title: "Landlords",
    sub: ["List Your Space"],
  },
  {
    id: 4,
    title: "Support",
    sub: ["Help Center", "Contact Us"],
  },
];
const data2 = [
  {
    id: 1,
    title:
      "OFFICE SPACE IN NEW YORK CITY / DOWNTOWN MANHATTAN / MIDTOWN MANHATTAN / BROOKLYN",
    sub: [
      "Chelsea",
      "Financial District",
      "Flatiron District",
      "Garment District",
      "Gramercy Park",
      "Grand Central Station",
      "Greenwich Village",
      "NoHo",
      "NoMad",
      "Penn Station",
      "SoHo",
      "Union Square",
    ],
  },
  {
    id: 2,
    title: "OFFICE SPACE IN SAN FRANCISCO BAY AREA / SAN FRANCISCO",
    sub: [
      "Chinatown",
      "Financial District",
      "Mission District",
      "North Beach",
      "SoMa",
      "Union Square",
    ],
  },
  {
    id: 3,
    title: "OFFICE SPACE IN LOS ANGELES",
    sub: [
      "Santa Monica",
      "Brentwood",
      "Mar Vista",
      "Culver City",
      "Beverly Hills",
      "West Hollywood",
      "El Segundo",
    ],
  },
];
const Footer = () => {
  const [grayState, setGrayState] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <div className="mt-6 px-20 py-10 bg-[#012D9C]">
        <div className="flex w-full justify-between pb-8 border-b border-white">
          <div className="text-white w-full">
            <h1 className="text-2xl font-bold">Stay in the loop.</h1>
            <p>
              Interested in what we’re doing? Get updates sent straight to your
              inbox.
            </p>
          </div>
          <div className="flex items-center space-x-3 w-1/2">
            <div
              className={`flex ml-8 items-center z-50 p-3 w-full border rounded-md bg-white  ${
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
              <input
                type="text"
                placeholder="Email *"
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
            <div className="min-w-fit">
              <button className="bg-blue-700 text-white p-3 rounded-md text-xs font-bold">
                Connect with us
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex lg:flex-row flex-col items-center justify-between">
          {data.map((d) => (
            <div className="text-white" key={d.id}>
              <h1 className="text-xl flex flex-col space-y-4 font-bold">
                {d.title}
              </h1>
              {d.sub.map((s) => (
                <p className="my-4" key={s}>
                  {s}
                </p>
              ))}
            </div>
          ))}
          <div className="flex lg:flex-row flex-col justify-between mr-16 lg:space-x-8 space-y-4 lg:space-y-0">
            <BsLinkedin color="white" size={25} />
            <BsTwitter color="white" size={25} />
            <BsFacebook color="white" size={25} />
            <BsInstagram color="white" size={25} />
          </div>
        </div>
      </div>
      <div className="bg-[#113084] px-20 py-8 text-white w-full">
        {data2?.map((d) => (
          <div key={d.id} className="w-full mt-8">
            <h1 className="text-sm font-bold">{d.title}</h1>
            <div className="grid grid-cols-6 gap-6 w-full mt-8">
              {d.sub.map((s) => (
                <p className="text-xs mr-32 w-full" key={s}>
                  {s}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6 text-sm">
          <p>@ 2024 PropReturns. All Rights Reserved</p>
          <p>Privacy Terms Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
