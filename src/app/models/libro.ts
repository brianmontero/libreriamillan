export interface Libro {
    id: string,
    volumeInfo: {
        title:string,
        authors: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        pageCount: number
    }

}
