import {Injectable} from '@angular/core'
import {LoadingTypeEnum} from '@digital_brand_work/states/store/enums/loading-type.enum'
import {Observable, distinctUntilChanged, of, take} from 'rxjs'
import {StoreLoaderService} from '@digital_brand_work/services/store-loader.service'
import {Loader} from '@digital_brand_work/decorators/loader.decorator'
import {Slider} from 'app/app-core/models/slider.model'
import {SliderApi} from 'app/app-core/apis/slider.api'

@Injectable({providedIn: 'root'})
export class SliderService {
    constructor(
        private _sliderApi: SliderApi,
        private _storeLoaderService: StoreLoaderService,
    ) {}

    @Loader({state: 'SLIDER', loading: LoadingTypeEnum.GET})
    get(): Observable<Slider> {
        return this._sliderApi.get()
    }

    @Loader({state: 'SLIDER', loading: LoadingTypeEnum.CREATE})
    upsert(slider: Slider): Observable<Slider> {
        return this._sliderApi.update(slider.id, {...slider})
    }
}
