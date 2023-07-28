import {NgModule} from '@angular/core'
import {AdminExploreComponent} from './admin-explore.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminExploreComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AdminExploreComponent}]),
    ],
})
export class AdminExploreModule {}
