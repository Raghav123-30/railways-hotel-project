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
import EmployeesHeader from "@/components/employees/employeesHeader";

const EmployeesPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <EmployeesHeader />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of all the employees.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Fullname</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Job</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Salary</TableHead>

              <TableHead className="text-right">Adhar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
          <TableFooter></TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmployeesPage;
