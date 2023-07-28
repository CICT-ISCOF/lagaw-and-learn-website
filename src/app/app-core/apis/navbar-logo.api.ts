import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {API} from '@digital_brand_work/api/base.api'

@Injectable({providedIn: 'root'})
export class NavbarLogoApi extends API {
    constructor(private _http: HttpClient) {
        super(_http, 'navbar-logo')
    }
}
