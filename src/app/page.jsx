import { ColorPicker } from "@/components/color-picker";
import { Gridlayout, Cardlayout } from "@/components/ui/gridLayout";
import Rating from "@/components/ui/rating";
import { Sidebar } from "@/components/ui/sidebar";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="pl-5 pr-6 w-full">
      <div className="pl-3">
        <h1 className="text-2xl font-medium">Headphones</h1>
        <h2 className="text-base">From top brands</h2>
      </div>
      <div className="bg-slate-00 w-full h-fit">
      <Gridlayout className={'grid-cols-10 gap-0 pb-7'}>
        <Cardlayout
            className={ "col-span-10 lg:col-span-7 px-2 py-7"}
          >
            <div className="px-5 py-3 bg-[#FFFFFF] w-full lg:h-80 flex lg:flex-row flex-col gap-10 rounded-xl [box-shadow:0_0_0_2px_rgba(0,0,0,.03),2px_5px_24px_rgba(0,0,0,.15),0_12px_24px_rgba(0,0,0,.05)] transform-gpu  ">
              <div className="relative flex items-center justify-center h-[300px] lg:h-full w-full lg:w-[40%] rounded">
              <Image  
                src="/image.png" // Replace with your image path  
                alt="Beats Studio3 Wireless Headphone"  
                width={300}
                height={300}
                className="p-3"    
                // objectFit="cover" // This ensures the image covers the div without distortion  
              />
              </div>
              <div className="lg:w-[60%] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                <h1 className="text-xl font-medium">Beats Studio3 Wireless Headphone</h1>
                <Rating initialRating={3} /> 
                </div>
                <h1 className="text-xs text-[#5C5C5C]">Ergonomic ear cups with on-ear controls. Up to 22 hours of listening time. Apple W1 chip & Class 1 Wireless Bluetooth.</h1>
                <p className="text-lg font-medium text-[#009393]">Price $349.95</p>
                <ColorPicker/>
              </div>
            </div>
          </Cardlayout>
          <Cardlayout
            className={ "col-span-10 lg:col-span-3"}
          >
          <div className="bg-red-600">
          2
          </div>  
          </Cardlayout>
        </Gridlayout>
      </div>

    </div>
  )
}