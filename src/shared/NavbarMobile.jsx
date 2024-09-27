import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const NavbarMobile = () => {
  return (
    <div className="lg:hidden md:block">
      <Sheet className="bg-slate-800">
        <SheetTrigger>
          <FaBars className="text-xl text-slate-400 hover:text-slate-200" />
        </SheetTrigger>
        <SheetContent className="bg-gray-primary border-none">
          <SheetHeader>
            <div className="pt-8">
              <div className="text-white text-base flex flex-col gap-y-2">
                <Button variant="none">
                  <Link to="/signin">Signin</Link>
                </Button>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Link to="/signup">Signup</Link>
                </Button>
              </div>

              <NavigationMenu className="pt-4">
                <NavigationMenuList>
                  <NavigationMenuItem className="flex flex-col gap-y-4 text-left text-[1rem] text-slate-400">
                    <Link className="hover:text-slate-200" to="/markets">
                      Markets
                    </Link>
                    <Link className="hover:text-slate-200" to="/trade">
                      Trade
                    </Link>
                    <Link to="/arbitrage" className="hover:text-slate-200" >
                      Arbitrage
                    </Link>
                    <Popover>
                      <PopoverTrigger className="flex gap-1 items-center hover:text-slate-200">
                        Explore <ChevronDownIcon />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col w-fit px-0">
                        <Link className="link-hover" to="/stack">
                          Stack
                        </Link>
                        <Link className="link-hover" to="/convert">
                          Convert
                        </Link>
                        <Link to='/bundle-buy' className="link-hover" >
                          Bundle Buy
                        </Link>
                        <Link className="link-hover" to="/p2p">
                          P2P
                        </Link>
                      </PopoverContent>
                    </Popover>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
