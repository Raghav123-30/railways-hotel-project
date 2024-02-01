"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-select";
const AddEmployeeForm = () => {
  const jobs = [
    "Front Desk Clerks",
    "Porters",
    "Housekeeping",
    "Kitchen Staff",
    "Room Service",
    "Waiter/Waitress",
    "Manager",
    "Accountant",
    "Chef",
  ];
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1">
        <label>Full name</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Age</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Gender</label>
        <RadioGroup className="flex gap-4">
          <div className="flex gap-2 items-center">
            <RadioGroupItem value="male"></RadioGroupItem>
            <label>male</label>
          </div>
          <div className="flex gap-2 items-center">
            <RadioGroupItem value="female"></RadioGroupItem>
            <label>female</label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-1">
        <label>Phone</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Job</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a job" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>
              {jobs.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <label>Email</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Salary</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Adhar</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
