"use client";
import RecoverPassword from "@/components/auth/recoverpassword";
import { Suspense } from "react";


export default function Page() {
  return (
    <div className=" w-[25%] mt-[10%]! mx-auto!">
      <Suspense>
        <RecoverPassword />
      </Suspense>
    </div>
  );
}
