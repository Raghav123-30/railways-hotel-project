import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RoomsHeader from "@/components/rooms/roomsHeader";

const RoomsPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <RoomsHeader />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of rooms.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Room number</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Cleaning status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Bed type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
          <TableFooter></TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RoomsPage;
