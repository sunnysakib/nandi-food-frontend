import { Card } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FileDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FormCustomField from "./FormCustomField";

const Content = () => {
    return (
        <Card className="p-7 mt-6">
            <div className="flex justify-between items-center flex-wrap ">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Inventory Management</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/warehouses">Warehouses
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage  className="text-green-700">Create New Warehouse</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>
                <div className="flex gap-3 flex-wrap">
                        <Button size="sm" variant="outline" className="border-green-800 !px-5 text-[12px] rounded-lg ">
                            <FileDown className="mr-2 size-4" />
                            Download excel
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-800 !px-5 rounded-lg text-[12px] ">
                            <FileText className="mr-2 size-4"/>
                            Download excel
                        </Button>
                        
                    </div>
            </div>
            <Separator className="my-6" />

            <div>
                <FormCustomField/>
            </div>
        </Card>
    );
};

export default Content;