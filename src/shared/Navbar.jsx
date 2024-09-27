import { useEffect, useState } from "react";
import Image from "./Image";
import { CiSearch } from "react-icons/ci";
// flex justify-between lg:col-span-12 xl:col-span-13 2xl:col-span-14
// 2xl:col-span-2 xl:col-span-3 lg:col-span-4 lg:flex hidden
// lg:grid grid-cols-16
import { CiBellOn } from "react-icons/ci";
import { EnvelopeClosedIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(currentTime);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(currentTime);

  return (
    <nav className="lg:mx-6 mx-3 my-5 lg:flex">
      <div className="lg:block w-60 hidden ">
        <Image src="../../public/assets/logo/logo-horizontal.png" alt="logo" width={80} />
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="lg:block hidden lg:ml-6">
          <h1 className="welcome-text">Nandi Food Company</h1>
          <h4 className="welcome-sub-text">Nandi Foods</h4>
        </div>
        <div className="lg:hidden w-[50px] block">
          <Image src="../../public/assets/logo/favicon.png" alt="logo" width={70} />
        </div>

        <div className="flex items-center gap-x-3">
          <p className="welcome-sub-text lg:block hidden">{formattedDate}</p>
          <p className="welcome-sub-text lg:block hidden">{formattedTime}</p>
          <div>
            <form className="search-form flex items-center" action="#">
              <CiSearch className="size-6"/>
              <input type="search" className="form-control " placeholder="Search Here" title="Search here" />
            </form>
          </div>
          <EnvelopeClosedIcon className="size-5"/>
          <div className="relative flex-shrink-0">
            <span className="absolute top-0 right-2 size-2 bg-red-500 border border-white rounded-full "></span>
            <CiBellOn className="size-7" />
          </div>
          <div className="relative flex-shrink-0 lg:block hidden">
            <span className="absolute bottom-0 right-0 size-2 bg-green-400 border border-white rounded-full "></span>
            <Image src="../../public/assets/images/face8.jpg" alt="" className="size-8 rounded-full " />
          </div>
          <HamburgerMenuIcon className="lg:hidden block size-4 cursor-pointer" />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
