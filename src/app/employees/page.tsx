import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import EmployeesHeader from "@/components/employees/employeesHeader";
import EmployeesTable from "@/components/employees/employeesTable";
import EmplpoyeesFilter from "@/components/employees/employeesFilter";
import EmployeesSearch from "@/components/employees/employeesSearch";

const EmployeesPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <EmployeesHeader />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-4">
        <div className="flex-[1]">
          <EmplpoyeesFilter />
        </div>
        <div className="flex-[2]">
          <EmployeesSearch />
          <EmployeesTable></EmployeesTable>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeesPage;
