import { redirect } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import MenuTab from "./menuTab";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function Trades() {
  return (
    <div className="">
      <MenuTab />
      <div className="p-4! bg-white mt-3! rounded-md border-[0.5px]!   border-[#DDDDDD]! ">
        <div className="rounded-lg overflow-hidden border-[0.5px]!   border-[#DDDDDD]! text-[#777777]!">
          <Table className="font-urbanist ">
            <TableHeader className=" border-b-[#E8E8E8]!  ">
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
                  Exit
                </TableHead>

                <TableHead className="px-4! py-3! text-[#777777]!">
                  Tags
                </TableHead>
                <TableHead className="px-2! py-3! text-[#777777]!">
                  Date
                </TableHead>
                <TableHead className="px-2! py-3! text-[#777777]! "></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                onClick={() => {
                  redirect(
                    "/dashboard/trades/details?tradeId=1111111&from=journal"
                  );
                }}
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
                <TableCell className="px-4! py-3!">$250.00 </TableCell>
                <TableCell className="px-2! py-3! w-6 transition-opacity duration-150 opacity-0 group-hover:opacity-100">
                  <IoIosArrowForward />
                </TableCell>
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
                <TableCell className="px-4! py-3!">$250.00 </TableCell>

                <TableCell className="px-2! py-3! w-6 transition-opacity duration-150 opacity-0 group-hover:opacity-100">
                  <IoIosArrowForward />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-xs! w-full! px-4! flex flex-row justify-between items-center border-t-[0.5px]! border-t-[#DDDDDD]!">
            {" "}

            <div className="w-fit! ">
                <span> Page 1 of 1</span>
            </div>
            <Pagination className="w-fit!">
              <PaginationContent className="w-fit!">
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
