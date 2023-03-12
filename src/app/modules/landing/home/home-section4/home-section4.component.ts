import {Component} from '@angular/core'
import { faqs } from 'app/app-core/constants/faq'

@Component({
    selector: 'home-section4',
    templateUrl: './home-section4.component.html',
    styleUrls: ['./home-section4.component.scss'],
})
export class HomeSection4Component {
    faqs = faqs
    currentIndex=100
    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
