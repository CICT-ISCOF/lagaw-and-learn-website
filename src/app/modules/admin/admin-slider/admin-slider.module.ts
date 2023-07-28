import {NgModule} from '@angular/core'
import {AdminSliderComponent} from './admin-slider.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AdminSliderComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AdminSliderComponent}]),
    ],
})
export class AdminSliderModule {}
