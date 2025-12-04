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
    <div className="flex flex-row  gap-5! py-4! px-6! relative w-full! h-full!">
      <SideBar></SideBar>
      <div className=" relative ml-85! w-full! ">
        <MenuBar />
        <main className="overflow-auto! w-full!">{children}</main>
      </div>
    </div>
  );
}
