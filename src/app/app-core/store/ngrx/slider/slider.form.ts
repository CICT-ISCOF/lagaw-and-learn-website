import {Injectable} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Slider} from 'app/app-core/models/slider.model'

@Injectable({providedIn: 'root'})
export class SliderForm extends FormBuilder {
    get() {
        return this.group({
            headline: ['', Validators.required],
            sub_headline: ['', Validators.required],
            button_title: ['', Validators.required],
            pictures: this.array([]),
        })
    }

    set(slider: Slider) {
        return this.group({
            headline: [slider.headline, Validators.required],
            sub_headline: [slider.sub_headline, Validators.required],
            button_title: [slider.button_title, Validators.required],
            pictures: this.array(slider.pictures.map((picture) => picture.url)),
        })
    }
}
