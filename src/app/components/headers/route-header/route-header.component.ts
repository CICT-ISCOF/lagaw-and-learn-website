import {Component, Input} from '@angular/core'

@Component({
    selector: 'route-header',
    templateUrl: './route-header.component.html',
})
export class RouteHeaderComponent {
    @Input({required: true})
    pageTitle!: string

    @Input({required: true})
    subtitle!: string

    @Input({required: true})
    icon!: string
}
