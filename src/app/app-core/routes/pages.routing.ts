import {Route} from '@angular/router'
import {NoInternetComponent} from 'app/modules/pages/no-internet/no-internet.component'
import {NotFoundComponent} from 'app/modules/pages/not-found/not-found.component'

export const PAGES_ROUTING: Route[] = [
    {path: 'not-found', component: NotFoundComponent},
    {path: 'no-internet', component: NoInternetComponent},
]
