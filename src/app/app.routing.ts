import {Route} from '@angular/router'
import {LayoutComponent} from 'app/layout/layout.component'
import {MAIN_ROUTING} from './app-core/routes/_main.routing'
import {AUTH_ROUTING} from './app-core/routes/auth.routing'
import {ADMIN_ROUTING} from './app-core/routes/admin.routing'

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'admin/home',
    },

    ...MAIN_ROUTING,

    AUTH_ROUTING,

    ADMIN_ROUTING,

    // // Redirect empty path to '/example'

    // // Redirect signed-in user to the '/example'
    // //
    // // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // // path. Below is another redirection for that path to redirect the user to the desired
    // // location. This is a small convenience to keep all main routes together here on this file.

    // Auth routes for guests

    {
        path: 'session',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule,
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m) => m.AuthUnlockSessionModule),
            },
        ],
    },

    // // Landing routes
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
    //     ]
    // },

    // Admin routes
]
