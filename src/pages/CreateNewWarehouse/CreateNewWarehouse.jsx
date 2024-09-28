

import { Button } from "@/components/ui/button";
import { Download, Printer, RotateCcw, Settings, Share2 } from "lucide-react";
import Content from "./_components/Content";


const CreateNewWarehouse = () => {
    return (
        <>
            <div className="w-full lg:pl-14 mt-3">
                <div className="flex justify-between gap-4 flex-wrap">
                    <h1 className="text-[26px]">Create New Products</h1>
                    <div className="flex gap-3 flex-wrap">
                        <Button size="sm" variant="outline" className="border-green-700 !px-5 text-[12px] rounded-lg ">
                            <Share2 className="mr-2 size-4" />
                            Share
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-700 !px-5 rounded-lg text-[12px] ">
                            <Printer className="mr-2 size-4" />

                            Print
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-700 !px-5 rounded-lg text-[12px]">
                            <Download className="mr-2 size-4" />
                            Export
                        </Button>
                        <Button size="sm" variant="outline" className="border-green-700 !px-5 rounded-lg text-[12px]">
                            <Settings className="mr-2 size-4" />
                            Settings
                        </Button>
                        <Button size="sm" className="bg-green-700 hover:bg-green-800 !px-5 rounded-lg text-[12px]">
                            <RotateCcw className="mr-2 size-4" />
                            Refresh
                        </Button>
                    </div>
                </div>

                <Content />
            </div>
           
        </>


    );
};

export default CreateNewWarehouse;