import { authSetupStore } from "@/app/hook";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PasswordField from "../ui/PasswordField";

export default function Login() {
  let { increase, signUpInfo, step, reset,setStep } = authSetupStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  

  const handleSubmit = () => {
    if (email !== "") {
      signUpInfo.username == email;
      increase(1);
    }
  };
  const handleSignUp = () => {
    setStep(0);
  };
  return (
    <div className="w-[60%] max-w-sm">
      <div className="mb-8!">
        <h1 className="mb-1.5! font-bold! text-2xl! ">
          Sign into The Trader Studio
        </h1>
        <div className="flex flex-row text-sm!">
          <p className="font-urbanist"> Don't have an account? </p>
          <Link onClick={handleSignUp} className="ml-2! text-[#3A53C6] " href={""}>
            <span className="text-[#3A53C6]">Get started </span>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#3A53C6" }} />
          </Link>
        </div>
      </div>
      <div className="mb-6!">
        <p className="font-semibold! mb-1! text-sm! ">Email Address</p>
        <Input
          placeholder="Enter your email here"
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white! border-[#DDDDDD]! border! px-4! text-[#BDBDBD]! text-xs! rounded-[5px]! w-full"
        />
      </div>
      <div className="mb-8!">
        <p className="font-semibold! mb-1! text-sm! ">Password</p>
        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onValidChange={setIsPasswordValid}
        />
          
          <Link href={"/forgotpassword"}><p className="text-end mt-2! text-xs! text-[#3A53C6]">Forgot password?</p></Link>
        
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

      
      <div className="flex flex-row items-center mb-4! justify-between text-[#DDDDDD]">
        <hr className="w-[45%]" />
        <p className="text-xs! text-[#979696]">OR</p>
        <hr className="w-[45%]" />
      </div>
      <div className="mb-4!">
        <Button
          onClick={() => {}}
          className="w-full bg-transparent! text-[#414141]! text-sm!  border-[#DEDEDE]! border! rounded-[5px]!"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Continue with Google
        </Button>
      </div>
      <div className="w-full">
        <p className="text-xs! w-full! text-[#686868]">
          By signing up , you agree to the <u className="mr-1!"><Link href={""} className="">Terms of Service</Link></u> and
          <br/>
          <u className="">
            <Link href={""} className="">
              Privacy Policy{" "}
            </Link>
          </u>
        </p>
      </div>
    </div>
  );
}
