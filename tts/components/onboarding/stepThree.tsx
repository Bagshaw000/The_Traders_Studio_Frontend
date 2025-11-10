"use client"
import { onboardingStore } from "@/app/hook";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect } from "react";



export default function StepThree() {
    let { setGoal } = onboardingStore();
    
  return (
    <div className="w-full h-fit">
      <RadioGroup defaultChecked = {true} defaultValue="performance" onValueChange={(value) =>setGoal(value)}>
        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold text-[#222222]!">Track my performance</p>
            <p className="text-sm! text-[#414141]! ">I want to understand my trading results better.</p>
          </div>

          <RadioGroupItem
            value="performance"
            id="performance"
                className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]! 
                 data-[state=checked]:bg-[#3A53C6]!  data-[state=checked]:text-[#384A80]! "
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!   border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold text-[#222222]!" >Improve my strategy</p>
            <p className="text-sm! text-[#414141]!">I want to learn from my trades and make smarter decisions.</p>
          </div>

          <RadioGroupItem
            value="strategy"
            id="strategy"
              className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]!  border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold text-[#222222]!">Grow consistently</p>
            <p className="text-sm text-[#414141]!">I’m focused on steady, sustainable returns.</p>
          </div>

          <RadioGroupItem
            value="growth"
            id="growth"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!"
          />
        </div>

        <div className="flex flex-row justify-between border-[0.5px]! border-[#DDDDDD]! w-[inherit] rounded-lg px-3! py-2!">
          <div className="justify-start text-start">
            <p className="font-semibold text-[#222222]!">Stay organized</p>
            <p className="text-sm! text-[#414141]!">I want a clean system to manage my trades and journals.</p>
          </div>

          <RadioGroupItem
            value="organize"
            id="organize"
            className="border! border-[#384A80]! w-4 h-4 rounded-full!
                 data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]! data-[state=checked]:[&>svg]:text-white!  appearance-none"
          />
        </div>
      </RadioGroup>
    </div>
  );
}
