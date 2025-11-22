"use client";
import { CiCircleInfo } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { TfiLink } from "react-icons/tfi";
import { IoAdd } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function Account() {
  const chartData = [{ month: "january", desktop: 100, mobile: 0 }];
  const chartConfig = {
    balance: {
      label: "Desktop",
      color: "#0075AD",
    },
    pnl: {
      label: "Pnl",
      color: "#4F3CC9",
    },
  } satisfies ChartConfig;

  //   Balance and pnl
  const equityCurveData = [
    { month: "January", balance: 1000, pnl: 80 },
    { month: "February", balance: 305, pnl: 200 },
    { month: "March", balance: 237, pnl: 120 },
    { month: "April", balance: 73, pnl: 190 },
    { month: "May", balance: 209, pnl: 130 },
    { month: "June", balance: 214, pnl: 140 },
  ];
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

      {/* Equity Curve */}
      <div className="bg-white! mb-10!  p-5! border-[#DDDDDD]! border-[0.5px]! rounded-lg!">
        <div className="mb-5!">
          <p className="font-semibold text-lg text-[#222222]!">Equity curve</p>
          <span className="text-[#777777] font-urbanist text-xs">
            Track your balance and equity growth over time
          </span>
        </div>

        <ChartContainer config={chartConfig} className="w-full max-h-[350px]!">
          <AreaChart
            accessibilityLayer
            data={equityCurveData}
            margin={{
              left: -10,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="10 10" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={0}
              tickCount={200}
              interval={30}

              //Calculate the interval to have 6
            />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent className="bg-white! border! border-[#ECEEF0]! px-3! py-4!" />
              }
            />

            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F3CC9" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#4F3CC9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0075AD" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0075AD" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="pnl"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-pnl)"
              stackId="a"
              className="border-[rgba(0, 117, 173, 1)]!"
            />
            <Area
              dataKey="balance"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-balance)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </div>
      <div className=" flex flex-row justify-between mb-10!">
        {/* Total Growth */}
        <div className="bg-white!  p-5! border-[#DDDDDD]! border-[0.5px]! rounded-lg! w-[48%]">
          <div className="mb-5! flex ">
            <p className="font-semibold mr-2! text-lg text-[#222222]!">
              Total Growth
            </p>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <ChartContainer
            config={chartConfig}
            className="w-full max-h-[300px]!"
          >
            <AreaChart
              accessibilityLayer
              data={equityCurveData}
              margin={{
                left: -30,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={0}
                tickCount={200}
                interval={30}

                //Calculate the interval to have 6
              />
              <ChartTooltip
                cursor={true}
                content={
                  <ChartTooltipContent className="bg-white! border! border-[#ECEEF0]! px-3! py-4!" />
                }
              />

              <defs>
                <linearGradient id="fillGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#04CE00" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#6FF76A" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="pnl"
                type="natural"
                fill="url(#fillGrowth)"
                fillOpacity={0.4}
                stroke="#04CE00"
                stackId="a"
                className="border-[rgba(0, 117, 173, 1)]!"
              />
            </AreaChart>
          </ChartContainer>
        </div>
        {/* Max Drawdown */}
        <div className="bg-white!  p-5! border-[#DDDDDD]! border-[0.5px]! rounded-lg! w-[48%]">
          <div className="mb-5! flex ">
            <p className="font-semibold mr-2! text-lg text-[#222222]!">
              Max drawdown
            </p>{" "}
            <Tooltip>
              <TooltipTrigger className="bg-white!">
                <CiCircleInfo style={{ color: "#686868" }} />
              </TooltipTrigger>
              <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                <p className=" text-[#222222]!">Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <ChartContainer
            config={chartConfig}
            className="w-full max-h-[300px]!"
          >
            <AreaChart
              accessibilityLayer
              data={equityCurveData}
              margin={{
                left: -30,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={0}
                tickCount={200}
                interval={30}

                //Calculate the interval to have 6
              />
              <ChartTooltip
                cursor={true}
                content={
                  <ChartTooltipContent className="bg-white! border! border-[#ECEEF0]! px-3! py-4!" />
                }
              />

              <defs>
                <linearGradient id="fillDrawdown" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B33D2F" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#E0645080" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#B33D2F" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="pnl"
                type="natural"
                fill="url(#fillDrawdown)"
                fillOpacity={0.5}
                strokeWidth={1.6}
                stroke="#B33D2F"
                stackId="a"
                className="border-[rgba(0, 117, 173, 1)]!"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      <div className="bg-white! mb-10!  p-5! border-[#DDDDDD]! border-[0.5px]! rounded-lg!">
        <div className="mb-5!">
          <p className="font-semibold text-sm! text-[#222222]!">
            Recent trades
          </p>
          <span className="text-[#777777] font-urbanist text-xs">
            Stay updated with real-time actions across payments, meals, and
            student management.
          </span>
        </div>
        <div className="rounded-lg overflow-hidden border-[0.5px]! border-[#DDDDDD]! text-[#777777]!">
          <Table className="font-urbanist ">
            <TableHeader className="border-b! border-[#E8E8E8]! border-[0.5px]! ">
              <TableRow>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Symbol
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Type
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Pnl
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Size
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Entry
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  StopLoss
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Exit
                </TableHead>
                <TableHead className="px-2! py-3! text-[#777777]!">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="py-3.5 text-[#333333]!">
                <TableCell className="px-4! py-3!">INV001</TableCell>
                <TableCell className="px-4! py-3!">
                  {" "}
                  <div className="px-3! text-xs py-1! text-[#30A12E] bg-[#ECFDEB] w-fit h-fit! rounded-lg">
                    BUY
                  </div>
                  <div className="px-3! hidden text-xs py-1! text-[#B33D2F] bg-[#FFF0EE] w-fit h-fit! rounded-lg">
                    SELL
                  </div>
                </TableCell>
                <TableCell className="px-4! py-3!">
                  <div className=" text-xs  font-semibold! text-[#30A12E] w-fit h-fit! rounded-lg">
                    790
                  </div>
                </TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-2! py-3!">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
