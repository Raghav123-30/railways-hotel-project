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
import AddRoomForm from "./addRoomForm";
const RoomsHeader = () => {
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
                <p>Add new room</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>

          <DialogContent className="overflow-y-scroll max-h-screen">
            <AddRoomForm />
          </DialogContent>
        </TooltipProvider>
      </Dialog>
    </div>
  );
};

export default RoomsHeader;
