import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function StepFour() {
  return (
    <div className="flex flex-col items-start">
      <p className="ml-0! font-medium text-sm!">Broker </p>
      <Select>
        <SelectTrigger className="w-full border! border-[#DDDDDD]! px-4! text-[#BDBDBD]! text-xs! rounded-md!">
          <SelectValue placeholder="Select your trading platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
