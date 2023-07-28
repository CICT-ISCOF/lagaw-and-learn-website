import {Alert} from '@digital_brand_work/models/core.model'
import {EntityState} from '@ngrx/entity'
import {SliderState} from '../ngrx/slider/slider.reducer'

export interface AppState {
    alerts: EntityState<Alert>

    slider: SliderState
}
