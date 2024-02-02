import { Button } from "../ui/button";
import { Input } from "../ui/input";

const RoomsSearch = () => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <Input placeholder="Search..."></Input>
      <Button>Search</Button>
    </div>
  );
};

export default RoomsSearch;
