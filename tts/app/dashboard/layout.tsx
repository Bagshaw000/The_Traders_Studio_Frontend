import MenuBar from "@/components/ui/menubar";
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
    <div className="  grid-flow-col grid-cols-6 grid-rows-4 grid gap-6! py-4! px-6! relative h-screen">
      <SideBar></SideBar>
      <div className=" relative   col-span-5 row-span-4! overflow-y-auto! ">
        <MenuBar />
        <main className="  h-[calc(93vh-3.75rem)]">{children}</main>
      </div>
    </div>
  );
}
