import {switchMap, map} from 'rxjs'
import {Injectable} from '@angular/core'
import {StoreAction} from '../../core/action.enum'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {SliderService} from './slider.service'

@Injectable({
    providedIn: 'root',
})
export class SliderEffects {
    constructor(
        private _actions$: Actions,
        private _sliderService: SliderService,
    ) {}

    get$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.SLIDER.load.request),
            switchMap(() =>
                this._sliderService.get().pipe(
                    map((response) =>
                        StoreAction.SLIDER.load.onSuccess({
                            slider: response,
                        }),
                    ),
                ),
            ),
        ),
    )

    add$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.SLIDER.upsert.request),
            switchMap((action) =>
                this._sliderService.upsert(action.slider).pipe(
                    map((response) =>
                        StoreAction.SLIDER.upsert.onSuccess({
                            slider: response,
                        }),
                    ),
                ),
            ),
        ),
    )
}
