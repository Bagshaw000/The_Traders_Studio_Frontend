import { AppSidebar } from "@/components/app-sidebar";
import MenuBar from "@/components/ui/menubar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SideBar from "@/components/ui/sidebar1";
import { steps } from "motion";
import { NextStepProvider, NextStep } from "nextstepjs";
import { Tour } from "nextstepjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps: Tour[] = [
    {
      tour: "mainTour",
      steps: [
        {
          title: "Welcome",
          content: "Let's get started with NextStep!",
          selector: "#step1",
          icon: undefined,
        },
        // ... more steps
      ],
    },
  ];
  return (
    <div className="flex flex-row  gap-4 p-4! relative w-full!">
      <SideBar ></SideBar>
      <div className=" relative ml-80! w-full! ">
        <MenuBar/>
        <main className="overflow-auto! w-full!">{children}</main>
      </div>
    </div>
  );
}
