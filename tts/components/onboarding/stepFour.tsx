import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import mt5 from "@/public/pngwing.com.png";
import ctrader from "@/public/ctraderSquare.png"
import matchtrader from "@/public/matcht.png"
import Image from "next/image";
import { onboardingStore } from "@/app/hook";

export default function StepFour() {

  let { setPlatform } = onboardingStore();
  return (
    <div className="flex flex-col items-start">
      <p className="ml-0! font-medium text-sm!">Broker </p>
      <Select onValueChange={(value) =>setPlatform(value)}>
        <SelectTrigger className="w-full border! border-[#DDDDDD]! px-2! py-2! text-[#BDBDBD]! text-xs! rounded-md!">
          <SelectValue placeholder="Select your trading platform" />
        </SelectTrigger>
        <SelectContent className="px-2! py-4! mt-2!">
          <SelectItem value="mt5" className="h-9! text-xs! text-[#414141]!">
            <div className="flex flex-row h-[inherit]! items-center px-1! ">
              <div
                className=" w-8! h-8!  bg-cover bg-center mr-2!"
                style={{ backgroundImage: `url(${mt5.src})` }}
              ></div>
              <span className="">MetaTrader 5 (MT5)</span>
            </div>
          </SelectItem>
           <SelectItem value="ctrader" className="h-9! text-xs! text-[#414141]!">
            <div className="flex flex-row h-[inherit]! items-center px-1! ">
              <div
                className=" w-8! h-8!  bg-cover bg-center mr-2!"
                style={{ backgroundImage: `url(${ctrader.src})` }}
              ></div>
              <span className="">cTrader </span>
            </div>
          </SelectItem>
           <SelectItem value="matchtrader" className="h-9! text-xs! text-[#414141]!">
            <div className="flex flex-row h-[inherit]! items-center px-1! ">
              <div
                className=" w-8! h-8!  bg-cover bg-center mr-2!"
                style={{ backgroundImage: `url(${matchtrader.src})` }}
              ></div>
              <span className="">match trader</span>
            </div>
          </SelectItem>
       
        </SelectContent>
      </Select>
    </div>
  );
}
