import {OurTeamComponent} from './../../modules/landing/about-us/our-team/our-team.component'
import {Route} from '@angular/router'
import {AboutComponent} from 'app/modules/landing/about-us/about/about.component'

export const ABOUT_US_ROUTING: Route[] = [
    {path: '', component: AboutComponent},
    {path: 'our-team', component: OurTeamComponent},
]
