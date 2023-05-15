import {Component} from '@angular/core'
import {PROJECT_COMPONENTS} from 'app/app-core/constants/project-component'

@Component({
    selector: 'home-section2',
    templateUrl: './home-section2.component.html',
    styleUrls: ['./home-section2.component.scss'],
})
export class HomeSection2Component {
    readonly PROJECT_COMPONENTS = PROJECT_COMPONENTS
}
