import {Component} from '@angular/core'
import {MediaViewerService} from 'app/components/media-viewer/media-viewer.service'

@Component({
    selector: 'home-section3',
    templateUrl: './home-section3.component.html',
    styleUrls: ['./home-section3.component.scss'],
})
export class HomeSection3Component {
    constructor(private _mediaViewerService: MediaViewerService) {}

    openViewer(image: string) {
        this._mediaViewerService.image$.next(image)
        this._mediaViewerService.opened$.next(true)
    }
}
