import { CiFilter, CiSearch } from "react-icons/ci";
import DateFilter from "../ui/datefilter";
import { Input } from "../ui/input";
import { ChevronDown, Link } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function MenuTab() {
  return (
    <div className="w-full  flex flex-row justify-between mb-5!">
      <div className="flex w-[45%] flex-row justify-between text-[#3F3F3F]!">
        <div className="flex flex-row mr">
          <DateFilter />
          <div className="ml-2! text-sm   font-medium ">
            <Select>
              <SelectTrigger className="w-[180px] bg-white! px-3! rounded-md!">
                <SelectValue placeholder="Trade direction" />
                {/* Override the default icon — put an empty span or your own icon */}
              </SelectTrigger>
              <SelectContent className="bg-white!">
                <SelectItem value="light">Buy</SelectItem>
                <SelectItem value="dark">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="ml-2! text-sm font-medium ">
            <Select>
              <SelectTrigger className="w-[180px] bg-white! px-3! rounded-md!">
                <SelectValue placeholder="Tags" />
              </SelectTrigger>
              <SelectContent className="bg-white!">
                {/* List of all tags created */}
                <SelectItem value="light">Buy</SelectItem>
                <SelectItem value="dark">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex ml-2! items-center text-[#767676] border-[0.5px]! border-[#ECEAEA]! rounded-md! bg-white! w-50!">
        <CiSearch className="ml-2! " size={30} />
        <Input
          type="search"
          className="bg-white!  ml-1! text-sm! mr-4! focus-visible:ring-0! focus-visible:ring-offset-0!"
          placeholder="Search trade"
        />
      </div>
    </div>
  );
}
