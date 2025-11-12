"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { faCalendarAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Calendar, CalendarDayButton } from "./calendar";
import { DateRange, type PropsRange } from "react-day-picker";
import Link from "next/link";

export default function DateFilter() {
  const [filterTime, setFilterTime] = useState<boolean>(true);
  const today = new Date();
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
    to: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
  });
  const [timeState, setTimeState] = useState<{ from?: string; to?: string }>({
    from: range!.from!.toTimeString().split("")[0],
    to: today.toTimeString().split("")[0],
  });

  const handleToSubmit = (value: string) => {
    console.log(value);
    let newTo = new Date(value);
    setRange({ to: newTo, from: range!.from });
  };

  const handleFromSubmit = (value: string) => {
    console.log(value);
    let newTo = new Date(value);
    setRange({ to: range!.to, from: newTo });
  };

  const handleFilterInterval = (value: number) => {
    if (value === 1) {
      setRange({
        to: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        from: new Date(today.getFullYear(), today.getMonth(), 1),
      });
    } else {
      setRange({
        to: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        from: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - value
        ),
      });
    }
    console.log(range);
  };

  const handleReset = () => {
    let rangeTo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    let rangeFrom = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    let timeStateTo = today.toTimeString().split("")[0];
    let timeStateFrom = range!.from!.toTimeString().split("")[0];
    setTimeState({
      from: timeStateFrom,
      to: timeStateTo,
    });
    setRange({
      to: rangeTo,
      from: rangeFrom,
    });
  };

  const handleFilter = () => {
    // If the page some where you know what function call
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-white!  px-4! rounded-lg! flex w-45! flex-row justify-between text-[#3F3F3F]! font-medium!"
          >
            <span>Last week </span>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#767676", outline: 1 }}
            />
          </Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}  className=" px-7! py-7! bg-white! h-[80vh]! min-h-fit">
          <DialogHeader className="flex flex-row justify-between items-center">
            <DialogTitle className="text-xl! font-semibold! text-[#222222]!">
              Set Trade Period
            </DialogTitle>
               <DialogClose asChild className="">
          <button
            className="rounded-full! px-2! py-1! bg-[#F2F2F2]! hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faXmark} className="text-[#222222]" size="sm" />
          </button>
        </DialogClose>
          </DialogHeader>
          <div className="w-full h-fit flex flex-row justify-between bg-[#F8F8F8] px-1! py-1! rounded-sm text-xs! text-[#414141]!">
            <Button
              className={`
    w-[48%]! rounded-sm!
    ${filterTime == true ? "bg-white!" : "bg-[#F3F3F3] text-gray-600"}
  `}
              onClick={() => {
                setFilterTime(true);
              }}
            >
              {" "}
              Closed at
            </Button>
            <Button
              className={`
    w-[48%]! rounded-sm!
    ${
      filterTime == false
        ? "bg-white! text-[#222222]!"
        : "bg-[#F3F3F3] text-gray-600"
    }
  `}
              onClick={() => {
                setFilterTime(false);
              }}
            >
              Opened at
            </Button>
          </div>

          <div className="w-full flex flex-row items-center">
            <div className="flex flex-col text-start! items-start text-sm! text-[#414141]! w-[30%]">
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(0);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                Today
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(7);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                This week
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(1);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                This month
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(30);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                Last 30 days
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(90);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                Last 90 days
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(120);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                Last 120 days
              </Link>
              <Link
                href={""}
                onClick={() => {
                  handleFilterInterval(365);
                }}
                className="focus:bg-[#F3F5FF]! focus:w-[90%]! focus:text-start! focus:text-[#3A53C6]! rounded-lg! px-2! py-2!"
              >
                Last 365 days
              </Link>
            </div>
            <div className="w-[70%]">
              <Calendar
                mode="range"
                onSelect={setRange}
                defaultMonth={range?.from}
                selected={range}
                numberOfMonths={1}
                className="bg-white! border-[0.5px]!  border-[#DDDDDD]! px-3! py-3! rounded-lg! w-full! "
                classNames={{
                  day_selected: "bg-[#3A53C6] text-white! hover:bg-[#3249B0]!",
                  day_range_start: "bg-[#3A53C6]! text-white! rounded-l-full!",
                  day_range_end: "bg-[#3A53C6]! text-white! rounded-r-full!",
                  day_range_middle: "bg-[#E4E8FF]! text-[#3A53C6]!",
                  day_today:
                    "bg-transparent! text-inherit! font-normal! border-none!",
                }}
                captionLayout="label"
                // showWeekNumber
                formatters={{
                  formatMonthDropdown: (date) => {
                    return date.toLocaleString("default", { month: "long" });
                  },
                }}
                components={{
                  DayButton: ({ children, modifiers, day, ...props }) => {
                    return (
                      <CalendarDayButton
                        day={day}
                        modifiers={modifiers}
                        {...props}
                        className=""
                      >
                        {children}
                        {!modifiers.outside}
                      </CalendarDayButton>
                    );
                  },
                }}
              />
            </div>
          </div>
          <div className="w-full! flex flex-row justify-between">
            <div className="w-[48%]!">
              <span className="text-xs font-medium">From</span>
              <Input
                id="time-to"
                type="time"
                step="1"
                // defaultValue="00:00:00"
                value={timeState!.from!}
                onChange={(e) => setTimeState({ from: e.target.value })}
                className="bg-[#F8F9F9]! px-3! text-sm! rounded-sm! text-[#A9ACBC]!   focus:border-transparent! 
    focus:ring-0! 
    focus:outline-none! 
    active:border-transparent! 
    active:ring-0! 
    active:outline-none!"
              />
            </div>
            <div className="w-[48%]!">
              <span className="text-xs font-medium">To</span>
              <Input
                id="time-to"
                type="time"
                step="1"
                // defaultValue="00:00:00"
                value={timeState!.to!}
                onChange={(e) => setTimeState({ to: e.target.value })}
                className="bg-[#F8F9F9]! px-3! text-sm! rounded-sm! text-[#A9ACBC]!   focus:border-transparent! 
    focus:ring-0! 
    focus:outline-none! 
    active:border-transparent! 
    active:ring-0! 
    active:outline-none! "
              />
            </div>
          </div>

          <div className="w-full bg-[#FCFCFC]! rounded-lg! text-[#686868] px-3!">
            <span
              className="text-xs! text-[#222222]! font-medium
            "
            >
              {" "}
              Selected date range
            </span>

            <div className="flex flex-row text-xs w-[inherit] items-center justify-between">
              <div className="flex flex-row items-center w-[40%]! ">
                <span className="w-full"> Closed at</span>
                <Input
                  type="date"
                  value={range!.to!.toISOString().split("T")[0]}
                  // defaultValue={range!.to!.toISOString().split("T")[0]}
                  className="  focus:border-transparent! 
    focus:ring-0! 
    focus:outline-none! 
    active:border-transparent! 
    active:ring-0! 
    active:outline-none!"
                  onChange={(e) => {
                    handleToSubmit(e.target.value);
                  }}
                />
              </div>
              <div className="mx-4!">-</div>
              <div className="flex flex-row items-center w-[40%]!">
                <span className="w-full"> Opened at</span>
                <Input
                  type="date"
                  value={range!.from!.toISOString().split("T")[0]}
                  // defaultValue={range!.from!.toISOString().split("T")[0]}
                  className="  focus:border-transparent! 
    focus:ring-0! 
    focus:outline-none! 
    active:border-transparent! 
    active:ring-0! 
    active:outline-none!"
                  onChange={(e) => {
                    handleFromSubmit(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <DialogFooter className="mt-5!">
            <Button
              type="submit"
              onClick={handleReset}
              className="px-5! text-sm! text-[#3A53C6]! border-[0.5px]!  border-[#DDDDDD]! rounded-sm!"
            >
              Reset
            </Button>
            <Button
              type="submit"
              onClick={handleFilter}
              className="text-white! bg-[#3A53C6]! text-sm! px-5! rounded-sm!"
            >
              Apply filter
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
