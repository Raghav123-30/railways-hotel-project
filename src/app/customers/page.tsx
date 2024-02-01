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
import CustomersHeader from "@/components/customers/customersHeader";

const CustomersPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <CustomersHeader />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of all the customers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Fullname</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Room-number</TableHead>
              <TableHead>Deposit</TableHead>
              <TableHead className="text-right">Check-In time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
          <TableFooter></TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomersPage;
