import {NodeBaseModel, PHPFile} from '@digital_brand_work/models/core.model'

export interface Profile extends NodeBaseModel {
    logo: PHPFile
    email: string
    phone: string
    name: string
    urls: {
        facebook: string
        twitter: string
        location: string
        international_affairs: string
        la_guerta: string
        site_map: string
        internal_campuses: string
        program_offerings: string
    }
}
