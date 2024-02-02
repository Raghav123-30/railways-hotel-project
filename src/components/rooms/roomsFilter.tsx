import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const RoomsFilter = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-rose-500 font-bold text-xl">Filters</h1>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Availability</AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                <div className="flex gap-2">
                  <RadioGroupItem value="Available"></RadioGroupItem>
                  <label>Available</label>
                </div>
                <div className="flex gap-2">
                  <RadioGroupItem value="Occupied"></RadioGroupItem>
                  <label>Occupied</label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Cleaning Status</AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                <div className="flex gap-2">
                  <RadioGroupItem value="Clean"></RadioGroupItem>
                  <label>Clean</label>
                </div>
                <div className="flex gap-2">
                  <RadioGroupItem value="Dirty"></RadioGroupItem>
                  <label>Dirty</label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Combo</AccordionTrigger>
            <AccordionContent>
              <RadioGroup>
                <div className="flex gap-2">
                  <RadioGroupItem value="Single bed"></RadioGroupItem>
                  <label>Single bed</label>
                </div>
                <div className="flex gap-2">
                  <RadioGroupItem value="Double bed"></RadioGroupItem>
                  <label>Double bed</label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default RoomsFilter;
