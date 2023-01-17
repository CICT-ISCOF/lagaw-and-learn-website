import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoInternetComponent } from './no-internet/no-internet.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    NoInternetComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
