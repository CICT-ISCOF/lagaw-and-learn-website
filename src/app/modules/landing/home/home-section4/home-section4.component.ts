import {Component} from '@angular/core'

@Component({
    selector: 'home-section4',
    templateUrl: './home-section4.component.html',
    styleUrls: ['./home-section4.component.scss'],
})
export class HomeSection4Component {
    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
