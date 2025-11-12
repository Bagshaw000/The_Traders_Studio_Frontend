"use client";
import Image from "next/image";
import logo from "@/public/logoblue.svg";
import sidebar from "@/public/sidebar.svg";
import { Button } from "./button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Star } from "lucide-react";
import mt5 from "@/public/pngwing.com.png";
import ctrader from "@/public/ctraderSquare.png";
import matchtrader from "@/public/matcht.png";
import Link from "next/link";
import Active from "@/public/ActiveIcon.svg";
import { sideBarStore } from "@/app/hook";
import Home from "@/public/home.svg";
import Trade from "@/public/coins-dollar.svg";
import Journal from "@/public/note.svg";
import Rocket from "@/public/Rocket.svg";
import Insight from "@/public/Insight.svg"
import Settings from "@/public/setting.svg"
import Help from "@/public/headphones.svg"

export default function SideBar() {
  const [sidebarState, setSidebarState] = useState<boolean>(true);
  let { setPage, step } = sideBarStore();

  const changeSideBarState = () => {
    setSidebarState(!sidebarState);
  };
  const handleSideBarNavigate = (pageIndex: number) => {
    console.log(pageIndex);
    setPage(pageIndex);
  };
  return sidebarState == true ? (
    <div className="w-74! h-[95vh] relative  bg-white! border-[0.5px]! border-[#DDDDDD]! rounded-lg!">
      <div className=" flex flex-row justify-between items-center mx-5! my-4!">
        <Image src={logo} alt={""} />
        <Button onClick={changeSideBarState}>
          {" "}
          <Image src={sidebar} alt="" />
        </Button>
      </div>

      <div className="mx-5!">
        <Select>
          <SelectTrigger className="w-full rounded-sm! border-[0.5px]! bg-[#FCFCFC]! px-3! py-5! border-[#DDDDDD]! ">
            <SelectValue placeholder="Default Account" className="text-sm!" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className=" bg-[#F5F5F5] px-2! py-3!">
              <SelectLabel className="text-sm!">
                Select trading account
              </SelectLabel>
              <SelectGroup className="bg-white! px-2! py-3! rounded-sm! mt-3!">
                <div className="flex flex-row justify-between">
                  <SelectLabel>Accounts</SelectLabel>{" "}
                  <span className="text-sm!">01</span>
                </div>

                <SelectItem
                  value="mt5"
                  className="h-9! text-xs! text-[#414141]!"
                >
                  <div className="flex flex-row h-[inherit]! items-center px-1! ">
                    <div
                      className=" w-8! h-8!  bg-cover bg-center mr-2!"
                      style={{ backgroundImage: `url(${mt5.src})` }}
                    ></div>
                    <span className="">Account 1</span>
                  </div>
                </SelectItem>

                <Button className="w-full  border-[#DDDDDD]! border-[0.5px]! rounded-lg! mt-5!">
                  <div className="text-[#3A53C6]! text-sm!">
                    <span>Add account +</span>
                  </div>
                </Button>
              </SelectGroup>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-7! mr-5! flex flex-col max-h-[170px] h-[40%]! justify-between">
        <Link
          href={"/dashboard"}
          className="flex flex-row"
          onClick={() => {
            handleSideBarNavigate(1);
          }}
        >
          {step == 1 ? <Image src={Active} alt="" /> : <></>}
          {step == 1 ? (
            <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
              <Image src={Home} alt="" className="mr-2! " />
              <span className="font-medium! text-[#3A53C6]">Dashboard</span>
            </div>
          ) : (
            <div className="flex flex-row ml-5! px-3! py-2! items-center!">
              <Image
                src={Home}
                alt=""
                className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
              />
              <span className="font-medium! text-[#222222]!">Dashboard</span>
            </div>
          )}
        </Link>

        <Link
          href={"/dashboard/trades"}
          className="flex flex-row mt-1!"
          onClick={() => {
            handleSideBarNavigate(2);
          }}
        >
          {step == 2 ? <Image src={Active} alt="" /> : <></>}
          {step == 2 ? (
            <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
              <Image src={Trade} alt="" className="mr-2! " />
              <span className="font-medium! text-[#3A53C6]">Trades</span>
            </div>
          ) : (
            <div className="flex flex-row ml-5! px-3! py-2! items-center!">
              <Image
                src={Trade}
                alt=""
                className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
              />
              <span className="font-medium! text-[#222222]!">Trades</span>
            </div>
          )}
        </Link>

        <Link
          href={""}
          className="flex flex-row mt-1!"
          onClick={() => {
            handleSideBarNavigate(3);
          }}
        >
          {step == 3 ? <Image src={Active} alt="" /> : <></>}
          {step == 3 ? (
            <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
              <Image src={Journal} alt="" className="mr-2! " />
              <span className="font-medium! text-[#3A53C6]">Journal</span>
            </div>
          ) : (
            <div className="flex flex-row ml-5! px-3! py-2! items-center!">
              <Image
                src={Journal}
                alt=""
                className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
              />
              <span className="font-medium! text-[#222222]!">Journal</span>
            </div>
          )}
        </Link>

        <Link
          href={""}
          className="flex flex-row mt-1!"
          onClick={() => {
            handleSideBarNavigate(4);
          }}
        >
          {step == 4 ? <Image src={Active} alt="" /> : <></>}
          {step == 4 ? (
            <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
              <Image src={Insight} alt="" className="mr-2! " />
              <span className="font-medium! text-[#3A53C6]">Insights</span>
            </div>
          ) : (
            <div className="flex flex-row ml-5! px-3! py-2! items-center!">
              <Image
                src={Insight}
                alt=""
                className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
              />
              <span className="font-medium! text-[#222222]!">Insights</span>
            </div>
          )}
        </Link>
      </div>

      <div className=" absolute bottom-5! w-full ">
        <div className="mr-5! w-full max-h-[70px] ">
          <Link
            href={""}
            className="flex flex-row mt-1! mr-5! "
            onClick={() => {
              handleSideBarNavigate(5);
            }}
          >
            {step == 5 ? <Image src={Active} alt="" className="hidden!" /> : <></>}
            {step == 5 ? (
              <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
                <Image src={Settings} alt="" className="mr-2! " />
                <span className="font-medium! text-[#3A53C6]">Settings</span>
              </div>
            ) : (
              <div className="flex flex-row ml-5! px-3! py-2! items-center!">
                <Image
                  src={Settings}
                  alt=""
                  className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
                />
                <span className="font-medium!">Settings</span>
              </div>
            )}
          </Link>

          <Link
            href={""}
            className="flex flex-row mt-1! mr-5! "
            onClick={() => {
              handleSideBarNavigate(6);
            }}
          >
            {step == 6 ? <Image src={Active} alt="" className="hidden!" /> : <></>}
            {step == 6 ? (
              <div className="flex flex-row ml-5! px-3! w-full py-2.5! rounded-xl! items-center! bg-[#F3F5FF]">
                <Image src={Help} alt="" className="mr-2! " />
                <span className="font-medium! text-[#3A53C6]">
                  Help & Support
                </span>
              </div>
            ) : (
              <div className="flex flex-row ml-5! px-3! py-2! items-center!">
                <Image
                  src={Help}
                  alt=""
                  className="mr-2! filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)]"
                />
                <span className="font-medium!">Help & Support</span>
              </div>
            )}
          </Link>
        </div>
        <div className="px-5! w-full mt-8! ">
          <Link href="" className="  ">
            <div className="w-full! rounded-xl! px-3! py-2! h-[170px]! flex flex-col! justify-between border-[#DDDDDD]! border-[0.5px]!">
              <div>
                <span className="text-[#222222] font-medium">
                  Upgrade to{" "}
                  <span className="px-2! py-1! bg-gray-500  bg-linear-65 from-[#3A53C6] to-[#6F119E] rounded-sm text-white">
                    {" "}
                    PRO
                  </span>
                </span>
                <p className="text-sm! mt-2! text-[#686868]">
                  Gain access to advanced analytics, and deeper insights to make
                  confident moves
                </p>
              </div>

              <Button
                className="px-auto! py-5! w-full border-[0.5px]! font-semibold! text-[#414141]! border-[#DDDDDD]! rounded-lg!"
              >
                {" "}
                Get full access <Image src={Rocket} alt=""></Image>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className=" mx-5! my-4!">
      {" "}
      <Button onClick={changeSideBarState}>
        {" "}
        <Image src={sidebar} alt="" />
      </Button>
    </div>
  );
}
