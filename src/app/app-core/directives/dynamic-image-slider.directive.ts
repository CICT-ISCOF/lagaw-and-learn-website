import {
    Directive,
    Input,
    ElementRef,
    OnChanges,
    SimpleChanges,
} from '@angular/core'

@Directive({
    selector: '[imageSlider]',
})
export class ImageSliderDirective {
    @Input()
    images: string[] = []

    currentImageIndex = 0

    interval: any

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        console.log(this.currentImageIndex)
        this.interval = setInterval(() => {
            const currentImage = this.images[this.currentImageIndex]
            this.el.nativeElement.setAttribute('src', currentImage)
            this.currentImageIndex =
                this.currentImageIndex === this.images.length - 1
                    ? 0
                    : this.currentImageIndex + 1
        }, Math.floor(Math.random() * (1400 - 800 + 1) + 800))
    }

    ngOnDestroy(): void {
        clearInterval(this.interval)
    }
}
