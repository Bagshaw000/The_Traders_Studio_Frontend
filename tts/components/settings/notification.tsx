"use client";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";

export default function NotificationSetting() {
  return (
    <div className="h-full">
      <div className="mb-5!">
        <p className="text-2xl font-semibold">Notifications</p>
        <span className="font-urbanist text-sm font-medium text-[#686868]">
          Personal control over alerts 
        </span>
      </div>

      <div className="mb-5!">
        <p className="text-lg font-medium"> Trade triggers notification</p>
        <span className="font-urbanist text-xs font-medium text-[#686868]">
          Choose which notification to receive
        </span>
      </div>

      <div className="flex flex-row justify-between mb-10!  font-medium text-[#3F3F3F]">
        <div className="text-xs flex items-center ">
          <div className="w-[7px] h-[7px] mr-2! rounded-full! bg-[#3F3F3F]">
            {" "}
          </div>
          <span className="mr-5!"> Trade opened</span>
          <Checkbox
            className="border-[#DDDDDD]!  data-[state=checked]:bg-[#3A53C6]!
    border-[0.5px]! data-[state=checked]:text-white!     text-center! rounded-[5px]!"
          />
        </div>

        <div className="text-xs flex items-center ">
          <div className="w-[7px] h-[7px] mr-2! rounded-full! bg-[#3F3F3F]">
            {" "}
          </div>
          <span className="mr-5!"> Trade closed</span>
          <Checkbox
            className="border-[#DDDDDD]!  data-[state=checked]:bg-[#3A53C6]!
    border-[0.5px]! data-[state=checked]:text-white!     text-center! rounded-[5px]!"
          />
        </div>

        <div className="text-xs flex items-center ">
          <div className="w-[7px] h-[7px] mr-2! rounded-full! bg-[#3F3F3F]"></div>
          <span className="mr-5!"> Margin alert </span>
          <Checkbox
            className="border-[#DDDDDD]!  data-[state=checked]:bg-[#3A53C6]!
    border-[0.5px]! data-[state=checked]:text-white!     text-center! rounded-[5px]!"
          />
        </div>
      </div>

      <div className="flex justify-between items-end mb-5!">
        <div>
          {" "}
          <p className="text-lg font-medium text-[#222222]">
            Email notifications
          </p>
          <p className="text-xs font-urbanist text-[#686868]">
            Receive newsletters, promotional offers, and more.
          </p>
        </div>
        <Switch
          id="airplane-mode"
          className=" text-white! rounded-lg! data-[state=checked]:bg-[#3A53C6]! 
    data-[state=unchecked]:bg-gray-300! "
        />
      </div>

      <div className="flex justify-between items-end">
        <div>
          {" "}
          <p className="text-lg font-medium text-[#222222]">
            Email notifications
          </p>
          <p className="text-xs font-urbanist text-[#686868]">
            Receive newsletters, promotional offers, and more.
          </p>
        </div>
        <Switch
          id="airplane-mode"
          className=" text-white! rounded-lg! data-[state=checked]:bg-[#3A53C6]! 
    data-[state=unchecked]:bg-gray-300! "
        />
      </div>
    </div>
  );
}
