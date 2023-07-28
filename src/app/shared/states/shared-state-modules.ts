import {StoreModule} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/state.enum'
import {sliderReducer} from 'app/app-core/store/ngrx/slider/slider.reducer'

export const sharedStateModules = [
    StoreModule.forFeature(StateEnum.SLIDER, sliderReducer),
]
