import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import RoomsHeader from "@/components/rooms/roomsHeader";
import RoomsTable from "@/components/rooms/roomsTable";
import RoomsFilter from "@/components/rooms/roomsFilter";
import RoomsSearch from "@/components/rooms/roomsSearch";
import axios from "axios";
import room from "@/models/room";

const RoomsPage = async () => {
  let rooms: room[] = [];
  let errorFromServer = false;
  const domain = process.env.PRODUCTION_URL || "";
  const url = domain + "/api/rooms";
  try {
    console.log(`url is ${url}`);
    const response = await axios.get(url);
    const { data } = await response.data;
    rooms = data;
  } catch (error) {
    errorFromServer = true;
    console.log(error);
  }
  return (
    <Card>
      <CardHeader>
        <p>{url}</p>
        <div className="flex justify-end">
          <RoomsHeader />
        </div>
      </CardHeader>
      <CardContent className="flex md:flex-row flex-col gap-4">
        <div className="flex-[1]">
          <RoomsFilter />
        </div>
        <div className="flex-[2]">
          <RoomsSearch />
          {errorFromServer ? (
            <p>something went wrong</p>
          ) : (
            <RoomsTable rooms={rooms}></RoomsTable>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomsPage;
