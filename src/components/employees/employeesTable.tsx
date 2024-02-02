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
const EmployeesTable = () => {
  return (
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

          <TableHead>Adhar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default EmployeesTable;
