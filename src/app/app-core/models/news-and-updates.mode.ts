import {NodeBaseModel, PHPFile} from '@digital_brand_work/models/core.model'

export interface NewsAndUpdates extends NodeBaseModel {
    title: string
    description: string
    picture: PHPFile
}
