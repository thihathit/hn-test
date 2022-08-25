export type TEntityID = number | string

export type TStory = {
    id: TEntityID
    title: string
    points: number
    user: string
    time: number
    time_ago: string
    url: string
    domain: string
    comments: TComments[]
    comments_count: number
}

export type TComments = {
    id: TEntityID
    level: number
    user: string
    time: number
    time_ago: string
    content: string
    comments: TComments[]
}
