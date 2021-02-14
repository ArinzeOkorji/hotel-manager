import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { Customer } from '../customer';
import { getCustomersList } from '../customer.reducer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'room', 'checkIn', 'checkOut', 'sumTotal'];
  sub: Subscription = new Subscription();
  customersList: Customer[] = [];

  constructor(
    private modal: MatDialog,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.sub.add(this.store.pipe(select(getCustomersList)).subscribe(
      res => {
        this.customersList = res;
      }
    ));
  }

  addNewCustomer(): void {
    this.modal.open(AddCustomerComponent, {
      height: '400px',
      width: '600px',
    });
  }

}
