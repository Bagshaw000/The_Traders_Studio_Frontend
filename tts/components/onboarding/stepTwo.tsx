"use client"
import { onboardingStore } from "@/app/hook";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect } from "react";



export default function StepTwo() {
    let { setTraderType,  } = onboardingStore();
    
  return (
    <div className="w-full h-fit">
      <RadioGroup defaultChecked = {true}  onValueChange={(value) =>setTraderType(value)}>
        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Day Trader</p>
            <p className="text-sm!">I open and close trades within the same day</p>
          </div>

          <RadioGroupItem
            value="day"
            id="day"
                className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 "
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!   border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Swing Trader</p>
            <p className="text-sm!">I hold trades for a few days or weeks.</p>
          </div>

          <RadioGroupItem
            value="swing"
            id="swing"
              className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Position Trader</p>
            <p className="text-sm!">I focus on long-term opportunities.</p>
          </div>

          <RadioGroupItem
            value="position"
            id="position"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]! border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold">Algorithmic/Automated</p>
            <p className="text-sm!">I use bots or scripts to execute trades.</p>
          </div>

          <RadioGroupItem
            value="algo"
            id="algo"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]! data-[state=checked]:[&>svg]:text-white!  appearance-none"
          />
        </div>
      </RadioGroup>
    </div>
  );
}
