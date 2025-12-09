"use client";
import NoTrades from "@/components/trades/noTrades";
import Trades from "@/components/journal/trades";
import { useState } from "react";


export default function Page() {
  const [trade, setTrade] = useState<boolean>(true);
  // Get user Data and check if the onboarding has happened
  return (
    trade == false ? <NoTrades page={"journal"}/> : <Trades/>
  );
}
