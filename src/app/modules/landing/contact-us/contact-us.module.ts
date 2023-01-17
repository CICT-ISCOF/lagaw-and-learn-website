import {CONTACT_US_ROUTING} from './../../../app-core/routes/contact-us.routing'
import {RouterModule} from '@angular/router'
import {SharedModule} from './../../../shared/shared.module'
import {ContactUsComponent} from './contact-us.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

@NgModule({
    declarations: [ContactUsComponent],
    imports: [SharedModule, RouterModule.forChild(CONTACT_US_ROUTING)],
})
export class ContactUsModule {}
