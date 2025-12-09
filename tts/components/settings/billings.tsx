"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Progress } from "../ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { redirect } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { FaCircleCheck } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Billing() {
  const [accAmount, setAccAmount] = useState<number>(14);
  return (
    <div className="h-full">
      <div className="mb-5!">
        <p className="text-2xl font-semibold">Plans & Billings</p>
        <span className="font-urbanist text-sm font-medium text-[#686868]">
          Your plans, payments, and upgrades, all in one place.
        </span>
      </div>

      <div className="flex justify-between mb-10!">
        <div className="w-[48%] border-[0.5px]! border-[#DDDDDD]! rounded-lg!   px-4! py-5!">
          <p className="font-semibold text-xl ">Current plan</p>

          <hr className="text-[#DDDDDD]! text-[0.5px]! my-5!" />

          <div className="flex flex-row items-end justify-between">
            <div>
              <p className="text-sm px-2! py-1!  mb-2! text-center  font-urbanist text-[#3A53C6] font-medium bg-[#F3F5FF] rounded-full">
                Pro plan
              </p>
              <p>
                $10 <span className="text-sm text-[#686868]">/Month</span>
              </p>
            </div>

            <Dialog>
              <DialogTrigger className="bg-[#3A53C6]! text-white! px-3! py-1.5! text-sm! rounded-md!">
                Upgrade
              </DialogTrigger>
              <DialogContent
                className="px-6! py-10! min-w-[60vw] bg-white!"
                showCloseButton={false}
              >
                <DialogHeader className="relative text-center! w-full!">
                  <DialogTitle className="font-semibold! text-lg!">
                    Level up your trading experience
                  </DialogTitle>

                  <DialogDescription className="font-urbanist">
                    Unlock pro tools and expand your portfolio limits.
                  </DialogDescription>

                  <DialogClose asChild className="absolute left-[60vw] bottom-10 ">
                    <Button className="bg-[#F2F2F2]! rounded-full! p-2! h-fit w-fit">
                      <TfiClose
                        style={{ color: "#222222" }}
                        className="scale-75"
                      />
                    </Button>
                  </DialogClose>
                </DialogHeader>

                <div className="flex flex-row justify-between">
                  <div className="w-[32%]  border-[0.5px]! h-[350px] border-[#DDDDDD]! rounded-lg!   px-4! py-5!">
                    <p className="font-semibold text-xl ">Starter plan</p>

                    <div className="flex flex-row justify-between">
                      <div className="w-full">
                        <p>
                          $10{" "}
                          <span className="text-sm text-[#686868]">per Month</span>
                        </p>
                      </div>
                    </div>
                    <hr className="text-[#DDDDDD]! text-[0.5px]! my-5!" />

                    <div className="h-[60%]">
                      <div className="font-urbanist text-sm text-[#686868]" >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#DDDDDD" }}
                        />

                        <span>Up to 1 accounts</span>
                      </div>
                    </div>

                    <Button className="w-full text-sm! rounded-md! font-medium! bg-[#F3F5FF]! text-[#3A53C6]!">Switch plan</Button>
                  </div>

                  <div className="w-[32%] border-[0.5px]! border-[#3A53C6]! rounded-lg!   px-4! py-5!">
                    <p className="font-semibold text-xl ">Starter plan</p>

                    <div className="flex flex-row justify-between">
                      <div className="w-full">
                        <p>
                          $10{" "}
                          <span className="text-sm text-[#686868]">per Month</span>
                        </p>
                      </div>
                    </div>
                    <hr className="text-[#DDDDDD]! text-[0.5px]! my-5!" />

                    <div className="h-[60%]">
                      <div className="font-urbanist text-sm text-[#686868]" >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#DDDDDD" }}
                        />

                        <span>Up to 1 accounts</span>
                      </div>
                    </div>

                     <Button className="w-full text-sm! rounded-md! font-medium! bg-[#F3F5FF]! border-[0.5px]! border-[#F3F5FF]!  bg-linear-to-r from-[#3A53C6] to-[#6F119E] text-white!">Switch plan</Button>
                  </div>
                  <div className="w-[32%] border-[0.5px]! border-[#DDDDDD]! rounded-lg!   px-4! py-5!">
                    <p className="font-semibold text-xl ">Unlimited plan</p>

                    <div className="flex flex-row justify-between">
                      <div className="w-full">
                        <p>
                          $10{" "}
                          <span className="text-sm text-[#686868]">per Month</span>
                        </p>
                      </div>
                    </div>
                    <hr className="text-[#DDDDDD]! text-[0.5px]! my-5!" />

                    <div className="h-[60%]">
                      <div className="font-urbanist text-sm text-[#686868]" >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#DDDDDD" }}
                        />

                        <span>Up to 1 accounts</span>
                      </div>
                    </div>

                     <Button className="w-full text-sm! rounded-md! font-medium! bg-[#F3F5FF]! text-[#3A53C6]!">Switch plan</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="w-[48%] h-[inherit] border-[0.5px]! border-[#DDDDDD]! rounded-lg!   px-4! py-5!">
          <p className="font-semibold text-xl ">Usage Summary</p>

          <hr className="text-[#DDDDDD]! text-[0.5px]! my-5!" />

          <div className="flex flex-row items-start justify-between">
            <div className="w-[40%]">
              <p className="text-xl   font-urbanist font-semibold  rounded-full">
                1/6
              </p>
              <Progress
                value={accAmount}
                className="bg-gray-200 my-2!"
                indicatorClassName="bg-[#3A53C6]"
              />
              <p className="text-xs text-[#686868] font-urbanist">
                Accounts created
              </p>
            </div>
            <div className="w-[40%] ">
              <p className="text-xl text-start font-semibold font-urbanist rounded-full">
                1GB/5GB
              </p>
              <Progress
                value={50}
                className="bg-gray-200 my-2!"
                indicatorClassName="bg-[#04CE00]"
              />
              <p className="text-xs font-urbanist text-[#686868]">
                Storage used
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Billing history */}
      <div className="px-4! py-4! border-[0.5px]! border-[#DDDDDD]! rounded-lg">
        <div className="mb-5!">
          <p className="text-lg font-medium">Billings history</p>
          <span className="font-urbanist text-sm font-medium text-[#686868]">
            Your plans, payments, and upgrades, all in one place.
          </span>
        </div>

        <div className="rounded-lg overflow-hidden border-[0.5px]!   border-[#DDDDDD]! text-[#777777]!">
          <Table className="font-urbanist ">
            <TableHeader className=" border-b-[#E8E8E8]!  ">
              <TableRow>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Date
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Plan
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Amount
                </TableHead>
                <TableHead className="px-4! py-3! text-[#777777]!">
                  Status
                </TableHead>

                <TableHead className="px-4! py-3! text-[#777777]!">
                  Receipt
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                // onClick={() => {
                //   redirect(
                //     "/dashboard/trades/details?tradeId=1111111&from=journal"
                //   );
                // }}
                className=" font-semibold py-3.5 group text-[#333333]! border-t-[0.5px]! border-t-[#DDDDDD]!"
              >
                <TableCell className="px-4! py-3!">INV001</TableCell>
                <TableCell className="px-4! py-3!">
                  {" "}
                  <div className="px-2! text-xs py-1! text-[#30A12E] font-medium! bg-[#ECFDEB] w-fit h-fit! rounded-md">
                    BUY
                  </div>
                  <div className="px-3! hidden text-xs py-1! text-[#B33D2F]  font-medium! bg-[#FFF0EE] w-fit h-fit! rounded-lg">
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
              </TableRow>

              <TableRow
                onClick={() => {
                  redirect("");
                }}
                className="py-3.5 group font-semibold text-[#333333]! border-t-[0.5px]! border-t-[#DDDDDD]!"
              >
                <TableCell className="px-4! py-3!">INV001</TableCell>
                <TableCell className="px-4! py-3!">
                  {" "}
                  <div className="px-2! text-xs py-1! text-[#30A12E] font-medium! bg-[#ECFDEB] w-fit h-fit! rounded-md">
                    BUY
                  </div>
                  <div className="px-3! hidden text-xs py-1! text-[#B33D2F]  font-medium! bg-[#FFF0EE] w-fit h-fit! rounded-lg">
                    SELL
                  </div>
                </TableCell>
                <TableCell className="px-4! py-3!">
                  <div className=" text-xs  font-semibold! text-[#30A12E] w-fit h-fit! rounded-lg">
                    790
                  </div>
                </TableCell>
                <TableCell className="px-4! py-3!">
                  <span className="px-2! text-xs! border-[#E3E3E3]! border-[0.5px]! text-[#3F3F3F]! rounded-md py-1!">
                    {" "}
                    spiky trade
                  </span>
                </TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
