import { Card, CardContent, CardHeader } from "@/components/ui/card";

import CustomersHeader from "@/components/customers/customersHeader";
import CustomersTable from "@/components/customers/customersTable";
import CustomersSearch from "@/components/customers/customersSearch";
import CustomersFilter from "@/components/customers/customersFilter";

const CustomersPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <CustomersHeader />
        </div>
      </CardHeader>
      <CardContent>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="flex-[1/2]">
            <CustomersFilter />
          </div>
          <div className="flex-1">
            <CustomersSearch />
            <CustomersTable />
          </div>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default CustomersPage;
