import {Component} from '@angular/core'
import {PROJECT_COMPONENTS} from 'app/app-core/constants/project-component'

@Component({
    selector: 'project-components',
    templateUrl: './project-components.component.html',
    styleUrls: ['./project-components.component.scss'],
})
export class ProjectComponentsComponent {
    readonly PROJECT_COMPONENTS = PROJECT_COMPONENTS
}
