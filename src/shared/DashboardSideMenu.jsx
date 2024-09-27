import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const DashboardSideMenu = () => {
    return (
        <div className="lg:block w-[17rem] hidden ">
            <Link to="/" className="">
                <h3 className="bg-white rounded-r-full text-[#186A39]  text-base font-semibold py-2 pl-7 ">Dashboard</h3>
            </Link>
            <div className="mt-6">
                <p className="menu-title pl-4 ">Inventory Management</p>
                <div className="mt-2">
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="submenu-title">Warehouses</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">Warehouse List</Link>
                                    </li>
                                    <li> <Link to="/create-new-warehouse">Create New Warehouse</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Warehouse Details</Link>
                                    </li>

                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="submenu-title">Products</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">Products</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Products List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New Product</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Product Details</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Price List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Add New Price List</Link>
                                    </li>

                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div className="mt-6">
                <p className="menu-title pl-4 ">Inventory Processing</p>
                <div className="mt-2">
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="submenu-title">Goods Received Notes (GRN)</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">GRN List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New GRN</Link>
                                    </li>
                                    <li> <Link to="/warehouses">GRN Details</Link>
                                    </li>

                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="submenu-title">Goods Transfer Notes (GTN)</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">GTN List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New GTN</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New Product</Link>
                                    </li>
                                    <li> <Link to="/warehouses">GRN Details</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="submenu-title">Damaged Goods Note (DGN)</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">DGN List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New DGN</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New Product</Link>
                                    </li>
                                    <li> <Link to="/warehouses">DGN Details</Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" className="hover:text-[#186A39] mb-1" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="submenu-title">Production Orders (PRD)</AccordionTrigger>
                            <AccordionContent>
                                <ul className="submenu-title list-disc list-inside pl-5 flex flex-col gap-y-3 text-[#484848]">

                                    <li> <Link to="/warehouses">PRD List</Link>
                                    </li>
                                    <li> <Link to="/warehouses">Create New PRD Order</Link>
                                    </li>
                                    <li> <Link to="/warehouses">PRD Details</Link>
                                    </li>
                                    
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default DashboardSideMenu;