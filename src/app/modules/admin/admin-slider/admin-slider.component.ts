import {Component} from '@angular/core'
import {FormGroup} from '@angular/forms'
import {toObjectEntity} from '@digital_brand_work/helpers/transform-entity'
import {Store, select} from '@ngrx/store'
import {Slider} from 'app/app-core/models/slider.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {SliderForm} from 'app/app-core/store/ngrx/slider/slider.form'
import {sliderLoaders} from 'app/app-core/store/ngrx/slider/slider.selectors'
import {map, tap} from 'rxjs'

@Component({
    selector: 'admin-slider',
    templateUrl: './admin-slider.component.html',
})
export class AdminSliderComponent {
    constructor(
        private _store: Store<AppState>,
        private _sliderForm: SliderForm,
    ) {}

    readonly slider$ = this._store.pipe(
        select(StateEnum.SLIDER),
        map((state) => toObjectEntity(state)),
        tap((slider) => {
            if (slider) {
                this.form = this._sliderForm.set(slider) as any
            }
        }),
    )

    readonly loader$ = this._store.select(sliderLoaders)

    form = this._sliderForm.get()

    save() {
        if (this.form.invalid) {
            return
        }

        this._store.dispatch(
            StoreAction.SLIDER.upsert.request({
                slider: this.form.value as Slider,
            }),
        )
    }
}
