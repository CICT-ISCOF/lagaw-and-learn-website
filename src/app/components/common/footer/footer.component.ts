import {Component} from '@angular/core'
import {MediaViewerService} from 'app/components/media-viewer/media-viewer.service'

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(private _mediaViewerService: MediaViewerService) {}

    redirect(url: string) {
        location.href = url
    }

    openSiteMap(image: string) {
        this._mediaViewerService.image$.next(image)
        this._mediaViewerService.opened$.next(true)
    }
}
