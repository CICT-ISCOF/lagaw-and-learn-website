import {NgModule} from '@angular/core'
import {SharedModule} from 'app/shared/shared.module'
import {AboutUsSection1Component} from './about-us-section1/about-us-section1.component'
import {AboutUsSection2Component} from './about-us-section2/about-us-section2.component'
import {AboutUsSection3Component} from './about-us-section3/about-us-section3.component'

@NgModule({
    declarations: [
        AboutUsSection1Component,
        AboutUsSection2Component,
        AboutUsSection3Component,
    ],
    imports: [SharedModule],
})
export class AboutUsModule {}
