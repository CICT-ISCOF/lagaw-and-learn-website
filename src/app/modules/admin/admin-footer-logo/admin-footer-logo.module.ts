import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterLogoComponent } from './admin-footer-logo.component';
import { AdminFooterLogoListComponent } from './admin-footer-logo-list/admin-footer-logo-list.component';



@NgModule({
  declarations: [
    AdminFooterLogoComponent,
    AdminFooterLogoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminFooterLogoModule { }
