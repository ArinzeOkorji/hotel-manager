import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatList, MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatSelect } from '@angular/material/select';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Room } from '../room';
import { getRoomsList } from '../room.reducer';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit, OnDestroy {
  services = [
    {name: 'Gym'},
    {name: 'Spa'},
    {name: 'Breakfast'},
    {name: 'Lunch'},
    {name: 'Dinner'}
  ];

  tiers = [
    {name: 'Standard'},
    {name: 'Deluxe'},
    {name: 'Premium'}
  ];
  roomsList: Room[] = [];
  sub!: Subscription;

  constructor(
    private modalRef: MatDialogRef<AddRoomComponent>,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.sub = this.store.pipe(select(getRoomsList)).subscribe(
      res => this.roomsList = res
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    this.roomsList = Object.assign([], this.roomsList);
    this.roomsList.push(form.value);
    this.store.dispatch({
      type: 'addRoom',
      payload: this.roomsList
    });
    this.closeModal();
  }

  closeModal(): void {
    this.modalRef.close();
  }

}
