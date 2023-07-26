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
            path: 'example',
            loadChildren: () =>
                import('app/modules/admin/example/example.module').then(
                    (m) => m.ExampleModule,
                ),
        },
    ],
}
