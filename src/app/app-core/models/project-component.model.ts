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
        id: string
        video?: string
        title?: string
        images?: string[]
        description?: string
    }[]
}
