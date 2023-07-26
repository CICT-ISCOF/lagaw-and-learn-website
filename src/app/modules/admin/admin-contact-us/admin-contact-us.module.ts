import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {AdminContactUsComponent} from './admin-contact-us.component'
import {SharedModule} from 'app/shared/shared.module'
import {AdminContactUsListComponent} from './admin-contact-us-list/admin-contact-us-list.component'

@NgModule({
    declarations: [AdminContactUsComponent, AdminContactUsListComponent],
    imports: [SharedModule, RouterModule.forChild([])],
})
export class AdminContactUsModule {}
