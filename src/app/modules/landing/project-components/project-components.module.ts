import {NgModule} from '@angular/core'
import {ProjectComponentsComponent} from './project-components.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {PROJECT_COMPONENTS_ROUTING} from 'app/app-core/routes/project-components.routing'
import {ProjectComponentDetailsComponent} from './project-component-details/project-component-details.component'
import {ProjectComponentSubDetailComponent} from './project-component-sub-detail/project-component-sub-detail.component'
import {ProjectComponentsFishProcessingComponent} from './components/project-components-fish-processing/project-components-fish-processing.component'

@NgModule({
    declarations: [
        ProjectComponentsComponent,
        ProjectComponentDetailsComponent,
        ProjectComponentSubDetailComponent,
        ProjectComponentsFishProcessingComponent,
    ],
    imports: [SharedModule, RouterModule.forChild(PROJECT_COMPONENTS_ROUTING)],
})
export class ProjectComponentsModule {}
