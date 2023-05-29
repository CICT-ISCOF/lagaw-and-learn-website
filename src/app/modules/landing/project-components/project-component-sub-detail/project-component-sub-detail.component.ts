import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {PROJECT_COMPONENTS} from 'app/app-core/constants/project-component'
import {ProjectComponent} from 'app/app-core/models/project-component.model'
import {MediaViewerService} from 'app/components/media-viewer/media-viewer.service'
import {Subject, takeUntil} from 'rxjs'

@Component({
    selector: 'project-component-sub-detail',
    templateUrl: './project-component-sub-detail.component.html',
    styleUrls: ['./project-component-sub-detail.component.scss'],
})
export class ProjectComponentSubDetailComponent {
    constructor(
        private _route: ActivatedRoute,
        private _mediaViewerService: MediaViewerService,
    ) {}

    readonly destroyed$ = new Subject()

    projectComponent?: ProjectComponent

    projectSubComponentComponent: any

    ngOnInit(): void {
        this._route.paramMap
            .pipe(takeUntil(this.destroyed$))
            .subscribe((paramMap) => {
                const id = paramMap.get('id')
                const subDetailId = paramMap.get('subDetailId')

                this.projectComponent = PROJECT_COMPONENTS.find(
                    (p) => p.id.toString() === id.toString(),
                )

                this.projectComponent.detail.items.forEach((i) => {
                    if (i.id === subDetailId) {
                        this.projectSubComponentComponent = i
                    }

                    console.log(this.projectSubComponentComponent)
                })
            })
    }

    ngOnDestroy(): void {
        this.destroyed$.next(false)
        this.destroyed$.complete()
    }

    openViewer(image: string) {
        this._mediaViewerService.image$.next(image)
        this._mediaViewerService.opened$.next(true)
    }
}
