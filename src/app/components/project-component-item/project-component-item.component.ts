import {Component, Input} from '@angular/core'
import {ProjectComponent} from 'app/app-core/models/project-component.model'

@Component({
    selector: 'project-component-item',
    templateUrl: './project-component-item.component.html',
})
export class ProjectComponentItemComponent {
    @Input({required: true})
    project: ProjectComponent

    @Input({required: true})
    key: number
}
