"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Image from "next/image";
import Refresh from "@/public/refresh.svg";
import DateFilter from "@/components/ui/datefilter";
import { tradingAccountStore } from "../hook";
import { CiCircleInfo } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import {
  faCircleInfo,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TfiLink } from "react-icons/tfi";
import NoAccount from "@/components/dashboard/noaccount";
import Account from "@/components/dashboard/account";

export default function Page() {
  // Get user Data and check if the onboarding has happened
  let { accounts, setAccounts } = tradingAccountStore();

  const chartData = [{ month: "january", desktop: 100, mobile: 0 }];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const totalVisitors = chartData[0].desktop + chartData[0].mobile;
  return (
    <div className="">
      <div className="flex flex-row justify-between items-end mb-8!">
        <div>
          <span className="text-2xl text-[#222222]! font-semibold ">
            {" "}
            Trading summary
          </span>
          <p className="text-[#686868] text-sm!">
            A quick look at your key results and progress
          </p>
        </div>
        <div className="flex flex-row!">
          <Button className="text-[#01113F]! mr-3! bg-white! font-medium! rounded-lg! px-4! py-3! border-[0.5px]! border-[#DDDDDD]!">
            {" "}
            Refresh <Image src={Refresh} alt="" />
          </Button>
          <DateFilter />
        </div>
      </div>
      {accounts.length > 0 ? (
        <NoAccount/>
      ) : (
        <Account/>
      )}
    </div>
  );
}
