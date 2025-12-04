"use client";

import { useEffect, useRef, useState } from "react";
import mt5 from "@/public/mt55.svg";
import edit from "@/public/edit.svg";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CiCircleInfo } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsPlusLg } from "react-icons/bs";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { TfiClose } from "react-icons/tfi";
import { toast } from "sonner";
import { ColorType, createSeriesMarkers } from "lightweight-charts";
import { AreaSeries, CandlestickSeries, createChart } from "lightweight-charts";
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
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/navigation";
export default function Page({ page }: { page: string }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef) return;

    const chartOptions = {
      layout: {
        textColor: "#999999",
        background: {
          type: ColorType.Solid,
          color: "#ffffff",
        },
      },
      rightPriceScale: {
        borderVisible: true,
        borderColor: "#DDDDDD",
      },
      timeScale: {
        borderVisible: true,
        borderColor: "#DDDDDD",
      },
    };

    const chart = createChart(chartRef.current!, chartOptions);

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candlestickSeries.setData([
      {
        time: "2018-12-22",
        open: 75.16,
        high: 82.84,
        low: 36.16,
        close: 45.72,
      },
      { time: "2018-12-23", open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
      {
        time: "2018-12-24",
        open: 60.71,
        high: 60.71,
        low: 53.39,
        close: 59.29,
      },
      { time: "2018-12-25", open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
      {
        time: "2018-12-26",
        open: 67.71,
        high: 105.85,
        low: 66.67,
        close: 91.04,
      },
      { time: "2018-12-27", open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
      {
        time: "2018-12-28",
        open: 111.51,
        high: 142.83,
        low: 103.34,
        close: 131.25,
      },
      {
        time: "2018-12-29",
        open: 131.33,
        high: 151.17,
        low: 77.68,
        close: 96.43,
      },
      {
        time: "2018-12-30",
        open: 106.33,
        high: 110.2,
        low: 90.39,
        close: 98.1,
      },
      {
        time: "2018-12-31",
        open: 109.87,
        high: 114.69,
        low: 85.66,
        close: 111.26,
      },
    ]);

    const markers = [
      {
        time: "2018-12-23",
        position: "belowBar" as const,
        color: "green",
        shape: "arrowUp" as const,
        text: "Entry 45.12",
      },
      {
        time: "2018-12-28",
        position: "aboveBar" as const,
        color: "red",
        shape: "arrowDown" as const,
        text: "Exit 131.25",
      },
    ];

    createSeriesMarkers(candlestickSeries, markers);
    const vr = chart.timeScale().getVisibleLogicalRange();
    chart.timeScale().fitContent();

    // return () => chart.remove(); // Cleanup
  }, []);

  let fileRef = useRef<HTMLInputElement>(null);

  let [strategy, saveStrategy] = useState<Array<string>>([]);
  let [tags, saveTags] = useState<Array<string>>([]);
  let [links, saveLinks] = useState<Array<string>>([]);
  let [tradeImage, setTradeImages] = useState<Array<File | null>>([]);
  const [mt5CsvFile, setMt5Csv] = useState<File | null>(null);
  const [strategyInput, setStrategyInput] = useState<string | null>(null);
  const [chartLink, setChartLink] = useState<string | null>(null);
  const [tradeTags, setTradeTags] = useState<string | null>(null);
  const [confidenceLevel, setConfidenceLevel] = useState<number | null>(0);
  const timeframes = ["1m", "5m", "15m", "1H", "4H", "1D"];
  const [activeTf, setActiveTf] = useState<string>("1H");
  const handleTimeframeChage = (tf: string) => {
    console.log(activeTf);
    setActiveTf(tf);
  };

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

  // Track image changes and store all trade images selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file?.type.startsWith("image/")) {
      setTradeImages((prev) => {
        const updated = [...prev, file];

        return updated;
      });
    } else {
      toast.error("Provide a valid image file");
    }

    if (fileRef.current) {
      fileRef.current.value = "";
    }
    setMt5Csv(null);
  };

  useEffect(() => {
    console.log("tradeImages updated:", tradeImage);
  }, [tradeImage]);

  // Handles the deletion of file
  const handleDeleteFile = (index: number) => {
    setTradeImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteStrategy = (index: number) => {
    saveStrategy((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteTags = (index: number) => {
    saveTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteLinks = (index: number) => {
    saveLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed!");

      if (event.currentTarget.id == "strategy") {
        // Push in array and clear value

        if (strategyInput?.trim() != "" && strategyInput != null) {
          console.log("test");
          saveStrategy((prev) => [...prev, strategyInput!]);
          console.log(strategy);
          setStrategyInput("");
        } else {
          toast.error("Strategy cannot be empty");
          setStrategyInput("");
        }
      }

      if (event.currentTarget.id == "links") {
        // Push in array and clear value
        console.log("test");

        const isUrl = isValidUrl(chartLink!);

        if (isUrl == true) {
          saveLinks((prev) => [...prev, chartLink!]);
          console.log(links);
          setChartLink("");
        } else {
          toast.error("Provide a valid link");
          setChartLink("");
        }
      }

      if (event.currentTarget.id == "tags") {
        // Push in array and clear value

        if (tradeTags?.trim() != "" && tradeTags != null) {
          saveTags((prev) => [...prev, tradeTags!]);

          setTradeTags("");
        } else {
          toast.error("Tags cannot be empty");
          setTradeTags("");
        }
      }
    }
  };

  function isValidUrl(string: string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  const redirectBack = () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const pageredirection = params.get("from");
    if (pageredirection == "journal") {
      redirect("/dashboard/journal");
    } else if (pageredirection == "trade") {
      redirect("/dashboard/trades");
    }
  };

  const [trade, setTrade] = useState<boolean>(true);
  // Get user Data and check if the onboarding has happened
  return (
    <div>
      {/* Title */}
      <div className="bg-white mb-6! flex flex-row justify-between items-center px-5! py-4! rounded-md border-[0.5px]! border-[#DDDDDD]!">
        {" "}
        <div className="flex items-center">
          <Button className="mr-2!" onClick={redirectBack}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "#414141" }}
              size="xs"
            />
          </Button>

          <div>
            <span className="text-xs! font-semibold! font-urbanist text-[#686868]">
              Symbol
            </span>{" "}
            <div className="flex flex-row">
              <Image src={mt5} alt={""} className="mr-2!"></Image>
              <div className="flex flex-col items-start justify-between">
                <p className="font-semibold">EURUSD</p>
                <div className="px-2! text-xs py-1! text-[#30A12E] font-medium! bg-[#ECFDEB] w-fit h-fit! rounded-md">
                  BUY
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  items-start">
          <div className="text-sm mr-3! font-semibold text-right font-urbanist">
            <span className="text-[#222222]"> Closed</span>
            <p className="text-[#B33D2F]"> -33,500.34</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <PiDotsThreeVerticalBold size={25} />
            </AlertDialogTrigger>
            <AlertDialogContent className="px-5! py-7!  sm:max-w-[400px]">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-semibold!">
                  Delete Trade
                </AlertDialogTitle>
                <AlertDialogDescription className="font-urbanist">
                  Are you sure you want to delete this trade. You would not be
                  able to retrieve this trade after deleting it.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="text-sm!">
                <AlertDialogCancel className="px-4! border-[0.5px]! text-[#3A53C6]! border-[#DDDDDD]! rounded-sm!">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="px-4!  text-white! bg-[#B33D2F]! rounded-sm!">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* The Chart section */}
      <div className="flex flex-row justify-between mb-7!">
        <div className="bg-white w-[62.5%] p-4! min-h-[70vh]! border-[0.5px]!  border-[#DDDDDD]! rounded-md">
          <div className="mb-3! flex text-xs justify-between  max-w-[250px] font-semibold">
            {timeframes.map((tf) => (
              <Link
                key={tf}
                href="#"
                onClick={() => {
                  handleTimeframeChage(tf);
                }}
                className={`px-2 ${
                  activeTf == tf ? "text-blue-600!" : "text-[#999999]!"
                }`}
              >
                {tf}
              </Link>
            ))}
          </div>
          <div
            ref={chartRef}
            id="container"
            className="w-full h-full mx-auto! bg-no-repeat"
          ></div>
        </div>

        <div className=" w-[35%] flex flex-col ">
          <div className="font-urbanist text-xs  bg-white  h-[50%] mb-[6%]! rounded-md flex flex-col pl-4! pr-6! py-4! border-[0.5px]! border-[#DDDDDD]!  justify-between ">
            <p className="text-sm text-[#222222] font-semibold">
              {" "}
              Trade snapshot
            </p>
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Position</span>

              <span>Buy</span>
            </div>
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> PnL</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Duration</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Opened at</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Closed at</span>

              <span>Buy</span>
            </div>
          </div>

          <div className="font-urbanist text-xs  bg-white  h-[50%] rounded-md flex flex-col pl-4! pr-6! py-4! border-[0.5px]! border-[#DDDDDD]!  justify-between ">
            <p className="text-sm text-[#222222] font-semibold ">
              {" "}
              Trade snapshot
            </p>
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Position</span>

              <span>Buy</span>
            </div>
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> PnL</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Duration</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Opened at</span>

              <span>Buy</span>
            </div>{" "}
            <div className="flex flex-row justify-between h-fit">
              <span className="text-[#686868]"> Closed at</span>

              <span>Buy</span>
            </div>
          </div>
        </div>
      </div>
      {/* Journal  */}
      <div className="flex flex-row justify-between">
        <div className="bg-white w-[60%] px-10! pt-3! pb-5!  border-[0.5px]! min-h-[75vh] border-[#DDDDDD]! rounded-md">
          <div className=" flex flex-row justify-between items-center">
            <p className="font-semibold">Journal</p>

            <Dialog>
              <DialogTrigger className="px-3! w-fit bg-[#F2F2F2]! rounded-full! py-3! mb-4!">
                <Image src={edit} alt=""></Image>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="px-10! py-7!  bg-white min-w-[50vw] overflow-auto overflow-x-clip max-h-[90vh]"
              >
                <DialogHeader className="flex flex-row items-center justify-between">
                  <DialogTitle className="font-semibold! text-lg!">
                    Add a trade
                  </DialogTitle>
                  <DialogClose asChild className="">
                    <Button className="bg-[#F2F2F2]! rounded-full! p-2! h-fit w-fit">
                      <TfiClose
                        style={{ color: "#222222" }}
                        className="scale-75"
                      />
                    </Button>
                  </DialogClose>
                </DialogHeader>

                <div className="w-full px-1! flex items-center rounded-sm justify-center mb-3! py-1! text-center bg-[#F8F8F8] h-10!">
                  <div className="bg-white  w-full h-[97%] font-urbanist text-[#222222] text-xs rounded-sm text-center flex items-center justify-center m-auto!">
                    <span className="text-center"> Journal</span>
                  </div>
                </div>
                <div className="h-fit! relative mb-3!">
                  <p className="font-semibold text-[#222121]">Upload Image</p>

                  <div className="flex h-40! items-center! flex-row">
                    {tradeImage.map((item, index) => (
                      <div className="flex relative! mr-2! h-full bg-[#dddddd] py-auto w-25 rounded-lg overflow-hidden">
                        <Button
                          className="p-2! rounded-full!   absolute top-0 right-0 bg-[#e7e6e62d]"
                          onClick={() => handleDeleteFile(index)}
                        >
                          <TfiClose
                            className=" text-black h-fit  scale-50"
                            size={10}
                          />
                        </Button>
                        <img
                          src={URL.createObjectURL(item!)}
                          className="max-h-full! max-w-full! object-cover"
                          alt={""}
                        />
                      </div>
                    ))}

                    <div className="relative h-full bottom-1.5">
                      {" "}
                      <Input
                        ref={fileRef}
                        id="images"
                        onChange={handleFileChange}
                        onKeyDown={handleKeyDown}
                        type="file"
                        className=" border-[0.5px]! cursor-pointer w-25 file:hidden font-urbanist!  text-center! text-xs! px-5! h-full my-auto bg-[#F8F8F8]! text-[#F8F9F9]! border-[#E7E6E6]! rounded-lg!"
                      />
                      <div className="p-2! w-fit bg-white rounded-full absolute bottom-15 left-8">
                        <BsPlusLg
                          className="text-[#686868] "
                          stroke="1"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3!">
                  <p className="font-semibold  text-[#222121]">Strategy</p>
                  <Input
                    type="text"
                    id="strategy"
                    value={strategyInput!}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setStrategyInput(e.target.value)}
                    placeholder="Enter strategy here"
                    className="border-[0.5px]! font-urbanist! font-light text-[#222222]! border-[#DDDDDD]! rounded-md! py-3! px-4! h-12!"
                  ></Input>
                  <div className="flex flex-row mt-2!">
                    {strategy.map((item, index) => (
                      <div className="mr-2! flex flex-row items-center bg-[#F7F7F7] text-xs  px-2!   rounded-sm w-fit">
                        <span className="w-fit mr-2!" key={index}>
                          {item}
                        </span>

                        <Button
                          onClick={() => {
                            handleDeleteStrategy(index);
                          }}
                        >
                          <TfiClose className="scale-75 h-fit! text-black" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3!">
                  <p className="font-semibold text-[#222121]">Links</p>

                  <Input
                    placeholder="Attach links here"
                    id="links"
                    value={chartLink!}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setChartLink(e.target.value)}
                    type="url"
                    className="border-[0.5px]! font-urbanist! font-light text-[#222222]! border-[#DDDDDD]! h-12! rounded-md! py-3! px-4!"
                  />

                  <div className="flex flex-col mt-2!">
                    {links.map((item, index) => (
                      <div className="mb-2! flex flex-row items-center bg-[#F7F7F7] text-xs  px-2! rounded-sm w-fit">
                        <span className="w-fit mr-2!" key={index}>
                          {item}
                        </span>

                        <Button
                          onClick={() => {
                            handleDeleteLinks(index);
                          }}
                        >
                          <TfiClose className="scale-75 h-fit! text-black" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3!">
                  <p className="font-semibold text-[#222121]">Notes</p>

                  <Textarea
                    id="feedback"
                    placeholder="Enter your notes here"
                    className="border-[0.5px]! font-urbanist! font-light text-[#222222]! border-[#DDDDDD]! h-50! rounded-md! py-3! px-4!"
                    rows={6}
                  />
                </div>

                <div className="mb-3!">
                  <p className="font-semibold text-[#222121]">Tags</p>

                  <Input
                    placeholder="Enter tags here"
                    type="text"
                    id="tags"
                    value={tradeTags!}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setTradeTags(e.target.value)}
                    className="border-[0.5px]! font-urbanist! font-light text-[#222222]! border-[#DDDDDD]! h-12! rounded-md! py-3! px-4!"
                  />

                  <div className="flex flex-row mt-2!">
                    {tags.map((item, index) => (
                      <div className="mr-2! flex flex-row items-center bg-[#F7F7F7] text-xs  px-2!   rounded-sm w-fit">
                        <span className="w-fit mr-2!" key={index}>
                          {item}
                        </span>

                        <Button
                          onClick={() => {
                            handleDeleteTags(index);
                          }}
                        >
                          <TfiClose className="scale-75 h-fit! text-black" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3!">
                  <p className="font-semibold mb-3! text-[#222121]">
                    Confidence level
                  </p>

                  <Slider
                    defaultValue={[confidenceLevel!]}
                    onValueChange={(value: number[]) =>
                      setConfidenceLevel(value[0])
                    }
                    min={0}
                    max={10}
                    step={1}
                    className="bg-[#3A53C6]!"
                  />
                  <div className="flex flex-row justify-between">
                    {" "}
                    <span>Low</span>
                    <span>Neutral</span>
                    <span>High</span>
                  </div>
                </div>
                <DialogFooter className="mt-5!">
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="py-3! px-5! text-xs! text-[#3A53C6]! font-medium! border-[0.5px]! border-[#DDDDDD]! rounded-sm!"
                    >
                      Close
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    onClick={() => {}}
                    className="py-3! px-5! text-xs! bg-[#3A53C6]! rounded-sm! text-white!"
                  >
                    Continue
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          {/* Images */}
          <div className="bg-[#FCFCFC] mb-4! h-[150px]  px-4! py-3! font-urbanist text-[#686868] rounded-lg">
            <p className="font-light text-sm"> Images</p>
            {/* Array of Images if it exists */}
          </div>
          {/* Strategy */}
          <div className="bg-[#FCFCFC] mb-4! text-sm h-[fit] px-4! py-3! font-urbanist text-[#686868] rounded-lg">
            <p className="font-light mb-2!"> Strategy</p>
            {/* Array of Strategy if it exists */}
            <p className="text-[#222222]">No entry</p>
          </div>

          {/* Notes */}
          <div className="bg-[#FCFCFC] mb-4! text-sm h-[fit] px-4! py-3! font-urbanist text-[#686868] rounded-lg">
            <p className="font-light mb-2!"> Notes</p>

            <p className="text-[#222222]">
              Entered long on EUR/USD after price broke above 1.0830 with strong
              momentum and EMA confirmation. Stop loss was set below 1.0800 to
              allow room for volatility, targeting 1.0870. Exited early as
              momentum slowed and RSI hit overbought. Good entry overall, but
              could have held longer for better profit.
            </p>
          </div>

          {/* Tags */}
          <div className="bg-[#FCFCFC] mb-4! text-sm h-[fit] px-4! py-3! font-urbanist text-[#686868] rounded-lg">
            <p className="font-light mb-2! "> Tags</p>

            <p className="text-[#222222] px-3! py-2! font-medium bg-white w-fit rounded-md!">
              spiky trade
            </p>
          </div>

          {/* Tags */}
          <div className="bg-[#FCFCFC] mb-4! text-sm h-[fit] px-4! py-3! font-urbanist text-[#686868] rounded-lg">
            <p className="font-light mb-2! "> Confidence level</p>

            <p className="text-[#222222] ">Neutral</p>
          </div>
        </div>

        <div className="w-[37%] flex flex-col ">
          <div className="font-urbanist text-xs mb-[6%]!  bg-white  h-[50%] rounded-md flex flex-col pl-4! pr-6! py-4! border-[0.5px]! border-[#DDDDDD]! justify-between ">
            <div className="flex ">
              <span className="text-sm font-semibold text-[#222222] mr-2!">
                Trade lifecycle (Pnl)
              </span>
              <Tooltip>
                <TooltipTrigger className="bg-white!">
                  <CiCircleInfo style={{ color: "#686868" }} size={20} />
                </TooltipTrigger>
                <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                  <p className=" text-[#222222]!">Add to library</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <ChartContainer
              config={chartConfig}
              className="w-full h-[90%] max-h-[full]!"
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
          <div className="font-urbanist text-xs  bg-white  h-[50%] rounded-md flex flex-col pl-4! pr-6! py-4! border-[0.5px]! border-[#DDDDDD]!  justify-between ">
            <div className="flex ">
              <span className="text-sm font-semibold text-[#222222] mr-2!">
                Risk vs reward progress
              </span>
              <Tooltip>
                <TooltipTrigger className="bg-white!">
                  <CiCircleInfo style={{ color: "#686868" }} size={20} />
                </TooltipTrigger>
                <TooltipContent className="px-2! py-2! bg-white! drop-shadow">
                  <p className=" text-[#222222]!">Add to library</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
