"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { authSetupStore } from "@/app/hook";
import { useState } from "react";
import validator from "validator";

import Link from "next/link";
import PasswordField from "../ui/PasswordField";

export default function StepTwo() {
  let { increase, signUpInfo, step, reset,setStep } = authSetupStore();

  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleSubmit = () => {

    if (isPasswordValid) {

      signUpInfo.password = password;
      increase(1);
    }

    // console.log(isPasswordValid);
    console.log(step)
    console.log(signUpInfo);
    console.log(password);
  };
  const handleLogin = () => {
    setStep(3);
  };
  return (
    <div className="w-[60%] max-w-sm">
      <div className="mb-8!">
        <h1 className="mb-1.5! font-bold! text-2xl! ">Secure your account</h1>
        <div className="flex flex-row text-sm!">
          <p className="font-urbanist"> Already have an account? </p>
          <Link href={""} onClick={handleLogin} className="ml-2! text-[#3A53C6]">
            <span className="text-[#3A53C6]">Sign in </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#3A53C6" }}
            />{" "}
          </Link>
        </div>
      </div>
      <div className="mb-4!">
        <p className="font-semibold! mb-1! text-sm! ">Create Password</p>
        {/* <Input
          placeholder="Enter password"
          type="password"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white! border-[#DDDDDD]! border! px-4! text-[#BDBDBD]! text-xs! rounded-[5px]! w-full"
        /> */}
        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onValidChange={setIsPasswordValid}
        />

        {/* {validEmail == false ? <span className="text-xs! text-red-300">Enter a valid email address</span>:<></>} */}
      </div>

      <div className="mb-4!">
        <Button
          onClick={handleSubmit}
          className="w-full bg-[#3A53C6]! text-sm! font-semibold! text-white!  rounded-[5px]!"
        >
          {" "}
          Continue
        </Button>
      </div>

  
      
      <div className="w-full">
        <p className="text-xs! w-[70%]! text-[#686868]">
          By signing up , you agree to the{" "}
          <u className="mr-1!">
            <Link href={""} className="">
              Terms of Service
            </Link>
          </u>{" "}
          and <br />
          <u>
            <Link href={""} className="">
              Privacy Policy{" "}
            </Link>
          </u>
        </p>
      </div>
    </div>
  );
}
