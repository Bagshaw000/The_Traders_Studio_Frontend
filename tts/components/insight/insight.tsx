import {
  RadialBarChart,
  PolarRadiusAxis,
  Label,
  RadialBar,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LuTrendingUp } from "react-icons/lu";
import { BsDot } from "react-icons/bs";

export default function Insight() {
  const chartData = [{ month: "january", desktop: 100, mobile: 20 }];
  const chartConfig = {
    balance: {
      label: "Desktop",
      color: "#04CE00",
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

  const chartData1 = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 214 },
    { month: "August", desktop: 214 },
    { month: "September", desktop: 214 },
    { month: "October", desktop: 214 },
    { month: "November", desktop: 209 },
    { month: "December", desktop: 209 },
  ];

  const chartData2 = [
    { month: "ASIA", desktop: 186 },
    { month: "LONDON", desktop: 305 },
    { month: "NEW YORK", desktop: 237 },
    { month: "SYDNEY", desktop: 73 },
  ];

  const volatilityData = [
    { month: "1", balance: 1000, pnl: 80 },
    { month: "2", balance: 1000, pnl: 80 },
    { month: "3", balance: 1000, pnl: 80 },
    { month: "4", balance: 1000, pnl: 80 },
    { month: "5", balance: 1000, pnl: 80 },
    { month: "6", balance: 1000, pnl: 80 },
    { month: "7", balance: 1000, pnl: 80 },
    { month: "8", balance: 1000, pnl: 80 },
    { month: "9", balance: 1000, pnl: 80 },
    { month: "10", balance: 1000, pnl: 80 },
    { month: "11", balance: 1000, pnl: 80 },
    { month: "12", balance: 1000, pnl: 80 },
    { month: "13", balance: 1000, pnl: 80 },
    { month: "14", balance: 1000, pnl: 80 },
    { month: "15", balance: 1000, pnl: 80 },
    { month: "16", balance: 1000, pnl: 80 },
    { month: "17", balance: 1000, pnl: 80 },
    { month: "18", balance: 1000, pnl: 80 },
    { month: "19", balance: 1000, pnl: 80 },
    { month: "20", balance: 1000, pnl: 80 },
    { month: "21", balance: 1000, pnl: 80 },
    { month: "22", balance: 1000, pnl: 80 },
    { month: "23", balance: 1000, pnl: 80 },
  ];
  return (
    <div>
      {/* Set up Bar */}
      <div className=" w-full bg-white py-5! px-5! rounded-md border-[0.5px]! border-[#DDDDDD]!">
        <span className="font-semibold! text-[#222222] ">Insight setup</span>

        <div className="w-full! flex flex-row justify-between mt-5!">
          <div className="w-[32.5%]">
            <span className="font-semibold text-xs text-[#3F3F3F]">Symbol</span>
            <Select>
              <SelectTrigger className="w-full border-[0.5px]! text-xs!  text-[#8C8A8B]! border-[#DDDDDD]! rounded-md! px-2! py-5!">
                <SelectValue placeholder="EURUSD" />
              </SelectTrigger>
              <SelectContent className="p-3! border-[#F7F7F7]! border-[0.5px]!">
                <SelectItem value="light" className="p-2!">
                  Light
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-[32.5%]">
            <span className="font-semibold text-[#3F3F3F] text-xs">
              Time interval
            </span>
            <Select>
              <SelectTrigger className="w-full text-xs!  border-[0.5px]!  border-[#DDDDDD]! text-[#8C8A8B]! rounded-md! px-2! py-5!">
                <SelectValue
                  placeholder="Select time interval here"
                  className="text-[#BDBDBD]!"
                />
              </SelectTrigger>
              <SelectContent className="p-3! border-[#F7F7F7]! border-[0.5px]!">
                <SelectItem value="d" className="p-2!">
                  Daily
                </SelectItem>
                <SelectItem value="wk" className="p-2!">
                  Weekly
                </SelectItem>
                <SelectItem value="mn" className="p-2!">
                  Monthly
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[32.5%]">
            <span className="font-semibold text-xs text-[#3F3F3F]">
              Session
            </span>
            <Select>
              <SelectTrigger className="w-full text-xs!  text-[#8C8A8B]!  border-[0.5px]!  border-[#DDDDDD]! rounded-md! px-2! py-5!">
                <SelectValue
                  placeholder="Select trading session here"
                  className="text-[#BDBDBD]!"
                />
              </SelectTrigger>
              <SelectContent className="p-3! border-[#F7F7F7]! border-[0.5px]!">
                <SelectItem value="all" className="p-2!">
                  All
                </SelectItem>
                <SelectItem value="ldn" className="p-2!">
                  London
                </SelectItem>
                <SelectItem value="ny" className="p-2!">
                  New York
                </SelectItem>
                <SelectItem value="asian" className="p-2!">
                  Asian
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Performance Snapshot */}
      <div className="">
        <p className="font-semibold text-lg my-5!"> Performance snapshot</p>

        <div className="w-full flex justify-between mb-5!">
          <div className=" bg-white rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Win rate */}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Win rate
              </span>
              <p className="text-3xl font-semibold">50%</p>
            </div>

            <div className="h-[100px]  flex items-center justify-center">
              <ChartContainer
                config={chartConfig}
                className="max-w-[150px]!  w-[100px] h-[150px]! pt-10! "
              >
                <RadialBarChart
                  data={chartData}
                  endAngle={180}
                  innerRadius={45}
                  outerRadius={60}
                  className="h-[100px]!  bottom-0!"
                  height={150}
                >
                  <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="end"
                            >
                              <tspan
                                x={(viewBox.cx || 0) - 40}
                                y={(viewBox.cy || 0) + 20}
                                className="fill-foreground text-sm font-medium "
                              >
                                0
                              </tspan>
                              <tspan
                                x={(viewBox.cx || 0) + 50}
                                y={(viewBox.cy || 0) + 20}
                                className="fill-muted-foreground  text-sm font-medium"
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
                    className="stroke-transparent stroke-3 "
                  />
                  <RadialBar
                    dataKey="mobile"
                    fill="#3A53C6"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-3 bg-[#D9D9D9]!"
                  />
                </RadialBarChart>
              </ChartContainer>
            </div>
          </div>

          {/* Total trades */}

          <div className=" bg-white rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Win rate */}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Total trades
              </span>

              <div className="flex">
                <p className="text-3xl font-semibold">50%</p>
                <span className="text-[10px] font-semibold ml-2! mt-3! px-1.5! py-0! h-5.5 bg-[#F8F8F8] rounded-lg flex items-center text-[#30A12E]">
                  {" "}
                  +19.22% <LuTrendingUp className="h-fit" />
                </span>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Win rate */}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Net Pnl
              </span>

              <div className="flex">
                <p className="text-3xl font-semibold">50%</p>
                <span className="text-[10px] font-semibold ml-2! mt-3! px-1.5! py-0! h-5.5 bg-[#F8F8F8] rounded-lg flex items-center text-[#30A12E]">
                  {" "}
                  +19.22% <LuTrendingUp className="h-fit" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between  mb-5!">
          <div className=" bg-white h-[120px] rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Average pip range*/}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Average pip range
              </span>

              <div className="flex">
                <p className="text-3xl font-semibold">50%</p>
                <span className="text-[10px] font-semibold ml-2! mt-3! px-1.5! py-0! h-5.5 bg-[#F8F8F8] rounded-lg flex items-center text-[#30A12E]">
                  {" "}
                  +19.22% <LuTrendingUp className="h-fit" />
                </span>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Average profit */}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Average profit
              </span>

              <div className="flex">
                <p className="text-3xl font-semibold">50%</p>
                <span className="text-[10px] font-semibold ml-2! mt-3! px-1.5! py-0! h-5.5 bg-[#F8F8F8] rounded-lg flex items-center text-[#30A12E]">
                  {" "}
                  +19.22% <LuTrendingUp className="h-fit" />
                </span>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-md  border-[0.5px]! border-[#DDDDDD]! flex flex-row items-center  justify-between w-[32.5%] px-4! py-2!">
            {/* Average loss */}
            <div className="font-urbanist">
              <span className="text-[#686868] text-sm font-medium">
                Average loss
              </span>

              <div className="flex">
                <p className="text-3xl font-semibold">50%</p>
                <span className="text-[10px] font-semibold ml-2! mt-3! px-1.5! py-0! h-5.5 bg-[#F8F8F8] rounded-lg flex items-center text-[#30A12E]">
                  {" "}
                  +19.22% <LuTrendingUp className="h-fit" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Equity Curve */}
        <div className="bg-white! mb-10!  p-5! border-[#DDDDDD]! border-[0.5px]! rounded-lg!">
          <div className="mb-5!">
            <p className="font-semibold text-lg text-[#222222]!">
              Pnl performance
            </p>
            <span className="text-[#777777] font-urbanist text-xs">
              Track Pnl performance over cumulative growth
            </span>
          </div>

          <ChartContainer
            config={chartConfig}
            className="w-full max-h-[550px]!"
          >
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
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#04CE00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#04CE00" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Area
                dataKey="balance"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-balance)"
                stackId="a"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      {/* Trade Breakdown  */}
      <div className="mb-5!">
        <p className="font-semibold text-lg my-5!"> Trade breakdown</p>

        <div className="flex flex-row justify-between">
          <div className="bg-white w-[48%] rounded-md border-[#DDDDDD]! border-[0.5px]! min-h-[250px] flex-col items-center px-4! py-4!">
            <p className="text-sm text-[#222222] font-semibold">
              Wins vs losses
            </p>
            <ChartContainer
              config={chartConfig}
              className="mx-auto  w-full! h-full! "
            >
              <ResponsiveContainer width="100%">
                <RadialBarChart
                  data={chartData}
                  endAngle={180}
                  innerRadius="80%"
                  outerRadius="80%"
                  barSize={30}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (
                          viewBox &&
                          "cx" in viewBox &&
                          "cy" in viewBox &&
                          "innerRadius" in viewBox &&
                          "outerRadius" in viewBox
                        ) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 30}
                                className="fill-foreground text-4xl font-bold"
                              >
                                20
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 12}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                    <Label
                      className=""
                      content={({ viewBox }) => {
                        if (
                          viewBox &&
                          "cx" in viewBox &&
                          "cy" in viewBox &&
                          "innerRadius" in viewBox &&
                          "outerRadius" in viewBox
                        ) {
                          const { cx, cy, innerRadius, outerRadius } = viewBox;

                          // distance from center to place labels (middle of radial bar)
                          const r = (innerRadius! + outerRadius!) / 1.8;

                          // angle to place text at left & right (in radians)
                          const leftAngle = Math.PI * 0.9; // 135°
                          const rightAngle = Math.PI * 0.1; // 45°

                          // compute positions
                          const leftX = cx! + r * Math.cos(leftAngle);
                          const leftY = cy! + r * Math.sin(leftAngle);

                          const rightX = cx! + r * Math.cos(rightAngle);
                          const rightY = cy! + r * Math.sin(rightAngle);

                          return (
                            <text
                              textAnchor="middle"
                              className="font-urbanist "
                            >
                              <tspan
                                x={leftX}
                                y={leftY}
                                className="fill-foreground font-urbanist font-medium! text-center! h-fit flex! flex-row! items-end!"
                              >
                                <tspan
                                  fill="#04CE00"
                                  className="text-2xl"
                                  fontSize="28"
                                  dy="5"
                                  dx="10"
                                >
                                  ●
                                </tspan>
                                <tspan
                                  className="text-sm text-[#686868]!"
                                  fontSize="14"
                                  dy="-2"
                                  dx="4"
                                >
                                  {" "}
                                  Wins 0
                                </tspan>
                              </tspan>
                              <tspan
                                x={rightX}
                                y={rightY}
                                className="fill-muted-foreground  text-sm font-medium"
                              >
                                <tspan
                                  fill="#B33D2F"
                                  className="text-2xl"
                                  fontSize="28"
                                  dy="5"
                                  dx="10"
                                >
                                  ●
                                </tspan>
                                <tspan
                                  className="text-sm"
                                  fontSize="14"
                                  dy="-2"
                                  dx="4"
                                >
                                  {" "}
                                  Losses 0
                                </tspan>
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
                    cornerRadius={10}
                    fill="#B33D2F"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="mobile"
                    fill="#04CE00"
                    stackId="a"
                    cornerRadius={10}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="w-[48%]  bg-white h-[inherit] border-[0.5px]! border-[#DDDDDD]! pl-4! pr-6! pt-4! pb-6! rounded-md">
            <div className=" text-xs   rounded-md flex flex-col  h-full justify-between ">
              <p className="text-sm text-[#222222] font-semibold mb-2!">
                {" "}
                Trade snapshot
              </p>
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Best trading day</span>

                <span>Buy</span>
              </div>
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Worst trading day</span>

                <span>Buy</span>
              </div>{" "}
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Best trading hour</span>

                <span>Buy</span>
              </div>{" "}
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Worst trading hour</span>

                <span>Buy</span>
              </div>{" "}
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Avg holding time</span>

                <span>Buy</span>
              </div>
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Best session</span>

                <span>Buy</span>
              </div>
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Avg win size</span>

                <span>Buy</span>
              </div>
              <div className="flex flex-row justify-between h-fit">
                <span className="text-[#686868]"> Avg loss size</span>

                <span>Buy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-4! py-2! mb-5! border-[#DDDDDD]! rounded-md border-[0.5px]!">
        <div className="mb-5!">
          <p className="font-semibold text-lg text-[#222222]!">Volatility</p>
          <span className="text-[#777777] font-urbanist text-xs">
            Track trade volatility across time
          </span>
        </div>

        <ChartContainer config={chartConfig} className="w-full max-h-[550px]!">
          <BarChart accessibilityLayer data={chartData1}>
            <CartesianGrid vertical={false} strokeDasharray="10 10" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#2A49BA" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="bg-white px-4! py-2! mb-5! border-[#DDDDDD]! rounded-md border-[0.5px]!">
        <div className="mb-5! flex justify-between items-end w-[97%]">
          <div>
            <p className="font-semibold text-lg text-[#222222]!">
              High & low timing (bullish vs bearish)
            </p>
            <span className="text-[#777777] font-urbanist text-xs">
              Track trade volatility across time
            </span>
          </div>
          <div className="flex font-medium">
            <div className="flex flex-row items-center text-sm mr-2!">
              <p className="bg-[#3EA063] rounded-full! w-2.5! h-3! text-center mr-1!"></p>{" "}
              Bullish
            </div>
            <div className="flex flex-row items-center text-sm">
              <p className="bg-[#F65746] rounded-full! w-2.5! h-3! mr-1!"></p>{" "}
              Bearish
            </div>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="w-full max-h-[550px]!">
          <BarChart accessibilityLayer data={volatilityData}>
            <CartesianGrid vertical={false} strokeDasharray="10 10" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            {/* <YAxis tickLine={false} tickMargin={10} axisLine={false} /> */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="pnl"
              stackId="a"
              fill="#F65746"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="balance"
              stackId="a"
              fill="#3EA063"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="bg-white px-4! py-2! mb-5! border-[#DDDDDD]! rounded-md border-[0.5px]!">
        <div className="mb-5!">
          <p className="font-semibold text-lg text-[#222222]!">
            Session volatility breakdown
          </p>
          <span className="text-[#777777] font-urbanist text-xs">
            Track trade volatility across time
          </span>
        </div>

        <ChartContainer config={chartConfig} className="w-full max-h-[550px]!">
          <BarChart accessibilityLayer data={chartData2}>
            <CartesianGrid vertical={false} strokeDasharray="10 10" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="#3EA063" radius={8} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
