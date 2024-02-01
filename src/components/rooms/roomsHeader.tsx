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
                <Button variant={"ghost"}>
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </DialogTrigger>
              <TooltipContent>
                <p>Add new room</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>

          <DialogContent>
            <AddRoomForm />
          </DialogContent>
        </TooltipProvider>
      </Dialog>
    </div>
  );
};

export default RoomsHeader;
