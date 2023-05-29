import {Injectable} from '@angular/core'
import {Modal} from '@digital_brand_work/services/modal.service'
import {BehaviorSubject} from 'rxjs'

@Injectable({providedIn: 'root'})
export class MediaViewerService extends Modal {
    image$ = new BehaviorSubject<string>(undefined)
}
