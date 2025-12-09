"use client";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import Notificaiton from "@/public/notification.svg";
import Image from "next/image";
import { sideBarStore } from "@/app/hook";
import { useRouter } from "next/navigation";

export default function MenuBar() {
  let { step } = sideBarStore();
  const [not, setNot] = useState<boolean>(false);
  const [wordAfterSecondSlash, setWordAfterSecondSlash] = useState("");

  // useEffect(() => {
  
  //   const updateSegment = () => {
  //     const pathname = window.location.pathname; // e.g., "/dashboard/trades/details"
  //     const parts = pathname.split("/");
  //     if (parts[2] == "trades") {
  //       setWordAfterSecondSlash("Trades");
  //     } else if (parts[2] == "journal") {
  //       setWordAfterSecondSlash("Journal");
  //     } else if (parts[2] == "insight") {
  //       setWordAfterSecondSlash("Insight");
  //     } else if (parts[2] == "setting") {
  //       setWordAfterSecondSlash("Settings");
  //     } else if (parts[2] == "help") {
  //       setWordAfterSecondSlash("Help");
  //     } else {
  //       setWordAfterSecondSlash("Dashboard");
  //     }
  //   };

  //   // Run on first load
  //   updateSegment();

  //   // Listen to back/forward navigation
  //   window.addEventListener("popstate", updateSegment);

  //   // return () => {
  //   //   window.removeEventListener("popstate", updateSegment);
  //   // };

  //   // setWordAfterSecondSlash(parts[2] || ""); // safely get 3rd segment
  // }, []);

  return (
    <div className="bg-white! sticky! h-20 mb-7! border-[0.5px]! border-[#DDDDDD]! px-5! py-4! rounded-2xl w-[inherit]! flex flex-row justify-between items-center">
      <div className="text-2xl! font-semibold text-[#222222]!">
        {step == 1 ? (
          <>Dashboard</>
        ) : step == 2 ? (
          <>Trades</>
        ) : step == 3 ? (
          <>Journal</>
        ) : step == 4 ? (
          <>Insight</>
        ) : step == 5 ? (
          <> Settings</>
        ) : (
          <> Help</>
        )}
      </div>
      <div className="flex flex-row  items-center">
        <Link
          href={""}
          className="px-6! py-1! rounded-lg! text-white! text-sm! mr-3! justify-between flex flex-row bg-[#3A53C6]!"
        >
          <div className=" my-auto! text-center  flex justify-between items-center">
            <span className="mr-2!">Add </span>{" "}
            <span className="text-xl">+</span>
          </div>
        </Link>

        <div className="w-10! h-10! mr-3! rounded-full!  bg-[#F8F8F8]! flex items-center">
          {/* If message show the full icon */}
          {not == true ? (
            <Link href={""} className="mx-auto! my-auto!">
              <FontAwesomeIcon
                icon={faBell}
                style={{ color: "#3a53c6" }}
                className="mx-auto! my-auto!"
              />
            </Link>
          ) : (
            <Link href={""} className="mx-auto! my-auto!">
              <Image src={Notificaiton} alt="" />{" "}
            </Link>
          )}
        </div>
        <div className="w-fit! bg-[#F8F8F8] flex flex-row px-3! py-2! rounded-2xl">
          <div className="w-6! h-6! rounded-full text-center! text-white! bg-[#3A53C6] mr-2!">
            B
          </div>
          <span className="text-sm! my-auto!"> Username</span>
        </div>
      </div>
    </div>
  );
}
