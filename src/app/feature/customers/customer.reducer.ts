import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/app.state';
import { Customer } from './customer';

export interface CustomerState extends State {
  customers: Customer[];
}

interface CustomerAction {
  type: string;
  payload: any;
}

export function customerReducer(state: any = [], action: CustomerAction): CustomerState {
switch (action.type) {
  case 'addNewCustomer':
    console.log({
      ...state,
      customers: action.payload
    });
    return {
      ...state,
      customers: action.payload
    };
    default:
    return state;
}
}

const getCustomersState = createFeatureSelector<CustomerState>('customers');

export const getCustomersList = createSelector(
  getCustomersState,
  state => {
    return state.customers;
  }
);
