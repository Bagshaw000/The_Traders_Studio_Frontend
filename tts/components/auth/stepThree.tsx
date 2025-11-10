import { authSetupStore } from "@/app/hook";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PasswordField } from "@vaadin/password-field";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";

export default function StepThree() {
  let { increase, signUpInfo, step, reset } = authSetupStore();

  const [username, setUsername] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleSubmit = () => {
    if (username !== "") {
      signUpInfo.username == username;
      increase(1);
    }
  };
  return (
    <div className="w-[60%]max-w-sm ">
      <div className="mb-8!">
        <h1 className="mb-1.5! font-bold! text-2xl! ">Almost there</h1>
        <div className="flex flex-row text-sm!">
          <p className="font-urbanist"> Finish creating your account </p>
          <Link href={""} className="ml-2! text-[#3A53C6] hidden">
            <span className="text-[#3A53C6]">Sign in </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#3A53C6" }}
            />{" "}
          </Link>
        </div>
      </div>
      <div className="mb-8!">
        <p className="font-semibold! mb-1! text-sm! ">Username</p>
        <Input
          placeholder="Enter your username here"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white! border-[#DDDDDD]! border! px-4! text-[#BDBDBD]! text-xs! rounded-[5px]! w-full"
        />
      </div>

      <div className="mb-4!">
        <Button
          onClick={handleSubmit}
          className="w-full bg-[#3A53C6]! text-sm! font-semibold! text-white!  rounded-[5px]!"
        >
          {" "}
          Continue
        </Button>
      </div>

      <div className="w-full">
        <p className="text-xs! w-[70%]! text-[#686868]">
          By signing up , you agree to the{" "}
          <u className="mr-1!">
            <Link href={""} className="">
              Terms of Service
            </Link>
          </u>{" "}
          and <br />
          <u>
            <Link href={""} className="">
              Privacy Policy{" "}
            </Link>
          </u>
        </p>
      </div>
    </div>
  );
}
