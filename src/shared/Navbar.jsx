import Image from "./Image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";


import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <div className="bg-gray-primary flex justify-between items-center py-3 px-5">
      <div className="flex items-center gap-x-4">
        <Link to='/'><Image
          src="https://pr.zexprwire.com/images_data/880564407.jpg"
          alt="logo"
          width={180}
        /></Link>
        <NavigationMenu className="pl-6 lg:block hidden">
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-x-6 text-[1rem] text-slate-400">
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
      <div className="text-white text-base lg:block hidden">
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Link to="/signup">Signup</Link>
        </Button>
        <Button variant="none">
          <Link to="/signin">Signin</Link>
        </Button>
      </div>
      <NavbarMobile/>
    </div>
  );
};

export default Navbar;
