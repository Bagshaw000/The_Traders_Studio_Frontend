import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { TfiLink } from "react-icons/tfi";
import Home from "@/public/home.svg";
import Trade from "@/public/coins-dollar.svg";
import Image from "next/image";

export default function NoTrades() {
  return (
    <div className="flex flex-col h-[70vh]!   items-center">
      <div className="text-center my-auto!  ">
        <div className=" mx-auto! w-[inherit]! mb-5! flex justify-center items-center!">
          <Image
            src={Trade}
            alt=""
            className="mr-2! scale-150 filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(10%)]"
          />
        </div>
        <p className="text-2xl font-semibold text-[#222222] ">No trades yet</p>
        <p className="text-[#686868] font-urbanist! text-sm! font-normal mb-4!">
          Connect your trading account or manually add trades to see to view
          your trade analytics{" "}
        </p>
        <div className="flex flex-row justify-between items-center  w-fit mx-auto!">
          <Link
            href={"/dashboard/trades/portfolio"}
            className="bg-[#3A53C6]! mr-4! flex items-center text-white! px-5! py-3! rounded-md! text-sm!"
          >
            Connect account <TfiLink className="ml-2!" />
          </Link>
          <Link
            href={""}
            className="px-5! py-3! border-[0.5px]! flex items-center text-[#3A53C6]! text-sm! border-[#DDDDDD]! rounded-md!"
          >
            {" "}
            Add trade <IoAdd className="ml-2!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
