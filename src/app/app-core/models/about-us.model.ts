import {NodeBaseModel, PHPFile} from '@digital_brand_work/models/core.model'

export interface AboutUs extends NodeBaseModel {
    picture: PHPFile
    title_one: string
    title_two: string
    description_one: string
    description_two: string
}
