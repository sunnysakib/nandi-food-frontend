import { useEffect, useState } from "react";
import Image from "./Image";
import { CiSearch } from "react-icons/ci";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


import { CiBellOn } from "react-icons/ci";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { CalendarCheck, CircleHelp, Mail, Power, Settings, TriangleAlert, User, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

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
    <nav className="lg:px-6 px-3 py-5 lg:flex bg-[#f5f6f7] fixed top-0 left-0 right-0 z-20">
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
              <CiSearch className="size-6" />
              <input type="search" className="form-control " placeholder="Search Here" title="Search here" />
            </form>
          </div>
          
          <Menubar className="bg-transparent shadow-none border-none p-0 ">
            <MenubarMenu >
              <MenubarTrigger className="p-0 cursor-pointer"><EnvelopeClosedIcon className="size-5" /></MenubarTrigger>
              <MenubarContent className="lg:mr-24 mr-14 w-[300px]">
                <MenubarItem className="py-4">
                  <p className="font-semibold">You have 3 new notifications</p><MenubarShortcut><Button size="sm" variant="outline" className="border-green-700 text-green-700 font-thin rounded-full text-[12px]">View all</Button></MenubarShortcut>
                </MenubarItem>
                <MenubarItem className="py-4">
                <TriangleAlert className="size-6 text-green-700 mr-3"/>
                  <div>
                    Application Error
                    <p className="text-gray-500">Just now</p>
                  </div>
                </MenubarItem>
                <MenubarItem className="py-4">
                <Settings className="size-6 text-green-700 mr-3" />
                  <div>
                   Settings
                    <p className="text-gray-500">Private massages</p>
                  </div>
                </MenubarItem>
                <MenubarItem className="py-4">
                <UserRoundPlus className="size-6 text-green-700 mr-3" />
                  <div>
                    New User Registration
                    <p className="text-gray-500">2 days ago</p>
                  </div>
                </MenubarItem>

              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Menubar className="bg-transparent shadow-none border-none p-0 ">
            <MenubarMenu >
              <MenubarTrigger className="p-0 cursor-pointer"><div className="relative flex-shrink-0">
                <span className="absolute top-0 right-2 size-2 bg-red-500 border border-white rounded-full "></span>
                <CiBellOn className="size-7" />
              </div></MenubarTrigger>
              <MenubarContent className="lg:mr-16 mr-8 w-[330px]">
                <MenubarItem className="py-4">
                  <p className="font-semibold pl-3">You have 3 unread mails</p><MenubarShortcut><Button size="sm" variant="outline" className="border-green-700 text-green-700 font-thin rounded-full text-[12px]">View all</Button></MenubarShortcut>
                </MenubarItem>
                <MenubarItem className="py-4">
                  <Image src="../../public/assets/images/face8.jpg" alt="" className="size-12 rounded-full mr-3" />
                  <div>
                    David Wilson
                    <p className="text-gray-500">Are you going to get a job</p>
                  </div>
                </MenubarItem>
                <MenubarItem className="py-4">
                  <Image src="../../public/assets/images/face8.jpg" alt="" className="size-12 rounded-full mr-3" />
                  <div>
                    David Wilson
                    <p className="text-gray-500">Are you going to get a job</p>
                  </div>
                </MenubarItem>
                <MenubarItem className="py-4">
                  <Image src="../../public/assets/images/face8.jpg" alt="" className="size-12 rounded-full mr-3" />
                  <div>
                    David Wilson
                    <p className="text-gray-500">Are you going to get a job</p>
                  </div>
                </MenubarItem>

              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div className="lg:block hidden">
            <Menubar className="bg-transparent shadow-none border-none p-0 ">
              <MenubarMenu >
                <MenubarTrigger className="p-0 cursor-pointer"><div className="relative flex-shrink-0 ">
                  <span className="absolute bottom-0 right-0 size-2 bg-green-400 border border-white rounded-full "></span>
                  <Image src="../../public/assets/images/face8.jpg" alt="" className="size-8 rounded-full " />
                </div></MenubarTrigger>
                <MenubarContent className="mr-4">
                  <div className="text-sm flex flex-col items-center gap-1 py-2">
                    <Image src="../../public/assets/images/face8.jpg" alt="" className="size-9 rounded-full " />
                    <p>Allen Moreno</p>
                    <p className="text-gray-500">allenmoreno@gmail.com</p>
                  </div>
                  <MenubarItem>
                    <User className="mr-2 size-4 text-green-800" /> My Profile<MenubarShortcut><p className="text-xs text-red-500 border border-red-500 rounded-full px-1">2</p></MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem><Mail className="mr-2 size-4 text-green-800" /> Messages</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem> <CalendarCheck className="mr-2 size-4 text-green-800" /> Activity</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem> <CircleHelp className="mr-2 size-4 text-green-800" /> FAQ</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem><Power className="mr-2 size-4 text-green-800" /> Sign Out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

          </div>


          <NavbarMobile />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
