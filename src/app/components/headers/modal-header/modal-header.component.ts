import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'modal-header',
    templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent {
    @Output()
    onClose = new EventEmitter()

    @Input({required: true})
    modalTitle: string = ''

    @Input({required: true})
    subTitle?: string
}
