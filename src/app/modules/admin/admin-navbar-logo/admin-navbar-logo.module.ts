import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarLogoComponent } from './admin-navbar-logo.component';
import { AdminNavbarLogoListComponent } from './admin-navbar-logo-list/admin-navbar-logo-list.component';



@NgModule({
  declarations: [
    AdminNavbarLogoComponent,
    AdminNavbarLogoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminNavbarLogoModule { }
