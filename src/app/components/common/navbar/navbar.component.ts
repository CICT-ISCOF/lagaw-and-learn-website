import {NavbarNavigation} from './../../../app-core/navigations/navbar.navigation'
import {Component} from '@angular/core'
import {NAVBAR_NAVIGATION} from 'app/app-core/navigations/navbar.navigation'
import {Subject, takeUntil} from 'rxjs'
import {NavigationEnd, Router} from '@angular/router'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(private _router: Router) {
        this._router.events.pipe(takeUntil(this.destroyed$)).subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.changeCurrentNav()
            }
        })
    }

    readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

    destroyed$ = new Subject()

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

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
