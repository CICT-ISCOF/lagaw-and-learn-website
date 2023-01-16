import {NgModule} from '@angular/core'
import {LanguagesComponent} from 'app/layout/common/languages/languages.component'
import {SharedModule} from 'app/shared/shared.module'

@NgModule({
    declarations: [LanguagesComponent],
    imports: [SharedModule],
    exports: [LanguagesComponent],
})
export class LanguagesModule {}
