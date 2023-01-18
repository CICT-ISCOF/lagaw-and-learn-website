import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from 'app/app.module'
import * as AOS from 'aos'

AOS.init({
    duration: 250,
    easing: 'ease-out-quart',
    placement: 'bottom-bottom',
    delay: 100,
})
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))
