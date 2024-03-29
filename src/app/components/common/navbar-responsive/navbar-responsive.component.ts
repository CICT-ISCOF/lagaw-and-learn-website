import {Component} from '@angular/core'
import {NavigationEnd, Router} from '@angular/router'
import {dbwAnimations} from '@digital_brand_work/animations/animation.api'
import {
    NAVBAR_NAVIGATION,
    NavbarNavigation,
} from 'app/app-core/navigations/navbar.navigation'
import {Subject, takeUntil} from 'rxjs'

@Component({
    selector: 'navbar-responsive',
    templateUrl: './navbar-responsive.component.html',
    styleUrls: ['./navbar-responsive.component.scss'],
    animations: [...dbwAnimations],
})
export class NavbarResponsiveComponent {
    constructor(private _router: Router) {
        this._router.events.pipe(takeUntil(this.destroyed$)).subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.changeCurrentNav()
            }
        })
    }

    readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

    readonly destroyed$ = new Subject()
    opened: boolean = false

    currentNav: NavbarNavigation = NAVBAR_NAVIGATION[0]

    changeCurrentNav() {
        const url = this._router.url

        if (url.includes('/')) {
            this.currentNav = NAVBAR_NAVIGATION[0]
        }

        if (url.includes('/about-us')) {
            this.currentNav = NAVBAR_NAVIGATION[1]
        }

        if (url.includes('/project-components')) {
            this.currentNav = NAVBAR_NAVIGATION[2]
        }

        if (url.includes('/news-and-updates')) {
            this.currentNav = NAVBAR_NAVIGATION[3]
        }

        if (url.includes('/contact-us')) {
            this.currentNav = NAVBAR_NAVIGATION[4]
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.complete()
    }

    redirect(url: string) {
        location.href = url
    }
}
