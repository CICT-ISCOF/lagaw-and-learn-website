import {NodeBaseModel} from '@digital_brand_work/models/core.model'
import {ProjectComponentDetailItem} from './project-component-detail-item.model'

export interface ProjectComponentDetail extends NodeBaseModel {
    videoTeaser?: string
    items: ProjectComponentDetailItem[]
}
