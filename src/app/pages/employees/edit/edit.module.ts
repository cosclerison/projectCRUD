import { EditRoutingModule } from './edit-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditModule { }
