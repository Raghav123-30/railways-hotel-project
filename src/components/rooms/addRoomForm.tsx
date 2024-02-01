"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddRoomForm = () => {
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1">
        <label>Room number</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Availability</label>
        <Input></Input>
      </div>
      <div className="space-y-1"></div>

      <div className="space-y-1"></div>

      <div className="space-y-1">
        <label>Price</label>
        <Input></Input>
      </div>

      <div className="space-y-1">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default AddRoomForm;
