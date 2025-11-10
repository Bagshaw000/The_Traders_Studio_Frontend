"use client";
import Image from "next/image";
import onboard from "../../public/onboard1.svg";
import { Button } from "../ui/button";
import { onboardingStore } from "@/app/hook";

export default function Intro() {

  let { setStep } = onboardingStore();

  const handleSubmit = () => {
 
    setStep(1)
    
  }
  return (
    <div className="w-[50%] m-auto! rounded-lg max-w-2xl bg-white! p-4! h-fit!  ">
      <Image src={onboard} loading="eager" alt={""} className="  scale-100 mb-5!" />

      <h2 className="font-bold! text-3xl! mb-3!">
        Lets get your dashboard ready
      </h2>
      <p className="w-[70%] mb-3! text-xs!">
        We’ll personalize your trading experience in a few steps so everything
        you see reflects your goals and journey.{" "}
      </p>
      <div className=" w-full flex flex-row justify-end">
        <Button onClick={handleSubmit} className="bg-[#3A53C6]! text-white! font-semibold! px-6! py-2! rounded-sm!   mx-auto right-0!">
          {" "}
          Start setup
        </Button>
      </div>
    </div>
  );
}
