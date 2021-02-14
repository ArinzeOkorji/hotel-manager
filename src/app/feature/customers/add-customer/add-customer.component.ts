import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Room } from '../../rooms/room';
import * as moment from 'moment';
import { Customer } from '../customer';
import { getCustomersList } from '../customer.reducer';
import { getRoomsList } from '../../rooms/room.reducer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  customersList: Customer[] = [];
  selectedRoom!: Room;
  sub: Subscription = new Subscription();
  diffDays!: number;
  sumTotal!: number;
  roomsList: Room[] = [];

  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<AddCustomerComponent>
  ) { }

  ngOnInit(): void {
    this.sub.add(this.store.pipe(select(getCustomersList)).subscribe(
      res => {
        this.customersList = res;
      }
    ));
    this.sub.add(this.store.pipe(select(getRoomsList)).subscribe(
      res => this.roomsList = res
    ));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm): void {
    form.value.sumTotal = this.sumTotal;
    this.customersList = Object.assign([], this.customersList);
    this.customersList.push(form.value);
    this.store.dispatch({
      type: 'addNewCustomer',
      payload: this.customersList
    });
    this.closeModal();
  }

  calculateSum(data?: any): void {
   if (data) {
    if (data.checkIn && data.checkOut) {
      const startDate = moment(data.checkIn);
      const endDate = moment(data.checkOut);
      this.diffDays = endDate.diff(startDate, 'days');
    }
   }
   if (this.selectedRoom && this.diffDays) {
    this.sumTotal = this.diffDays * this.selectedRoom.roomPrice;
   }
  }

}
