import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const EmplpoyeesFilter = () => {
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
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-rose-500 font-bold text-xl">Filters</h1>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Gender</AccordionTrigger>
              <AccordionContent>
                <RadioGroup>
                  <div className="flex gap-2">
                    <RadioGroupItem value="Male"></RadioGroupItem>
                    <label>Male</label>
                  </div>
                  <div className="flex gap-2">
                    <RadioGroupItem value="Female"></RadioGroupItem>
                    <label>Female</label>
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Job</AccordionTrigger>
              <AccordionContent>
                <RadioGroup>
                  {jobs.map((item) => (
                    <div className="flex gap-2" key={item}>
                      <RadioGroupItem value={item}></RadioGroupItem>
                      <label>{item}</label>
                    </div>
                  ))}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default EmplpoyeesFilter;
