"use client"
import Intro from "@/components/onboarding/intro";
import { onboardingStore } from "../hook";
import Step from "@/components/onboarding/step";

export default function Page() {
  // Get user Data and check if the onboarding has happened

   let { step } = onboardingStore();
  return (
   
      <div className="w-full h-screen  flex flex-row justify-center">
        {step == 0 ?<Intro />: <Step/>}
        
      </div>

  );
}
