"use client";
import NoTrades from "@/components/trades/noTrades";
import Trades from "@/components/trades/trades";
import { useState } from "react";
import mt5 from "@/public/mt55.svg";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function Page() {
  const [trade, setTrade] = useState<boolean>(true);
  // Get user Data and check if the onboarding has happened
  return (
    <div>
      {/* Title */}
      <div className="bg-white  flex flex-row justify-between items-center px-5! py-4! rounded-md border-[0.5px]! border-[#DDDDDD]!">
        {" "}
        <div>
          <span className="text-xs! font-urbanist text-[#686868]">Symbol</span>{" "}
          <div className="flex flex-row">
            <Image src={mt5} alt={""} className="mr-2!"></Image>
            <div className="flex flex-col items-start justify-between">
              <p className="font-semibold">EURUSD</p>
              <div className="px-2! text-xs py-1! text-[#30A12E] font-medium! bg-[#ECFDEB] w-fit h-fit! rounded-md">
                BUY
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  items-start">
          <div className="text-sm mr-3! font-semibold text-right font-urbanist">
            <span className="text-[#222222]"> Closed</span>
            <p className="text-[#B33D2F]"> -33,500.34</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <PiDotsThreeVerticalBold size={25} />
            </AlertDialogTrigger>
            <AlertDialogContent className="px-5! py-7!  sm:max-w-[400px]">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-semibold!">
                  Delete Trade
                </AlertDialogTitle>
                <AlertDialogDescription className="font-urbanist">
                  Are you sure you want to delete this trade. You would not be
                  able to retrieve this trade after deleting it.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="text-sm!">
                <AlertDialogCancel className="px-4! border-[0.5px]! text-[#3A53C6]! border-[#DDDDDD]! rounded-sm!">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="px-4!  text-white! bg-[#B33D2F]! rounded-sm!">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div>
        <div></div>

        <div className=" w-[30%] bg-white px-4! py-4! h-[230px]!">
          <div className="font-urbanist text-xs flex flex-col n ">
            <p className="text-sm text-[#222222]"> Trade snapshot</p>
            <div className="flex flex-row justify-between">
              <span className="text-[#686868]"> Position</span>

              <span>Buy</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[#686868]"> PnL</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between">
              <span className="text-[#686868]"> Duration</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between">
              <span className="text-[#686868]"> Opened at</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between">
              <span className="text-[#686868]"> Closed at</span>

              <span>Buy</span>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
