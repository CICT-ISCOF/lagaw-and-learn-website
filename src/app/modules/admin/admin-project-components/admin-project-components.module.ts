import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AdminProjectComponentListComponent} from './admin-project-component-list/admin-project-component-list.component'
import {AdminProjectComponentFilterComponent} from './admin-project-component-filter/admin-project-component-filter.component'
import {AdminProjectComponentsComponent} from './admin-project-components.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [
        AdminProjectComponentListComponent,
        AdminProjectComponentFilterComponent,
        AdminProjectComponentsComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AdminProjectComponentsComponent},
        ]),
    ],
})
export class AdminProjectComponentsModule {}
