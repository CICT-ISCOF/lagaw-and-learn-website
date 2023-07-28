import {NgModule} from '@angular/core'
import {AdminProfileComponent} from './admin-profile.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminProfileComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AdminProfileComponent}]),
    ],
})
export class AdminProfileModule {}
