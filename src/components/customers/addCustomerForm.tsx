import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddCustomerForm = () => {
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1">
        <label>Full name</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <label>Gender</label>
        <Input></Input>
      </div>
      <div className="space-y-1"></div>
      <div className="space-y-1">
        <label>Phone</label>
        <Input></Input>
      </div>
      <div className="space-y-1"></div>
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
      <div className="space-y-1">
        <label>Check-in time</label>
        <Input></Input>
      </div>
      <div className="space-y-1">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default AddCustomerForm;
