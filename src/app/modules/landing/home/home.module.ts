import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {SharedModule} from 'app/shared/shared.module'
import {LandingHomeComponent} from 'app/modules/landing/home/home.component'
import {landingHomeRoutes} from 'app/modules/landing/home/home.routing'
import {HomeSection1Component} from './home-section1/home-section1.component'
import {HomeSection2Component} from './home-section2/home-section2.component'
import {HomeSection3Component} from './home-section3/home-section3.component'
import {HomeSection4Component} from './home-section4/home-section4.component'

@NgModule({
    declarations: [
        LandingHomeComponent,
        HomeSection1Component,
        HomeSection2Component,
        HomeSection3Component,
        HomeSection4Component,
    ],
    imports: [RouterModule.forChild(landingHomeRoutes), SharedModule],
})
export class LandingHomeModule {}
