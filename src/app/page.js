"use client";
import { ChakraProvider } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import "mapbox-gl/dist/mapbox-gl.css";
import Rooms from "./pages/Rooms/page";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import RoomsMobile from "./pages/Rooms/mobile";
import MobileNav from "./components/MobileNav";
export default function Home() {
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
      <ChakraProvider>
        <div className="relative">
          {screen > 960 ? (
            <div>
              <TopBar />
              <Rooms />
              <Footer />
            </div>
          ) : (
            <div>
              <MobileNav />
              <RoomsMobile />
            </div>
          )}
        </div>
      </ChakraProvider>
    </div>
  );
}
