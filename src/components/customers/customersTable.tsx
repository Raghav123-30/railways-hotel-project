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

const CustomersTable = () => {
  return (
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
          <TableHead>Check-In time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default CustomersTable;
