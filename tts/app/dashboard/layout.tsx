import { steps } from 'motion';
import { NextStepProvider, NextStep } from 'nextstepjs';
import { Tour } from 'nextstepjs';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const steps : Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
          title: "Welcome",
          content: "Let's get started with NextStep!",
          selector: "#step1",
          icon: undefined
      },
      // ... more steps
    ]
  }
];
return <NextStepProvider> <NextStep steps={steps}>  <main>{children}</main> </NextStep> </NextStepProvider>
}