import { Room } from '../rooms/room';

export interface Customer {
  checkOut: Date;
firstName: string;
lastName: string;
roomName: Room;
checkIn: Date;
sumTotal: number;
}
