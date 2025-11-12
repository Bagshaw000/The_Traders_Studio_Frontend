"use client";
import flow from "@/public/auth/Line.svg";
import ellipse from "@/public/auth/Ellipse 1.svg";
import slide from "@/public/auth/Slide.svg";
import target from "@/public/auth/target.svg";
import slider from "@/public/auth/Slider.svg";
import logo from "@/public/logo.svg"

import land from "@/public/auth/land.png";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <div className="flex flex-row w-screen justify-between h-screen items-center p-7!">
          <div  style={{ backgroundImage: `url(${land.src})` }}  className=" w-[45%] h-full bg-center bg-cover  rounded-3xl relative z-0 ">
            <Image
              src={logo}
              alt={""}
              className="absolute top-[3%] left-[3%] scale-80"
            />
            {/* <div className="absolute h-full z-1 w-full">
              <Image
                src={ellipse}
                alt={""}
                className="absolute top-[-13%] left-[5%] bg-radial scale-75"
              />
              <Image
                src={slide}
                alt={""}
                className="absolute scale-80 top-[25%] border  left-[15%] z-20 bg-[#01113f50] rounded-2xl  "
              />
              <Image
                src={target}
                alt={""}
                className="absolute scale-70  left-[27%] top-2.5 z-0"
              />
              <Image
                src={flow}
                alt={""}
                className="absolute opacity-10 top-[30%] w-full"
              />
              <Image
                src={slider}
                alt={""}
                className="absolute top-[54%] scale-90 w-full"
              />
            </div> */}

            <div className="text-center font-primary z-10 text-blue-100 absolute bottom-[7%] w-full ">
              <h1 className="text-5xl!  font-medium! ">
                Trading with clarity and confidence.
              </h1>
              <p className="w-[50%] mx-auto! mt-3!">
                Visualize your performance, understand your patterns, and take
                control of your trading journey.
              </p>
            </div>
          </div>
          <div className="w-[47%] ">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
