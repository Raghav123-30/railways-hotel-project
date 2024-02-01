"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddEmployeeForm = () => {
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
      <div className="space-y-1"></div>
      <div className="space-y-1">
        <label>Phone</label>
        <Input></Input>
      </div>
      <div className="space-y-1"></div>
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
