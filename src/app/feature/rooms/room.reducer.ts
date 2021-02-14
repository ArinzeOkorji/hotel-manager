import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/app.state';
import { Room } from './room';

interface IRoomAction {
  type: string;
  payload: Room[];
}

interface RoomState extends State {
  rooms: Room[];
}

const initialRoomState: RoomState = {
  rooms: [
    {
    roomName: 'Vaycay-Okay',
roomNumber: 1,
roomPrice: 70000,
service: ['Breakfast'],
tier: 'Standard'}
]
};

export function roomReducer(state = initialRoomState, action: IRoomAction): RoomState {
  switch (action.type) {
    case 'addRoom':
      return {
        ...state,
        rooms: action.payload
      };
      default:
        return state;
  }
}


const getRoomsState = createFeatureSelector<RoomState>('rooms');

export const getRoomsList = createSelector(
  getRoomsState,
  state => {
    return state.rooms;
  }
);
