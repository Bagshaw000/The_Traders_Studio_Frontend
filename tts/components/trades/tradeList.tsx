import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { redirect } from "next/navigation";

export default function TradeList() {
  const [tradeStat, setTradeStat] = useState<string>("open");

  return (
    <div>
      {/* Toggle type of trade */}
      <div className=" mb-5! font-urbanist text-sm! flex items-center gap-x-2 rounded-lg text-[#767676]! font-semibold! bg-[#F1F1F1]! w-fit px-0.5! py-0.5! h-fit">
        {tradeStat == "open" ? (
          <Link
            href={""}
            className="bg-white! text-[#3F3F3F]! px-3.5!  py-2!  rounded-md "
          >
            {" "}
            Open
          </Link>
        ) : (
          <Link
            href={""}
            className=" bg-transparent! px-3.5!  py-2!  rounded-md "
            onClick={() => {
              setTradeStat("open");
            }}
          >
            {" "}
            Open
          </Link>
        )}

        {tradeStat == "closed" ? (
          <Link
            href={""}
            className="bg-white! text-[#3F3F3F]! px-3.5!  py-2!  rounded-md "
          >
            {" "}
            Closed
          </Link>
        ) : (
          <Link
            href={""}
            className=" bg-transparent! px-3.5!  py-2!  rounded-md "
            onClick={() => {
              setTradeStat("closed");
            }}
          >
            {" "}
            Closed
          </Link>
        )}
        {tradeStat == "pending" ? (
          <Link
            href={""}
            className="bg-white! text-[#3F3F3F]! px-3.5!  py-2!  rounded-md "
          >
            {" "}
            Pending
          </Link>
        ) : (
          <Link
            href={""}
            className=" bg-transparent! px-3.5!  py-2!  rounded-md "
            onClick={() => {
              setTradeStat("pending");
            }}
          >
            {" "}
            Pending
          </Link>
        )}
      </div>

      {/* Table */}

      <div className="rounded-lg overflow-hidden border-[0.5px]! border-[#DDDDDD]! text-[#777777]!">
          <Table className="font-urbanist ">
            <TableHeader className=" border-b-[#E8E8E8]! border-b-[0.5px]! ">
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
              <TableRow onClick={()=>{redirect("/dashboard/trades/details?tradeId=1111111")}} className="py-3.5 text-[#333333]! border-b-[0.5px]! border-b-[#DDDDDD]!">
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
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-2! py-3!">$250.00</TableCell>
              </TableRow>

              <TableRow onClick={()=>{redirect("")}} className="py-3.5 text-[#333333]! border-b-[0.5px]! border-b-[#DDDDDD]!">
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
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-4! py-3!">$250.00</TableCell>
                <TableCell className="px-2! py-3!">$250.00</TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </div>
    </div>
  );
}
