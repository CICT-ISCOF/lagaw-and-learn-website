import {NgModule, isDevMode} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router'
import {FuseModule} from '@fuse'
import {FuseConfigModule} from '@fuse/services/config'
import {FuseMockApiModule} from '@fuse/lib/mock-api'
import {CoreModule} from 'app/core/core.module'
import {appConfig} from 'app/core/config/app.config'
import {mockApiServices} from 'app/mock-api'
import {LayoutModule} from 'app/layout/layout.module'
import {AppComponent} from 'app/app.component'
import {appRoutes} from 'app/app.routing'
import {NavbarComponent} from './components/common/navbar/navbar.component'
import {NavbarResponsiveComponent} from './components/common/navbar-responsive/navbar-responsive.component'
import {FooterComponent} from './components/common/footer/footer.component'
import {CommonSidebarComponent} from './components/common/common-sidebar/common-sidebar.component'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
}

const components = [
    AppComponent,
    NavbarComponent,
    NavbarResponsiveComponent,
    FooterComponent,
    CommonSidebarComponent,
]

const modules = [
    CoreModule,
    FuseModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    FuseConfigModule.forRoot(appConfig),
    FuseMockApiModule.forRoot(mockApiServices),
    RouterModule.forRoot(appRoutes, routerConfig),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
]

@NgModule({
    declarations: [...components],
    imports: [...modules],
    bootstrap: [AppComponent],
})
export class AppModule {}
