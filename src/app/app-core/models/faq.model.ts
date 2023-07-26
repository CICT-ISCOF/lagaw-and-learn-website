import {NodeBaseModel} from '@digital_brand_work/models/core.model'

export interface FAQs extends NodeBaseModel {
    question: string
    answers: string[]
}
