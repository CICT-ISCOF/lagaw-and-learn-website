import {NodeBaseModel} from '@digital_brand_work/models/core.model'

export interface ContactUs extends NodeBaseModel {
    name: string
    email: string
    phone: string
    message: string
}
