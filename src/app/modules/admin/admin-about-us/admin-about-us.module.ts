import {NgModule} from '@angular/core'
import {AdminAboutUsComponent} from './admin-about-us.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminAboutUsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AdminAboutUsComponent}]),
    ],
})
export class AdminAboutUsModule {}
