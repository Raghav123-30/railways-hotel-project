import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EmployeesSearch = () => {
  return (
    <div>
      <div className="flex gap-2 items-center mb-4">
        <Input placeholder="Search..."></Input>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default EmployeesSearch;
