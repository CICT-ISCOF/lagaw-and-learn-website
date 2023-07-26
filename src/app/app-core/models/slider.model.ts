import {NodeBaseModel, PHPFile} from '@digital_brand_work/models/core.model'

export interface Slider extends NodeBaseModel {
    headline: string
    sub_headline: string
    button_title: string
    pictures: PHPFile
}
