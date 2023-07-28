import {NgModule} from '@angular/core'
import {AdminNewsAndUpdatesComponent} from './admin-news-and-updates.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminNewsAndUpdatesComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminNewsAndUpdatesComponent},
        ]),
    ],
})
export class AdminNewsAndUpdatesModule {}
