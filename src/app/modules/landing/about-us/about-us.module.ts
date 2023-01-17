import {ABOUT_US_ROUTING} from './../../../app-core/routes/about.routing'
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {SharedModule} from 'app/shared/shared.module'
import {AboutUsSection1Component} from './about/about-us-section1/about-us-section1.component'
import {AboutUsSection2Component} from './about/about-us-section2/about-us-section2.component'
import {AboutUsSection3Component} from './about/about-us-section3/about-us-section3.component'
import {AboutComponent} from './about/about.component'
import {OurTeamComponent} from './our-team/our-team.component'

@NgModule({
    declarations: [
        AboutUsSection1Component,
        AboutUsSection2Component,
        AboutUsSection3Component,
        OurTeamComponent,
        AboutComponent,
    ],
    imports: [SharedModule, RouterModule.forChild(ABOUT_US_ROUTING)],
})
export class AboutUsModule {}
