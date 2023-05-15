import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {PROJECT_COMPONENTS} from 'app/app-core/constants/project-component'
import {ProjectComponent} from 'app/app-core/models/project-component.model'
import {Subject, takeUntil} from 'rxjs'

@Component({
    selector: 'project-component-details',
    templateUrl: './project-component-details.component.html',
    styleUrls: ['./project-component-details.component.scss'],
})
export class ProjectComponentDetailsComponent {
    constructor(private _route: ActivatedRoute) {}

    projectComponent?: ProjectComponent

    destroyed$ = new Subject()

    ngOnInit(): void {
        this._route.paramMap
            .pipe(takeUntil(this.destroyed$))
            .subscribe((paramMap) => {
                const id = paramMap.get('id')

                this.projectComponent = PROJECT_COMPONENTS.find(
                    (p) => p.id.toString() === id.toString(),
                )
            })
    }

    ngOnDestroy(): void {
        this.destroyed$.next(false)
        this.destroyed$.complete()
    }
}
