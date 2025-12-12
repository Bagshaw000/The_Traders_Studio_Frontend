import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { authSetupStore, forgotPasswordStore } from "@/app/hook";
import PasswordField from "../ui/PasswordField";
import validator from "validator";
import { useSearchParams } from "next/navigation";


export default function RecoverPassword() {
  const [email, setEmail] = useState<string>("");
  let { step, reset, setStep } = forgotPasswordStore();
  const [validEmail, setValidEmail] = useState<boolean>();
  const [validPassword, setvalidPassword] = useState<boolean>();
  const [pageState, setPageState] = useState<number>(0);
  let authStore = authSetupStore();
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const searchParams = useSearchParams()

  useEffect(() => {
    // This runs once after the initial client-side render
    const nextStep = searchParams.get('step');

    if (nextStep) {
     
      setStep(1);
      // Add client-side logic here (e.g., show a modal, set local storage)
    }
  }, [searchParams]);


  const handleBackToLogin = () => {
    authStore.setStep(3);
  };
  const handleSubmit = () => {
    const isEmail = validator.isEmail(email);
    if (step === 0) {
      if (email !== "" && isEmail == true) {
        setStep(1);
      } else {
        setValidEmail(false);
      }
    } else {
      if (password === newPassword && isPasswordValid === true) {
      } else {
        setvalidPassword(false);
      }
    }
    
  };

  
  return (
    <div className="max-w-sm">
      <div className="mb-8!">
        <h1 className="mb-1.5! font-bold! text-2xl! ">Recover password</h1>
        <div className="flex flex-row text-xs!">
          <p className="font-urbanist"> Regain access to your account </p>
        </div>
      </div>
      {step == 0 ? (
        <div>
          <div className="mb-8!">
            <p className="font-semibold! mb-1! text-sm! ">Email Address</p>
            <Input
              placeholder="Enter your email here"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white! border-[#DDDDDD]! border! px-4! text-[#BDBDBD]! text-xs! rounded-[5px]! w-full"
            />
            {validEmail == false ? (
              <span className="text-xs! text-red-300">
                Enter a valid email address
              </span>
            ) : (
              <></>
            )}
          </div>

          <div className="mb-4!">
            <Button
              onClick={handleSubmit}
              className="w-full bg-[#3A53C6]! text-sm! font-semibold! text-white!  rounded-[5px]!"
            >
              Continue
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-8!">
            <p className="font-semibold! mb-1! text-sm! ">New password</p>
            <PasswordField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onValidChange={setIsPasswordValid}
            />
          </div>
          <div className="mb-8!">
            <p className="font-semibold! mb-1! text-sm! ">
              Re-enter new password
            </p>
            <PasswordField
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onValidChange={setIsPasswordValid}
            />
            {validPassword == false ? (
              <span className="text-xs! text-red-300">
                Password do not match
              </span>
            ) : (
              <></>
            )}
          </div>

          <div className="mb-4!">
            <Button
              onClick={handleSubmit}
              className="w-full bg-[#3A53C6]! max-w-sm text-sm! font-semibold! text-white!  rounded-[5px]!"
            >
              {" "}
              Continue
            </Button>
          </div>
        </div>
      )}

      <div className="w-full text-center">
        <p className="text-xs!  font-medium w-full! text-[#01113F]!">
          <Link href={"/auth"} onClick={handleBackToLogin} className="">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
