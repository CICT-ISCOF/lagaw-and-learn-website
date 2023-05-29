import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'drive_link',
})
export class DriveLinkPipe implements PipeTransform {
    transform(value: string): string {
        return drive_link(value)
    }
}

export function drive_link(value: string): string {
    if (!value.includes('share_link')) {
        return value
    }
    const fileId = value.match(/[-\w]{25,}/)?.[0]
    if (fileId) {
        return `https://drive.google.com/uc?export=view&id=${fileId}`
    } else {
        return value
    }
}
