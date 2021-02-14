import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        loadChildren: () => import('../feature/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'rooms',
        loadChildren: () => import('../feature/rooms/rooms.module').then(m => m.RoomsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
