import {NEWS_AND_UPDATES_ROUTING} from './../../../app-core/routes/news-and-updates.routing'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NewsAndUpdatesComponent} from './news-and-updates.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [NewsAndUpdatesComponent],
    imports: [SharedModule, RouterModule.forChild(NEWS_AND_UPDATES_ROUTING)],
})
export class NewsAndUpdatesModule {}
