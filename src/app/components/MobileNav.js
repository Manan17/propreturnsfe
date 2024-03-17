"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="bg-white w-full p-2 relative flex justify-between">
      <Link href="/">
        <Image src="/logo_prop.avif" width={120} height={120} />
      </Link>
      <IoReorderThree size={30} onClick={() => setOpenNav(!openNav)} />
      {openNav && (
        <div className="bg-white p-4 absolute left-0 top-12 z-[10000] flex flex-col space-y-6 w-full">
          <h1 className="font-semibold text-sm">Why Codi</h1>
          <h1 className="font-semibold text-sm">How It Works</h1>
          <h1 className="font-semibold text-sm">Solutions</h1>
          <h1 className="font-semibold text-sm">Resources</h1>
          <h1 className="font-semibold text-sm">Offsites</h1>
          <h1 className="font-semibold text-sm">List your space</h1>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
