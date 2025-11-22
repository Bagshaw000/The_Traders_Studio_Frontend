import { CiCircleInfo } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { TfiLink } from "react-icons/tfi";
import { IoAdd } from "react-icons/io5";

export default function NoAccount() {
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
  return (
    <div>
      <div className="font-urbanist! flex flex-row justify-between min-h-[120px] mb-6! max-h-[140px]! ">
        <div className="flex flex-col w-[32.5%]! h bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <span className="text-sm! text-[#686868]">
            Portfolio balance
          </span>{" "}
          <span className="text-4xl! mt-4! font-semibold ">0</span>
        </div>
        <div className="flex flex-col w-[32.5%]!  bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <div className="flex items-center">
            {" "}
            <span className="text-sm! mr-1! text-[#686868]">
              Realized PnL
            </span>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>{" "}
          <span className="text-4xl! mt-4! font-semibold">0</span>
        </div>
        <div className="flex flex-col w-[32.5%]!   bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <div className="flex items-center">
            {" "}
            <span className="text-sm! mr-1! text-[#686868]">
              Unrealized PnL
            </span>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>{" "}
          <span className=" text-4xl! mt-4! font-semibold">0</span>
        </div>
      </div>
      <div className="flex font-urbanist! flex-row justify-between min-h-[120px] max-h-[140px]! mb-10! ">
        <div className="flex flex-row w-[32.5%]! justify-between   bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <div className="flex  flex-col justify-between">
            <div className="flex items-center">
              {" "}
              <span className="text-sm! mr-1! text-[#686868]">
                Win rate
              </span>{" "}
              <Tooltip>
                <TooltipTrigger className="bg-white!">
                  <CiCircleInfo style={{ color: "#686868" }} />
                </TooltipTrigger>
                <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                  <p className=" text-[#222222]!">Add to library</p>
                </TooltipContent>
              </Tooltip>
            </div>{" "}
            <span className=" text-4xl! mt-4! font-semibold">0</span>
          </div>
          <div className="w-[70%]! h-[inherit]! ">
            <ChartContainer
              config={chartConfig}
              className="aspect w-full! max-w-[250px]  ml-auto! "
            >
              <RadialBarChart
                data={chartData}
                endAngle={180}
                innerRadius={80}
                outerRadius={110}
                className=" w-[70%]!   ml-auto! "
              >
                <ChartTooltip
                  cursor={true}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="end">
                            <tspan
                              x={(viewBox.cx || 0) - 75}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-foreground text-lg "
                            >
                              0
                            </tspan>
                            <tspan
                              x={(viewBox.cx || 0) + 85}
                              y={(viewBox.cy || 0) + 20}
                              className="fill-muted-foreground text-lg"
                            >
                              0
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="desktop"
                  stackId="a"
                  cornerRadius={5}
                  fill="#D7DEFC"
                  className="stroke-transparent stroke-2 "
                />
                <RadialBar
                  dataKey="mobile"
                  fill="#3A53C6"
                  stackId="a"
                  cornerRadius={5}
                  className="stroke-transparent stroke-2 bg-[#D9D9D9]!"
                />
              </RadialBarChart>
            </ChartContainer>
          </div>
        </div>
        <div className="flex flex-col w-[32.5%]!  bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <div className="flex items-center">
            {" "}
            <span className="text-sm! mr-1! text-[#686868]">
              Total trades
            </span>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>{" "}
          <span className="text-4xl! mt-4! font-semibold">0</span>
        </div>
        <div className="flex flex-col w-[32.5%]!  bg-white! border-[0.5px]! border-[#DDDDDD]!  rounded-lg! px-5! pt-5! pb-10!">
          {" "}
          <div className="flex items-center">
            {" "}
            <span className="text-sm! mr-1! text-[#686868]">
              Profit factor
            </span>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>{" "}
          <span className=" text-4xl! mt-4! font-semibold">0</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold text-[#222222] ">No trades yet</p>
        <p className="text-[#686868] font-urbanist! text-sm! font-normal mb-4!">
          Connect your trading account or manually add trades to see to view
          your trade analytics{" "}
        </p>
        <div className="flex flex-row justify-between items-center  w-fit mx-auto!">
          <Link
            href={""}
            className="bg-[#3A53C6]! mr-4! flex items-center text-white! px-5! py-3! rounded-md! text-sm!"
          >
            Connect account <TfiLink className="ml-2!" />
          </Link>
          <Link
            href={""}
            className="px-5! py-3! border-[0.5px]! flex items-center text-[#3A53C6]! text-sm! border-[#DDDDDD]! rounded-md!"
          >
            {" "}
            Add trade <IoAdd className="ml-2!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
