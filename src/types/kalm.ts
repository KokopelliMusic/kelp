export type Song = {
  title: string
  length: number
  platform: string
  platformId: string
  album: Album
  artists: Artist[]
  image: Image[]
  id: string
  deletedAt: string | null
  createdAt: string
  updatedAt: string
  playCount: number
}

export type Album = {
  title: string
  length: number
  releaseDate: string
  genres: string[]
  label: string
  spotifyId: string
  type: string
  artists: Artist[]
  image: Image[]
  id: string
  deletedAt: string | null
  createdAt: string
  updatedAt: string
}

export type Artist = {
  name: string
  spotifyId: string
  id: string
  genres: string[]
  isActive: boolean
}

export type ArtistWithImages = Artist & {
  images: Image[]
}

export type Image = {
  size: number
  url: string
  id: string
}

export type Playcount = {
  id: string
  createdAt: string
  client: string
  additionalData: string
}