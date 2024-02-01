"use client";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddEmployeeForm from "./addEmployeeForm";
const EmployeesHeader = () => {
  return (
    <div className="flex items-center">
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger asChild>
                <PlusIcon className="w-6 h-6" />
              </DialogTrigger>
              <TooltipContent>
                <p>Add new employee</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>

          <DialogContent>
            <AddEmployeeForm />
          </DialogContent>
        </TooltipProvider>
      </Dialog>
    </div>
  );
};

export default EmployeesHeader;
