import { CiFilter, CiSearch } from "react-icons/ci";
import DateFilter from "../ui/datefilter";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MenuTab() {
  return (
    <div className="w-full  flex flex-row justify-between mb-5!">
      <div className="flex flex-row mr">
        <DateFilter />
        <div className="flex ml-2! items-center text-[#767676] border-[0.5px]! border-[#ECEAEA]! rounded-md! bg-white! w-50!">
          <CiSearch className="ml-2! " size={30} />
          <Input
            type="search"
            className="bg-white!  ml-1! text-sm! mr-4! focus-visible:ring-0! focus-visible:ring-offset-0!"
            placeholder="Search trade"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mr-2!">
          <Button className="border-[0.5px]! px-4! border-[#DDDDDD]! bg-white! rounded-md! text-[#01113F] font-medium!">
            {" "}
            Filters <CiFilter className="text-[#222222]!" />
          </Button>
        </div>
        <div>
          <Link
            href={""}
            className="px-6! py-1! rounded-md! text-white! text-sm!  justify-between flex flex-row bg-[#3A53C6]!"
          >
            <div className=" my-auto! text-center  flex justify-between items-center">
              <span className="mr-2!">Add trade </span>{" "}
              <span className="text-xl">+</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
