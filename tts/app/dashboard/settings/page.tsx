"use client";
import NoTrades from "@/components/trades/noTrades";
import Trades from "@/components/journal/trades";
import { useState } from "react";
import { settingBarStore } from "@/app/hook";
import AccountSetting from "@/components/settings/account";
import NotificationSetting from "@/components/settings/notification";
import Billing from "@/components/settings/billings";

export default function Page() {
  let step = settingBarStore((state) => state.step);
  //    let setPage = settingBarStore((state) => state.setPage);
  // Get user Data and check if the onboarding has happened
  return (
    <div className=" h-full! ">
      {step == 1 ? (
        <AccountSetting />
      ) : step == 2 ? (
        <></>
      ) : step == 3 ? (
        <NotificationSetting />
      ) : step == 4 ? (
        <Billing />
      ) :(
        <></>
      )}
    </div>
  );
}
