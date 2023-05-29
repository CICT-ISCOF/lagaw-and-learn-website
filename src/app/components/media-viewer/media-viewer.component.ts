import {Component, HostListener} from '@angular/core'
import {MediaViewerService} from './media-viewer.service'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'

@Component({
    selector: 'media-viewer',
    templateUrl: './media-viewer.component.html',
    animations: [...dbwAnimations],
})
export class MediaViewerComponent {
    constructor(private _mediaViewerService: MediaViewerService) {}

    readonly opened$ = this._mediaViewerService.opened$

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        this.opened$.next(false)
    }

    imageSource$ = this._mediaViewerService.image$

    ngOnInit(): void {}

    close() {
        this.opened$.next(false)
    }
}
