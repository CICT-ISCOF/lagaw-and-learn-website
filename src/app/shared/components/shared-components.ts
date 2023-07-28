import {AppSpinnerComponent} from 'app/components/app-spinner/app-spinner.component'
import {ButtonTitleComponent} from 'app/components/button-title/button-title.component'
import {CommonSidebarComponent} from 'app/components/common/common-sidebar/common-sidebar.component'
import {FooterComponent} from 'app/components/common/footer/footer.component'
import {NavbarResponsiveComponent} from 'app/components/common/navbar-responsive/navbar-responsive.component'
import {NavbarComponent} from 'app/components/common/navbar/navbar.component'
import {ModalHeaderComponent} from 'app/components/headers/modal-header/modal-header.component'
import {RouteHeaderComponent} from 'app/components/headers/route-header/route-header.component'
import {MediaViewerComponent} from 'app/components/media-viewer/media-viewer.component'
import {ModalComponent} from 'app/modules/modal/modal.component'

export const sharedComponents = [
    NavbarComponent,
    FooterComponent,
    NavbarResponsiveComponent,
    CommonSidebarComponent,

    MediaViewerComponent,
    ModalComponent,

    ModalHeaderComponent,
    RouteHeaderComponent,
    ButtonTitleComponent,
    AppSpinnerComponent,
]
