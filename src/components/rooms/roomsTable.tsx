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
  if (rooms) {
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
  } else {
    return <p>Data could not be loaded</p>;
  }
};

export default RoomsTable;
