import {Store, select} from '@ngrx/store'
import {AppState} from 'app/app-core/store/core/app.state'
import {Component, HostListener} from '@angular/core'
import {MediaService} from '@digital_brand_work/utilities/media.service'
import {fromEvent, map, merge, of} from 'rxjs'
import {TransformEntity} from '@digital_brand_work/helpers/transform-entity'
import {StoreAction} from './app-core/store/core/action.enum'
import {StateEnum} from './app-core/store/core/state.enum'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {Router} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(
        private _router: Router,
        private _store: Store<AppState>,
        private _mediaService: MediaService,
    ) {
        this._router.events.pipe(takeUntilDestroyed()).subscribe(() => {
            this.isInAdmin =
                this._router.url.includes('admin') ||
                this._router.url.includes('auth')
        })
    }

    @HostListener('window:resize')
    onResize() {
        this._mediaService.onResize()
    }

    @HostListener('window:scroll')
    onScroll() {
        this._mediaService.onScroll()
    }

    breakpoint$ = this._mediaService.breakpoints$

    alerts$ = this._store.pipe(
        select(StateEnum.ALERTS),
        map((x) => new TransformEntity(x).toArray()),
    )

    isInAdmin: boolean = false

    ngOnInit(): void {
        this.checkNetworkStatus()
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }

    removeAlert(id: string) {
        this._store.dispatch(StoreAction.ALERT.deleteAlert({id: id}))
    }

    checkNetworkStatus() {
        return merge(
            of(null),
            fromEvent(window, 'online'),
            fromEvent(window, 'offline'),
        )
            .pipe(map(() => navigator.onLine))
            .subscribe((status: boolean) => {
                if (!status) {
                    return this._router.navigate(['/pages/no-internet'])
                }
            })
    }
}
