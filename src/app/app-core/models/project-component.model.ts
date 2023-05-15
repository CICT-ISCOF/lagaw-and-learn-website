export interface ProjectComponent {
    id: string
    title: string
    description: string
    image?: string
    video?: string
    detail?: Detail
}

export interface Detail {
    videoTeaser?: string
    items: {
        title?: string
        images?: string[]
        description?: string
    }[]
}
