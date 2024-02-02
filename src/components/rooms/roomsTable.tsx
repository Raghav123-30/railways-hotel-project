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
import room from "@/models/room";

type roomsTableProps = {
  rooms: room[];
};
const RoomsTable = ({ rooms }: roomsTableProps) => {
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
      <TableBody>
        {rooms.map((room) => (
          <TableRow key={room.roomNumber}>
            <TableHead>{room.roomNumber}</TableHead>
            <TableHead>{room.availability}</TableHead>
            <TableHead>{room.cleaningStatus}</TableHead>
            <TableHead>{room.price}</TableHead>
            <TableHead>{room.bedType}</TableHead>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default RoomsTable;
