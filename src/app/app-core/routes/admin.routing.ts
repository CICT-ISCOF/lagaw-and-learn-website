import {Route} from '@angular/router'
import {InitialDataResolver} from 'app/app.resolvers'
import {LayoutComponent} from 'app/layout/layout.component'

export const ADMIN_ROUTING: Route = {
    path: 'admin',
    component: LayoutComponent,
    resolve: {
        initialData: InitialDataResolver,
    },
    children: [
        {
            path: 'home',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-slider/admin-slider.module'
                ).then((module) => module.AdminSliderModule),
        },

        {
            path: 'about-us',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-about-us/admin-about-us.module'
                ).then((module) => module.AdminAboutUsModule),
        },

        {
            path: 'inbox',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-contact-us/admin-contact-us.module'
                ).then((module) => module.AdminContactUsModule),
        },

        {
            path: 'explore',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-explore/admin-explore.module'
                ).then((module) => module.AdminExploreModule),
        },

        {
            path: 'faqs',
            loadChildren: () =>
                import('app/modules/admin/admin-faqs/admin-faqs.module').then(
                    (module) => module.AdminFaqsModule,
                ),
        },

        {
            path: 'footer-logo',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-footer-logo/admin-footer-logo.module'
                ).then((module) => module.AdminFooterLogoModule),
        },

        {
            path: 'navbar-logo',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-navbar-logo/admin-navbar-logo.module'
                ).then((module) => module.AdminNavbarLogoModule),
        },

        {
            path: 'news-and-updates',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-news-and-updates/admin-news-and-updates.module'
                ).then((module) => module.AdminNewsAndUpdatesModule),
        },

        {
            path: 'profile',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-profile/admin-profile.module'
                ).then((module) => module.AdminProfileModule),
        },

        {
            path: 'project-components',
            loadChildren: () =>
                import(
                    'app/modules/admin/admin-project-components/admin-project-components.module'
                ).then((module) => module.AdminProjectComponentsModule),
        },
    ],
}
