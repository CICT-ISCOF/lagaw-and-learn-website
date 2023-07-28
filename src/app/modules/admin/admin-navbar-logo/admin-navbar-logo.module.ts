import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AdminNavbarLogoComponent} from './admin-navbar-logo.component'
import {AdminNavbarLogoListComponent} from './admin-navbar-logo-list/admin-navbar-logo-list.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminNavbarLogoComponent, AdminNavbarLogoListComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminNavbarLogoComponent},
        ]),
    ],
})
export class AdminNavbarLogoModule {}
