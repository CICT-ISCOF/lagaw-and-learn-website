import {NgModule} from '@angular/core'
import {ProjectComponentsComponent} from './project-components.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'
import {PROJECT_COMPONENTS_ROUTING} from 'app/app-core/routes/project-components.routing'

@NgModule({
    declarations: [ProjectComponentsComponent],
    imports: [SharedModule, RouterModule.forChild(PROJECT_COMPONENTS_ROUTING)],
})
export class ProjectComponentsModule {}
