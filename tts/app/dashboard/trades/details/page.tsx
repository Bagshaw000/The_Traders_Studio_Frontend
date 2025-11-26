"use client";
import NoTrades from "@/components/trades/noTrades";
import Trades from "@/components/trades/trades";
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
export default function Page() {
  let fileRef = useRef<HTMLInputElement>(null);

  let [strategy, saveStrategy] = useState<Array<string>>([]);
  let [tags, saveTags] = useState<Array<string>>([]);
  let [links, saveLinks] = useState<Array<string>>([]);
  let [tradeImage, setTradeImages] = useState<Array<File | null>>([]);
  const [mt5CsvFile, setMt5Csv] = useState<File | null>(null);
  const [strategyInput, setStrategyInput] = useState<string | null>(null);
  const [chartLink, setChartLink] = useState<string | null>(null);
  const [tradeTags, setTradeTags] = useState<string | null>(null);
  const [confidenceLevel, setConfidenceLevel] = useState<number | null>(null);

  // Track image changes and store all trade images selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setTradeImages((prev) => {
      const updated = [...prev, file];

      return updated;
    });

    if (fileRef.current) {
      fileRef.current.value = "";
    }
    setMt5Csv(null);
  };

  useEffect(() => {
    console.log("tradeImages updated:", tradeImage);
  }, [tradeImage]);

  // Handles the deletion of file
  const handleDeleteFile = (ref: React.RefObject<HTMLInputElement | null>) => {
    ref.current!.value = "";
    setMt5Csv(null);
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
        console.log("test");
        saveStrategy((prev) => [...prev, strategyInput!]);
        console.log(strategy);
        setStrategyInput("");
      }

      if (event.currentTarget.id == "links") {
        // Push in array and clear value
        console.log("test");
        saveLinks((prev) => [...prev, chartLink!]);
        console.log(links);
        setChartLink("");
      }

      if (event.currentTarget.id == "tags") {
        // Push in array and clear value
        console.log("test");
        saveTags((prev) => [...prev, tradeTags!]);
        console.log(tags);
        setTradeTags("");
      }
    }
  };

  const [trade, setTrade] = useState<boolean>(true);
  // Get user Data and check if the onboarding has happened
  return (
    <div>
      {/* Title */}
      <div className="bg-white mb-6! flex flex-row justify-between items-center px-5! py-4! rounded-md border-[0.5px]! border-[#DDDDDD]!">
        {" "}
        <div>
          <span className="text-xs! font-urbanist text-[#686868]">Symbol</span>{" "}
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
        <div className="bg-white w-[62.5%]  min-h-[70vh]! border-[0.5px]! border-[#DDDDDD]! rounded-md"></div>

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
              <DialogContent className="px-10! py-7!  bg-white min-w-[50vw]">
                <DialogHeader>
                  <DialogTitle className="font-semibold! text-lg!">
                    Add a trade
                  </DialogTitle>
                  <DialogDescription>
                    <div className="w-full px-1! flex items-center rounded-sm justify-center mb-3! py-1! text-center bg-[#F8F8F8] h-10!">
                      <div className="bg-white  w-full h-[97%] font-urbanist text-[#222222] text-xs rounded-sm text-center flex items-center justify-center m-auto!">
                        <span className="text-center"> Journal</span>
                      </div>
                    </div>
                    <div className="h-fit! relative mb-3!">
                      <p className="font-semibold text-[#222121]">
                        Upload Image
                      </p>

                      <Input
                        ref={fileRef}
                        id="images"
                        onChange={handleFileChange}
                        onKeyDown={handleKeyDown}
                        type="file"
                        className=" border-[0.5px]! cursor-pointer w-25 file:hidden font-urbanist!  text-center! text-xs! px-5! h-40! bg-[#F8F8F8]! text-[#F8F9F9]! border-[#E7E6E6]! rounded-lg!"
                      />
                      <div className="p-2! w-fit bg-white rounded-full absolute bottom-15 left-8">
                        <BsPlusLg
                          className="text-[#686868] "
                          stroke="1"
                          size={20}
                        />
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
                          <div className="mr-2! flex flex-row items-center bg-[#F7F7F7] text-xs border-[0.5px]! px-2!  border-[#DDDDDD]! rounded-sm w-fit">
                            <span className="w-fit mr-2!" key={index}>
                              {item}
                            </span>

                            <Button
                              onClick={() => {
                                handleDeleteStrategy(index);
                              }}
                            >
                              <TfiClose className="scale-75 h-fit!" />
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
                    </div>

                    <div className="mb-3!">
                      <p className="font-semibold mb-3! text-[#222121]">
                        Confidence level
                      </p>

                      <Slider
                        defaultValue={[2]}
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
                  </DialogDescription>
                </DialogHeader>
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
          <div className="font-urbanist text-xs mb-[6%]! bg-white  h-[50%] rounded-md flex flex-col pl-4! pr-6! py-4! border-[0.5px]! border-[#DDDDDD]!  justify-between ">
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
