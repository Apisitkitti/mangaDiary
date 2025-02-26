export enum BookType {
  MANGA = 'manga',
  MANHWA = 'manhwa',
}

export interface BookInformation {
  name: string
  image: string
  alt: string
  tag: {
    isHasColor: boolean
    type: BookType
  }
}
