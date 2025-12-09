"use client"
import { settingBarStore } from "@/app/hook";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar() {
  let step = settingBarStore((state) => state.step);
  let setPage = settingBarStore((state) => state.setPage);
  return (
    <div className="col-span-1 h-full! text-sm!  rounded-xl border-[#DDDDDD]! border-[0.5px]! bg-white px-5! py-7!">
      <div className="w-full flex-col  flex text-[#686868]">
        <Link href={"#"} onClick={()=>{setPage(1)}} className="w-full mb-3! flex items-center justify-between ">
          {" "}
          
          {step == 1 ? (
            <div className="flex flex-row  px-3! w-full py-2.5! justify-between rounded-xl! items-center! bg-[#F8F8F8]">
              <span className="font-medium! text-[#222222]">Accounts</span>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="flex flex-row  px-3! py-2! items-center!">
              <span className="font-medium!">Accounts</span>
            </div>
          )}
        </Link>

        <Link href={"#"} onClick={()=>{setPage(2)}} className="w-full  mb-3! flex items-center justify-between ">
          {" "}
          
          {step == 2? (
            <div className="flex flex-row  px-3! w-full py-2.5! justify-between rounded-xl! items-center! bg-[#F8F8F8]">
              <span className="font-medium! text-[#222222]">Preferences</span>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="flex flex-row  px-3! py-2! items-center!">
              <span className="font-medium!">Preferences</span>
            </div>
          )}
        </Link>
        <Link href={"#"} onClick={()=>{setPage(3)}} className="w-full mb-3! flex items-center justify-between ">
          {" "}
          
          {step == 3 ? (
            <div className="flex flex-row  px-3! w-full py-2.5! justify-between rounded-xl! items-center! bg-[#F8F8F8]">
              <span className="font-medium! text-[#222222]">Notification</span>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="flex flex-row  px-3! py-2! items-center!">
              <span className="font-medium!">Notification</span>
            </div>
          )}
        </Link>
        <Link href={"#"} onClick={()=>{setPage(4)}} className="w-full mb-3! flex items-center justify-between ">
          {" "}
          
          {step == 4 ? (
            <div className="flex flex-row  px-3! w-full py-2.5! justify-between rounded-xl! items-center! bg-[#F8F8F8]">
              <span className="font-medium! text-[#222222]">Plans & Billings</span>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="flex flex-row  px-3! py-2! items-center!">
              <span className="font-medium!">Plans & Billings</span>
            </div>
          )}
        </Link><Link href={"#"} onClick={()=>{setPage(5)}} className="w-full  flex items-center justify-between ">
          {" "}
          
          {step == 5 ? (
            <div className="flex flex-row  px-3! w-full py-2.5! justify-between rounded-xl! items-center! bg-[#F8F8F8]">
              <span className="font-medium! text-[#222222]">Security</span>
              <IoIosArrowForward />
            </div>
          ) : (
            <div className="flex flex-row px-3! py-2! items-center!">
              <span className="font-medium!">Security</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
