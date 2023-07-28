import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AdminFooterLogoComponent} from './admin-footer-logo.component'
import {AdminFooterLogoListComponent} from './admin-footer-logo-list/admin-footer-logo-list.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminFooterLogoComponent, AdminFooterLogoListComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminFooterLogoComponent},
        ]),
    ],
})
export class AdminFooterLogoModule {}
