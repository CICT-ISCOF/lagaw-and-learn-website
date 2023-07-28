import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {API} from '@digital_brand_work/api/base.api'

@Injectable({providedIn: 'root'})
export class ProjectComponentDetailItemAPi extends API {
    constructor(private _http: HttpClient) {
        super(_http, 'project-component-detail-item')
    }
}
