"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddRoomForm = () => {
  const cleanOptions = ["cleaned", "dirty"];
  const availableOptions = ["Available", "Occupied"];
  const bedType = ["Single Bed", "Double Bed"];
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1">
        <label>Room number</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Availability</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>
              {availableOptions.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <label>Cleaning status</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>
              {cleanOptions.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label>Price</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Bed type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel></SelectLabel>
              {bedType.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default AddRoomForm;
