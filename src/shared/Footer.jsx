import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import Image from "./Image";

const Footer = () => {
  return (
    <div className=" bg-[#343a40]">
      <footer className="py-6 md:container px-3 text-gray-100">
        <div className="grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-yellow-primary font-medium">
              Findexx
            </h2>
            <div className="flex flex-col space-y-2 text-md text-slate-200">
              <Link to="/about">About</Link>
              <Link to="/fees">Fees</Link>
              <Link to="/listing">List With Us</Link>
              <Link to="/announcements">Announcements</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-yellow-primary font-medium">
              Products
            </h2>
            <div className="flex flex-col space-y-2 text-md text-slate-200">
              <Link to="/trade">Trade</Link>
              <Link to="/p2p">P2P</Link>
              <Link to="/convert">Convert</Link>
              <Link to="/arbitrage">Arbitrage</Link>
              <Link to="/stake">Stake</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-yellow-primary font-medium">
              Help & Support
            </h2>
            <div className="flex flex-col space-y-2 text-md text-slate-200">
              <Link to="/support">Support</Link>
              <Link to="/fees">Supported Countries</Link>
              <Link to="/api-documentation">API Documentation</Link>
              <Link to="/status">Status</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl text-yellow-primary font-medium">Social</h2>
            <div className="flex flex-col space-y-2 text-md text-slate-200">
              <Link to="/telegram ">Telegram</Link>
            </div>
          </div>
        </div>
        <Separator className="my-3" />
        <div className="flex flex-col gap-y-4 md:flex-row md:items-center justify-between text-sm">
          <div className="flex justify-between gap-6 items-center">
            <Image
              src="https://www.findexx.net/images/logo/findexx.png"
              alt="logo"
              width={180}
            />
            <p className="text-gray-400">© Findexx LLC 2024</p>
          </div>
          <div className="flex gap-3 text-xs justify-center items-center ">
            <Link to='/' className="text-gray-400 hover:text-gray-200">Data Protection Notice</Link>
            <Link to='/' className="text-gray-400 hover:text-gray-200">Terms of Use</Link>
            <Link to='/' className="text-gray-400 hover:text-gray-200">Risk Disclosure</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
