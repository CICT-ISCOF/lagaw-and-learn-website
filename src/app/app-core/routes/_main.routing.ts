import {Route} from '@angular/router'

export const MAIN_ROUTING: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('app/modules/landing/home/home.module').then(
                (module) => module.LandingHomeModule,
            ),
    },

    {
        path: 'about-us',
        loadChildren: () =>
            import('app/modules/landing/about-us/about-us.module').then(
                (module) => module.AboutUsModule,
            ),
    },

    {
        path: 'project-components',
        loadChildren: () =>
            import(
                'app/modules/landing/project-components/project-components.module'
            ).then((module) => module.ProjectComponentsModule),
    },

    {
        path: 'news-and-updates',
        loadChildren: () =>
            import(
                'app/modules/landing/news-and-updates/news-and-updates.module'
            ).then((module) => module.NewsAndUpdatesModule),
    },

    {
        path: 'contact-us',
        loadChildren: () =>
            import('app/modules/landing/contact-us/contact-us.module').then(
                (module) => module.ContactUsModule,
            ),
    },

    {
        path: 'pages',
        loadChildren: () =>
            import('app/modules/pages/pages.module').then(
                (module) => module.PagesModule,
            ),
    },
]
