import {EffectsModule} from '@ngrx/effects'
import {SliderEffects} from 'app/app-core/store/ngrx/slider/slider.effects'

export const sharedEffects = [EffectsModule.forFeature([SliderEffects])]
