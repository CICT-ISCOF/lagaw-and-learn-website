import {NodeBaseModel} from '@digital_brand_work/models/core.model'

export interface ProjectComponentDetailItem extends NodeBaseModel {
    id: string
    video?: string
    title?: string
    images?: string[]
    description?: string
}
