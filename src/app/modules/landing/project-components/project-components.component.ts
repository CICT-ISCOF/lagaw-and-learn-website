import {Component} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'
import {PROJECT_COMPONENTS} from 'app/app-core/constants/project-component'

@Component({
    selector: 'project-components',
    templateUrl: './project-components.component.html',
    animations: [...dbwAnimations],
})
export class ProjectComponentsComponent {
    readonly PROJECT_COMPONENTS = PROJECT_COMPONENTS
}
