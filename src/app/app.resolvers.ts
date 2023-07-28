import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {forkJoin, Observable} from 'rxjs'
import {MessagesService} from 'app/layout/common/messages/messages.service'
import {NavigationService} from 'app/core/navigation/navigation.service'
import {NotificationsService} from 'app/layout/common/notifications/notifications.service'
import {QuickChatService} from 'app/layout/common/quick-chat/quick-chat.service'
import {ShortcutsService} from 'app/layout/common/shortcuts/shortcuts.service'
import {Store} from '@ngrx/store'
import {StoreAction} from './app-core/store/core/action.enum'

type StoreActionKeys = keyof typeof StoreAction

@Injectable({
    providedIn: 'root',
})
export class InitialDataResolver {
    constructor(
        private _store: Store,
        private _messagesService: MessagesService,
        private _navigationService: NavigationService,
        private _notificationsService: NotificationsService,
        private _quickChatService: QuickChatService,
        private _shortcutsService: ShortcutsService,
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> {
        const stores: StoreActionKeys[] = ['SLIDER']

        stores.forEach((s) => {
            this._store.dispatch((StoreAction[s] as any).load.request())
        })

        return forkJoin([
            this._navigationService.get(),
            this._messagesService.getAll(),
            this._notificationsService.getAll(),
            this._quickChatService.getChats(),
            this._shortcutsService.getAll(),
        ])
    }
}
