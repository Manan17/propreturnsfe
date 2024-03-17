"use client";
import Details from "@/app/components/Details";
import Footer from "@/app/components/Footer";
import MobileNav from "@/app/components/MobileNav";
import TopBar from "@/app/components/TopBar";
import React, { useState, useEffect } from "react";

const SingleRoom = () => {
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
  return (
    <div>
      {screen > 960 ? <TopBar singleRoom={true} /> : <MobileNav />}
      <div className="relative bg-[url('https://assets.codi.com/production/tr:w-1920,h-1280/rqp4za17trpjs8fh1d7h815z5i6s')] w-full h-[25vh] lg:h-[72vh] bg-no-repeat bg-center bg-cover">
        {screen > 960 && (
          <div
            className="absolute flex items-center justify-between text-white bottom-[-50px] w-[65vw] left-1/2 right-1/2 px-10 py-8 bg-slate-600 backdrop-blur-2xl rounded-3xl"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div>
              <h1 className="text-2xl font-bold">
                Modern, Sunny Office in Williamsburg
              </h1>
              <p className="text-normal text-neutral-400">
                New York City {">"} Brooklyn {">"} Williamsburg
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <h1 className="underline text-lg font-semibold mt-3">
                $17,200/month
              </h1>
              <div className="">
                <button className="text-sm text-white bg-blue-700 py-4 px-6 rounded-md mt-4">
                  Request a Tour
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Details />
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default SingleRoom;
