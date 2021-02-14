import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.scss']
})
export class SingleRoomComponent implements OnInit {
  @Input()
  room!: Room;

  constructor() { }

  ngOnInit(): void {
  }

}
