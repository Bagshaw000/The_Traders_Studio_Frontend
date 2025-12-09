import { onboardingStore } from "@/app/hook";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Step() {
  let { setStep, step, tradingPeriod, platform, goal, traderType, reset } =
    onboardingStore();

  const handleSubmit = () => {
    const newStep = step + 1;

    setStep(newStep);

    if (step == 4) {
      if (
        tradingPeriod == "" ||
        platform == "" ||
        goal == "" ||
        traderType == ""
      ) {
        // Alert they should choose all
      } else {
        
        redirect("/dashboard");
        reset();
      }
    }
  };

  const handleBack = () => {
    const newStep = step - 1;
    setStep(newStep);
  };

  // useEffect(()=>{
  //   console.log(onboardingStore())
  // })
  return (
    <div className=" w-[70%] h-[80%] bg-white! opacity-[96.47%]!   m-auto! flex justify-center rounded-3xl">
      <div className="m-auto! w-[40%] max-w-[500px] h-[70%] p-auto! text-center">
        {step == 1 ? (
          <div>
            <h2 className=" font-semibold! text-2xl!">
              How long have you been trading?
            </h2>
            <p className="text-normal">
              We’d love to understand where you are on your trading journey.
            </p>
          </div>
        ) : step == 2 ? (
          <div>
            <h2 className=" font-semibold! text-2xl!">
              What kind of trader are you?
            </h2>
            <p className="text-normal">
              This helps us tailor your insights and metrics to your trading
              style.
            </p>
          </div>
        ) : (
          <div>
            <h2 className=" font-semibold! text-2xl!">
              What's your main goal right now
            </h2>
            <p className="text-normal">
              We’ll focus your dashboard around what matters most to you.
            </p>
          </div>
        )}

        <div className="flex flex-row justify-between items-center mt-2!">
          <div className="flex flex-row">
            {Array.from({ length: 4 }, (_, i) =>
              step == i + 1 ? (
                <div
                  className="h-2! w-5! rounded-2xl bg-[#3A53C6]! mr-1!"
                  key={i}
                ></div>
              ) : (
                <div
                  className="h-2! w-2! rounded-2xl bg-[#D9D9D9]! mr-1!"
                  key={i}
                ></div>
              )
            )}
          </div>
          <div className="  ">
            <span className="text-[#3A53C6] rounded-full font-semibold! text-[10px]! px-2! py-0.5! bg-[#EFEFEF]">
              STEP {step} OF 4
            </span>
          </div>
        </div>
        <div className="w-full h-fit my-6! ">
          {step == 1 ? (
            <StepOne></StepOne>
          ) : step == 2 ? (
            <StepTwo></StepTwo>
          ) : step == 3 ? (
            <StepThree></StepThree>
          ) : (
            <StepFour></StepFour>
          )}
        </div>

        {step == 1 ? (
          <div className="w-full">
            <Button
              onClick={handleSubmit}
              className="w-[inherit] bg-[#3A53C6]! text-white! rounded-sm!"
            >
              Continue
            </Button>
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <div className="flex flex-row w-[70%] justify-between">
              <Button
                onClick={handleBack}
                className="border! border-[#DDDDDD]!  text-sm!  text-[#3A53C6]! font-semibold! px-5! py-5! rounded-sm! w-[47%]"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className=" bg-[#3A53C6]! text-sm! font-semibold! text-white! px-5! py-5!  w-[47%] rounded-sm!"
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
