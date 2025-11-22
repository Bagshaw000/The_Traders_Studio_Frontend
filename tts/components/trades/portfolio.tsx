"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Csv from "@/public/file-upload.svg";
import Upload from "@/public/upload-05.svg";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import mt5 from "@/public/mt55.svg";
import matchTrade from "@/public/matcht.svg";
import cTrader from "@/public/ctrader.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "recharts";
import Mt5Connect from "./mt5Connect";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

export default function Portfolio() {
  return (
    <div className="w-full">
      <div className="flex-row hidden justify-between mb-6!">
        <div className="flex items-center border-[0.5px]! border-[#ECEAEA]! rounded-sm! bg-white! w-60!">
          <CiSearch className="ml-2! text-[#A9A9A9]" size={30} />
          <Input
            type="search"
            className="bg-white!  ml-1! text-sm! mr-3! focus-visible:ring-0! focus-visible:ring-offset-0!"
            placeholder="Search platform"
          />
        </div>

        <div className="text-[#01113F] flex">
          {" "}
          <Button className="bg-white! px-4! font-medium!  text-sm! rounded-sm! border-[#DDDDDD]! border-[0.5px]!">
            {" "}
            Manual upload <Image src={Upload} alt=""></Image>{" "}
          </Button>{" "}
          <Button className="bg-white! px-4! font-medium!  text-sm! rounded-sm! border-[#DDDDDD]! border-[0.5px]!">
            {" "}
            CSV upload <Image src={Csv} alt=""></Image>
          </Button>
        </div>
      </div>

      <div className=" flex flex-row justify-between">
        <div className="flex flex-col item-start border-[#DDDDDD]! border-[0.5px]! rounded-sm!  bg-white w-[23%] p-4!">
          <div className="mb-3!">
            <Image src={mt5} alt="" className="ml-0!"></Image>
          </div>

          <p className="font-semibold">Meta Trader 5 (MT5)</p>

          <span className="mb-12! font-urbanist text-xs! mt-2! text-[#686868]">
            All trades (live and past)
          </span>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#F8F9F9]! rounded-lg! w-full! text-[#3A53C6]! py-5! text-sm! font-medium!"
                >
                  Connect account
                </Button>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className=" relative! sm:max-w-[700px] min-h-[400px] py-5! px-8! bg-white!"
              >
                <DialogHeader className="h-fit! flex flex-row justify-between">
                  <DialogTitle className="flex text-xl! items-center font-semibold!">
                    <Image className="mr-2!" src={mt5} alt="" /> MetaTrader
                    (MT5)
                  </DialogTitle>
                  <DialogClose asChild className="">
                    <Button className="bg-[#F2F2F2]! rounded-full! p-2! h-fit">
                      <TfiClose
                        style={{ color: "#222222" }}
                        className="scale-75"
                      />
                    </Button>
                  </DialogClose>
                </DialogHeader>
                <div className="mt-0!">
                  <Mt5Connect />
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        <div className="flex flex-col item-start border-[#DDDDDD]! border-[0.5px]! rounded-sm!  bg-white w-[23%] p-4!">
          <div className="mb-3!">
            <Image src={mt5} alt="" className="ml-0!"></Image>
          </div>

          <p className="font-semibold">Meta Trader 4 (MT4)</p>

          <span className="mb-12! font-urbanist text-xs! mt-2! text-[#686868]">
            All trades (live and past)
          </span>

          <Button className="bg-[#F8F9F9]! rounded-lg! w-full! text-[#3A53C6]! py-5! text-sm! font-medium!">
            {" "}
            Connect account
          </Button>
        </div>

        <div className="flex flex-col item-start border-[#DDDDDD]! border-[0.5px]! rounded-sm!  bg-white w-[23%] p-4!">
          <div className="mb-3!">
            <Image src={cTrader} alt="" className="ml-0!"></Image>
          </div>

          <p className="font-semibold">cTrader </p>

          <span className="mb-12! font-urbanist text-xs! mt-2! text-[#686868]">
            All trades (live and past)
          </span>

          <Button className="bg-[#F8F9F9]! rounded-lg! w-full! text-[#3A53C6]! py-5! text-sm! font-medium!">
            {" "}
            Connect account
          </Button>
        </div>

        <div className="flex flex-col item-start border-[#DDDDDD]! border-[0.5px]! rounded-sm!  bg-white w-[23%] p-4!">
          <div className="mb-3!">
            <Image src={matchTrade} alt="" className="ml-0! "></Image>
          </div>

          <p className="font-semibold">Match Trader</p>

          <span className="mb-12! font-urbanist text-xs! mt-2! text-[#686868]">
            All trades (live and past)
          </span>

          <Button className="bg-[#F8F9F9]! rounded-lg! w-full! text-[#3A53C6]! py-5! text-sm! font-medium!">
            {" "}
            Connect account
          </Button>
        </div>
      </div>
    </div>
  );
}
