import {createSelector} from '@ngrx/store'
import {AppState} from '../../core/app.state'
import {getStoreLoaders} from '@digital_brand_work/states/store/helpers/get-store-loaders'
import {SliderState, sliderAdapter} from './slider.reducer'

const feature = (state: AppState) => state.slider

export const userLoaders = createSelector(feature, (state: SliderState) =>
    getStoreLoaders(state),
)

export const usersBaseSelectors = sliderAdapter.getSelectors()
