import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AddRoomComponent } from '../add-room/add-room.component';
import { Room } from '../room';
import { getRoomsList } from '../room.reducer';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnDestroy {
  roomsList: Room[] = [];
  sub!: Subscription;

  constructor(
    private dialogue: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.sub = this.store.pipe(select(getRoomsList)).subscribe(
      res => {
        this.roomsList = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addNewRoom(): void {
    this.dialogue.open(AddRoomComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
