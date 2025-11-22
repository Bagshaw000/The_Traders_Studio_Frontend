"use client";
import { useEffect, useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import db from "@/public/database-sync.svg";
import upload from "@/public/file-upload-purple.svg";
import Image from "next/image";
import Help from "@/public/headphones.svg";
import file from "@/public/file-upload.svg";
import fileCirle from "@/public/file_circle.svg";
import Link from "next/link";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { GiCheckMark } from "react-icons/gi";
import { Input } from "../ui/input";
import PasswordField from "../ui/PasswordField";
import { authSetupStore } from "@/app/hook";
import { Progress } from "../ui/progress";
import { IoIosClose } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { toast } from "sonner";

export default function MatchTaderConnect({ platform }: { platform: string }) {
  const [mtSteps, setMtSteps] = useState<number>(0);
  const [autoSync, setAutoSync] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [accDetail, setAccDetail] = useState<number>();
  const [serverName, setServerName] = useState<string>("");
  const [portSteps, setPortSteps] = useState<number>(0);
  const [portName, setPortName] = useState<string>("");
  let { setStep } = authSetupStore();

  let fileRef = useRef<HTMLInputElement>(null);
  const [mt5CsvFile, setMt5Csv] = useState<File | null>(null);

  // Track file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setMt5Csv(file);
  };

  // Handles the deletion of file
  const handleDeleteFile = (ref: React.RefObject<HTMLInputElement | null>) => {
    ref.current!.value = "";
    setMt5Csv(null);
  };

  useEffect(() => {
    setStep(2);
  }, []);
  const [profileColor, setProfileColor] = useState<string>("#DDDDDD");

  const handleSetProfileColor = (e: string) => {
    setProfileColor(e);
  };

  const handleSubmit = () => {
    if (mtSteps == 0 && portSteps == 0) {
      setMtSteps(1);
    } else {
      setPortSteps(1);
    }
  };
  const chooseConnection = (e: string) => {
    console.log(e);
    if (e == "sync") {
      setAutoSync(true);
    } else {
      setAutoSync(false);
    }
  };
  return (
    <div>
      {mtSteps == 0 ? (
        <div className="h-full! relative bottom-8">
          <p className="text-sm mb-5!  text-[#222222]!"> Select upload type</p>
          <RadioGroup
            defaultValue=""
            className="flex justify-between"
            onValueChange={(e) => {
              chooseConnection(e);
            }}
          >
            <div className=" space-x-2 border-[0.5px]! border-[#DDDDDD]! relative  items-end rounded-xl! w-[47%] h-[inherit] ">
              <RadioGroupItem
                value="sync"
                id="sync"
                className="mr-3! mt-3! left-68 relative border-[1.5px]! rounded-full! border-[#909090]! data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!  data-[state=checked]:text-[#3A53C6]! "
              />
              <div className="flex flex-col items-center ">
                <div className="p-2! rounded-full! bg-[#F9F9F9]! mb-5! w-fit">
                  <Image src={db} alt="" />
                </div>
                <div className="flex flex-col mb-15! items-center">
                  <span className="mb!">Auto Sync</span>
                  <span className="text-[#686868]!  w-[80%] text-center text-xs! font-urbanist">
                    Automatically sync your portfolio with the excahnge
                  </span>
                </div>
              </div>
            </div>
            <div className=" space-x-2 border-[0.5px]! border-[#DDDDDD]! relative items-end rounded-xl! w-[47%] ">
              <RadioGroupItem
                value="file"
                id="file"
                className="mr-3! mt-3! left-68 relative border-[1.5px]! rounded-full! border-[#909090]! data-[state=checked]:border-[#3A53C6]!
                 data-[state=checked]:bg-[#3A53C6]!  data-[state=checked]:text-[#3A53C6]! "
              />
              <div className="flex flex-col items-center w-full">
                <div className="p-2! rounded-full! bg-[#F9F9F9]! mb-5! w-fit">
                  <Image src={upload} alt="" />
                </div>
                <div className="flex flex-col mb-10! items-center">
                  <span className="mb!">File upload</span>
                  <span className="text-[#686868]!  w-full text-center text-xs! font-urbanist">
                    Upload your trade files
                  </span>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      ) : (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col h-90!  text-xs! justify-between font-urbanist bg-[#FCFCFC]! border-[0.5px]! border-[#DDDDDD]! rounded-lg px-4! py-4! w-[30%]">
            <div className="text-xs">
              <div className="mb-3! flex items-center">
                {/* Track autosync steps */}
                {portSteps > 0 ? (
                  <div className=" px-1.5!  py-1.5! w-fit rounded-full bg-[#30A12E] text-white!">
                    <GiCheckMark size={11} />
                  </div>
                ) : (
                  <div className="px-2.5!  py-1! rounded-full bg-[#01113F] text-white!">
                    1
                  </div>
                )}

                {portSteps == 1 ? (
                  <span className="ml-2! text-[#686868]">
                    {" "}
                    Create portfolio
                  </span>
                ) : (
                  <span className="ml-2! text-[#222222]">
                    {" "}
                    Create portfolio
                  </span>
                )}
              </div>
              <div className="flex flex-row items-center">
                {portSteps >= 1 ? (
                  <div className=" px-1.5!  py-1.5! w-fit rounded-full bg-[#30A12E] text-white!">
                    <GiCheckMark size={11} />
                  </div>
                ) : (
                  <div className="px-2!  py-1! rounded-full bg-[#01113F] text-white!">
                    2
                  </div>
                )}
                {autoSync == true ? (
                  <span className="ml-2!"> Server connections</span>
                ) : (
                  <span className="ml-2!"> File Upload</span>
                )}
              </div>
            </div>
            <div className="text-xs">
              <div className="mb-1.5!">
                <Link href={""} className="text-[#3A53C6]! font-medium ">
                  Instructions
                </Link>
              </div>

              <div className="flex items-end">
                <Image
                  src={Help}
                  alt=""
                  className="mr-2!  filter-[brightness(0)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(225deg)_brightness(0%)_contrast(100%)] "
                />
                <span className="text-xs">Having any trouble</span>
              </div>
            </div>
          </div>

          <div className="w-[65%]">
            {/* Select color  */}
            {portSteps == 0 ? (
              <div className="mt-5!">
                <span className="text-sm font-medium text-[#222121]!">
                  Portfolio name
                </span>
                <Input
                  type="text"
                  placeholder="Enter your portfolio name here"
                  onChange={(e) => setPortName(e.target.value)}
                  className="font-urbanist! text-xs! px-5! py-5! text-[#BDBDBD]! border-[#DDDDDD]! border-[0.5px]! rounded-md!"
                />
                <div className=" mt-5!">
                  <span className="text-sm! font-medium!">Select colour</span>
                  <div>
                    <div className="flex justify-between items-center w-[85%]">
                      <Link
                        className="w-4! bg-[#3F3F3F] rounded-full h-4!"
                        onClick={() => {
                          handleSetProfileColor("#3F3F3F");
                        }}
                        href={""}
                      ></Link>
                      <Link
                        className="w-4! bg-[#D50B3E] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#D50B3E");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#EB3A00] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#EB3A00");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#DB0BB9] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#DB0BB9");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#7047EB] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#7047EB");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#0075AD] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#0075AD");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#1E874C] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#1E874C");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#FFDA85] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#FFDA85");
                        }}
                      ></Link>
                      <Link
                        className="w-4! bg-[#C4C4C4] rounded-full h-4!"
                        href={""}
                        onClick={() => {
                          handleSetProfileColor("#C4C4C4");
                        }}
                      ></Link>
                      <span className="text-xs">Custom color</span>
                      <Input
                        type="text"
                        value={profileColor}
                        className="w-20 h-7! border-[0.5px]! text-xs! text-center rounded-xs! text-[#3F3F3F] border-[#F7F7F7]!"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : autoSync == true ? (
              platform == "match" ? (
                <></>
              ) : platform == "mt5" ? (
                <div className="mt-5!">
                  <div className="mb-4!">
                    <span className="text-sm! mb-2! font-semibold text-[#222121]!">
                      {" "}
                      Account details
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter your portfolio name here"
                      onChange={(e) => setAccDetail(parseInt(e.target.value))}
                      className="font-urbanist! text-xs! px-5!  text-[#BDBDBD]! border-[#DDDDDD]! border-[0.5px]! rounded-sm!"
                    />
                  </div>

                  <div className="mb-4!">
                    <span className="text-sm! mb-2! font-semibold text-[#222121]!">
                      Server name
                    </span>
                    <Input
                      type="text"
                      placeholder="Enter your portfolio name here"
                      onChange={(e) => setServerName(e.target.value)}
                      className="font-urbanist! text-xs! px-5!  text-[#BDBDBD]! border-[#DDDDDD]! border-[0.5px]! rounded-sm!"
                    />
                  </div>
                  <div>
                    <span className="text-sm! mb-2! font-semibold text-[#222121]!">
                      Password
                    </span>
                    <PasswordField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></PasswordField>
                  </div>
                </div>
              ) : platform == "mt4" ? (
                <></>
              ) : platform == "ctrader" ? (
                <></>
              ) : (
                <></>
              )
            ) : (
              <div className="">
                <div className="mb-4! relative h-fit">
                  <Input
                    ref={fileRef}
                    onChange={handleFileChange}
                    type="file"
                    className=" cursor-pointer  file:hidden font-urbanist! border-0! text-center! text-xs! px-5! h-40! bg-[#F8F9F9]! text-[#F8F9F9]! border-[#DDDDDD]! rounded-lg!"
                  />

                  <div className="flex flex-col relative bottom-30 left-27 h-fit  w-fit text-center items-center">
                    <div className="px-3! py-3! w-fit rounded-full bg-[#F3F5F7]!">
                      {" "}
                      <Image src={upload} alt="" className="scale-125"></Image>
                    </div>

                    <span className="text-[#3A53C6]! font-medium text-sm!">
                      {" "}
                      Upload file{" "}
                      <span className="text-[#222222]">
                        {" "}
                        or drag and drop here
                      </span>
                    </span>
                    <span className="text-xs text-[#686868] font-light font-urbanist">
                      {" "}
                      Max file size: 200 MB{" "}
                    </span>
                  </div>
                </div>
                {/* Uploaded file */}
                {mt5CsvFile != null ? (
                  <div className="bottom-20 relative">
                    <p className="font-medium text-sm">Uploaded files</p>
                    <div className="px-3! py-3! border-[0.5px]!  border-[#ECEEF0]! rounded-lg">
                      <div className="flex flex-row items-start">
                        <div className="w-full flex flex-row items-center mb-2!">
                          <div className=" w-fit! h-fit! mr-5! rounded-full bg-[#F8F8F8]! flex flex-row items-center">
                            <Image
                              src={fileCirle}
                              alt={""}
                              className=" scale-75"
                            />
                          </div>

                          <div className="">
                            <p className="text-xs">{mt5CsvFile.name}</p>
                            <p className="text-xs! text-[#686868] font-urbanist font-light">
                              {(mt5CsvFile.size / (1024 * 1024)).toPrecision(2)}{" "}
                              MB of{" "}
                              {(mt5CsvFile.size / (1024 * 1024)).toPrecision(2)}{" "}
                              of MB{" "}
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            handleDeleteFile(fileRef);
                          }}
                        >
                          <TfiClose
                            style={{ color: "#686868" }}
                            className="scale-75"
                          />
                        </Button>
                      </div>

                      <Progress
                        value={100}
                        className="bg-linear-to-r from-[#3a54c627] to-[#3A53C6]"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div></div>
              </div>
            )}
          </div>
        </div>
      )}

      <DialogFooter className="fixed w-fit left-130  bottom-3 right-full \">
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
          onClick={handleSubmit}
          className="py-3! px-5! text-xs! bg-[#3A53C6]! rounded-sm! text-white!"
        >
          Continue
        </Button>
      </DialogFooter>
    </div>
  );
}
