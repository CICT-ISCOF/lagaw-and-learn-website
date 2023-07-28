import {STORE_LOADERS} from '@digital_brand_work/states/store/helpers/store-loaders'
import {StoreLoaders} from '@digital_brand_work/states/store/models/loader.model'
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import {createReducer, on} from '@ngrx/store'
import {Slider} from 'app/app-core/models/slider.model'
import {StoreAction} from 'app/app-core/store/core/action.enum'

export const sliderAdapter: EntityAdapter<Slider> =
    createEntityAdapter<Slider>()

export interface SliderState extends EntityState<Slider>, StoreLoaders {
    error: any
}

export const initialState: SliderState = sliderAdapter.getInitialState({
    ...STORE_LOADERS,
    error: null,
})

export const sliderReducer = createReducer(
    initialState,

    on(StoreAction.SLIDER.SYSTEM.setLoader, (state, action) => ({
        ...state,
        [`${action.loading.type}Loader`]: action.loading.state,
    })),

    on(StoreAction.SLIDER.SYSTEM.onError, (state, action) => ({
        ...state,
        error: action.error,
    })),

    on(StoreAction.SLIDER.load.onSuccess, (state, action) =>
        sliderAdapter.setAll([action.slider], state),
    ),

    on(StoreAction.SLIDER.upsert.onSuccess, (state, action) =>
        sliderAdapter.upsertOne(action.slider, state),
    ),
)
