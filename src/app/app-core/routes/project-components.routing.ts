import {Route} from '@angular/router'
import {ProjectComponentDetailsComponent} from 'app/modules/landing/project-components/project-component-details/project-component-details.component'
import {ProjectComponentsComponent} from 'app/modules/landing/project-components/project-components.component'

export const PROJECT_COMPONENTS_ROUTING: Route[] = [
    {path: '', component: ProjectComponentsComponent},
    {path: ':id', component: ProjectComponentDetailsComponent},
]
