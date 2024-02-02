import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import RoomsHeader from "@/components/rooms/roomsHeader";
import RoomsTable from "@/components/rooms/roomsTable";
import RoomsFilter from "@/components/rooms/roomsFilter";
import RoomsSearch from "@/components/rooms/roomsSearch";

const RoomsPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <RoomsHeader />
        </div>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="flex-[1]">
          <RoomsFilter />
        </div>
        <div className="flex-[2]">
          <RoomsSearch />
          <RoomsTable></RoomsTable>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomsPage;
