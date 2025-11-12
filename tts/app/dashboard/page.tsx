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

export default function Page() {
  // Get user Data and check if the onboarding has happened
  return (
    <div>
      <div className="flex flex-row justify-between items-end">
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
    </div>
  );
}
