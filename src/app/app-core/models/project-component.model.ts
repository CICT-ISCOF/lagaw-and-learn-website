import {NodeBaseModel} from '@digital_brand_work/models/core.model'
import {ProjectComponentDetail} from './project-component-detail.model'

export interface ProjectComponent extends NodeBaseModel {
    title: string
    description: string
    image?: string
    video?: string
    detail?: ProjectComponentDetail
}
