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

const RoomsTable = () => {
  return (
    <Table>
      <TableCaption>A list of rooms.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Room number</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead>Cleaning status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Bed type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default RoomsTable;
