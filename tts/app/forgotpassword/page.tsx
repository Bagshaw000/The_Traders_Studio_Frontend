"use client";
import RecoverPassword from "@/components/auth/recoverpassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
