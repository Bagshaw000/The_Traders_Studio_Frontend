"use client";
import MenuTab from "@/components/journal/menuTab";
import NoTrades from "@/components/trades/noTrades";
import Trades from "@/components/journal/trades";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { redirect } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Insight from "@/components/insight/insight";

export default function Page() {
  const [trade, setTrade] = useState<boolean>(true);
  // Get user Data and check if the onboarding has happened
  return (
    trade == false ? <NoTrades page="insight"/> : <Insight/>
  );
}
