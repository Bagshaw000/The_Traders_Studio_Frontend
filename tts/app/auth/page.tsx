"use client";
import StepOne from "@/components/auth/stepOne";
import { useState } from "react";
import { authSetupStore } from "../hook";
import StepTwo from "@/components/auth/stepTwo";
import StepThree from "@/components/auth/stepThree";
import Login from "@/components/auth/login";

export default function Page() {
  
  const {step} = authSetupStore()

  return (
    <div className="">
      {step == 0 ? (
        <StepOne/>
      ) : step == 1 ? (
        <StepTwo/>
      ) : step == 2 ? (
        <StepThree/>
      ) : (
        <Login/>
      )}
    </div>
  );
}
