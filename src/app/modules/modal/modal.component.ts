import {Component, HostListener} from '@angular/core'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'
import {MediaViewerService} from 'app/components/media-viewer/media-viewer.service'

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    animations: [...dbwAnimations],
})
export class ModalComponent {
    constructor(private _mediaViewerService: MediaViewerService) {}

    readonly mediaViewerOpened$ = this._mediaViewerService.opened$
}
