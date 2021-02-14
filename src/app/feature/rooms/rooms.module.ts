import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { SingleRoomComponent } from './single-room/single-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { roomReducer } from './room.reducer';


@NgModule({
  declarations: [RoomsComponent, SingleRoomComponent, AddRoomComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FlexLayoutModule,
    StoreModule.forFeature('rooms', roomReducer),
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ],
  entryComponents: [
    AddRoomComponent
  ]
})
export class RoomsModule { }
