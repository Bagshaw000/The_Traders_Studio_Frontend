"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { authSetupStore } from "@/app/hook";

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  onValidChange?: (isValid: boolean) => void; // <-- new
}

export default function PasswordField({
  value,
  onChange,
  onValidChange,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  let { increase, signUpInfo, step, reset } = authSetupStore();

  const toggleVisibility = () => setVisible(!visible);

  const checks = {
    length: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    number: /\d/.test(value),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
  };

  const allValid =
    checks.length == true &&
    checks.upper == true &&
    checks.lower == true &&
    checks.symbol == true;

  useEffect(() => {
    console.log(allValid);

    if (onValidChange) onValidChange(allValid);
  }, [value, onValidChange]);

  return (
    <div className="flex flex-col gap-3 w-full ">
      {/* Password input */}
      <div className="relative">
        <Input
          type={visible ? "text" : "password"}
          placeholder="Enter password"
          className="px-4! text-xs!  text-[#BDBDBD]! bg-white! rounded-sm! border-[#DDDDDD]! border! focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
          value={value}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {visible ? (
            <EyeOff size={18} style={{ color: "#BDBDBD" }} />
          ) : (
            <Eye size={18} style={{ color: "#BDBDBD" }} />
          )}
        </button>
      </div>

      {/* Password strength checks */}

      {step < 2 ? (
        <div className="space-y-1 text-xs! flex flex-wrap gap-2">
          <div className="flex flex-wrap justify-between">
            <div className="mr-1.5!">
              <CheckItem label="8 characters" valid={checks.length} />
            </div>

            <div className="mr-1.5!">
              <CheckItem label="Uppercase" valid={checks.upper} />
            </div>
          </div>
          <div className="mr-1.5!">
            <CheckItem label="Lowercase" valid={checks.lower} />
          </div>
          <CheckItem label="Special character" valid={checks.symbol} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

/* ✅ Subcomponent for check items */
function CheckItem({ label, valid }: { label: string; valid: boolean }) {
  return (
    <div className="flex items-center flex-row-reverse gap-2 bg-[#E7E7E7] w-fit px-2! py-1! rounded-2xl">
      {valid ? (
        <Check size={14} className="text-green-500" />
      ) : (
        // <X size={14} className="text-red-400" />
        <Check size={14} className="text-[#BDBDBD]" />
      )}
      <span className={valid ? "text-green-600" : "text-[#BDBDBD]"}>
        {label}
      </span>
    </div>
  );
}
