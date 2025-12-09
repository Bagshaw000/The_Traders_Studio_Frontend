"use client";
import { onboardingStore } from "@/app/hook";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect } from "react";

export default function StepOne() {
  let { setTradingPeriod } = onboardingStore();

  return (
    <div className="w-full h-fit">
      <RadioGroup
        defaultChecked={true}
        onValueChange={(value) => setTradingPeriod(value)}
      >
        <div className="flex flex-row justify-between border-[0.5px]! border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">I'm just getting started</p>
            <p className="text-sm!">Less than a year</p>
          </div>

          <RadioGroupItem
            value="1"
            id="1"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Finding my rhythm</p>
            <p className="text-sm!">1-3 years</p>
          </div>

          <RadioGroupItem
            value="1-3"
            id="1-3"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Trading with Confidence</p>
            <p className="text-sm!">3-5 years</p>
          </div>

          <RadioGroupItem
            value="3-5"
            id="3-5"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]! border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Seasoned Market Pro</p>
            <p className="text-sm!">5+ years</p>
          </div>

          <RadioGroupItem
            value="5+"
            id="5+"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>
      </RadioGroup>
    </div>
  );
}
