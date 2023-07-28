import {NgModule} from '@angular/core'
import {AdminFaqsComponent} from './admin-faqs.component'
import {AdminFaqListComponent} from './admin-faq-list/admin-faq-list.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminFaqsComponent, AdminFaqListComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AdminFaqsComponent}]),
    ],
})
export class AdminFaqsModule {}
