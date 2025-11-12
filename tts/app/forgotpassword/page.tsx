"use client";
import RecoverPassword from "@/components/auth/recoverpassword";
import { useState } from "react";
import { forgotPasswordStore } from "../hook";

export default function Page() {
  const [pageState, setPageState] = useState<number>(0)
      let { step ,reset, setStep } = forgotPasswordStore();
  return (
    <div className=" w-[25%] mt-[10%]! mx-auto!">
    <RecoverPassword/>
    </div>
  );
}
