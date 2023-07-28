import {Slider} from 'app/app-core/models/slider.model'
import {SystemActions} from '@digital_brand_work/decorators/system.action.group'
import {createActionGroup, emptyProps, props} from '@ngrx/store'

export const SYSTEM = SystemActions({name: 'Slider System'})

export const load = createActionGroup({
    source: 'Slider load',
    events: {
        request: emptyProps(),
        onSuccess: props<{slider: Slider}>(),
    },
})

export const upsert = createActionGroup({
    source: 'Slider Upsert',
    events: {
        request: props<{slider: Slider}>(),
        onSuccess: props<{slider: Slider}>(),
    },
})
