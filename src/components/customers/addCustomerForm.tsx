"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
const AddCustomerForm = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1">
        <label>Full name</label>
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
        <label>Country</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Roomnumber</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Deposit</label>
        <Input></Input>
      </div>
      <div className="flex flex-col space-y-1">
        <label>Check-in time</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                " justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-1">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default AddCustomerForm;
