import { useSession, signIn, signOut } from "next-auth/react"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Album from '@/components/album'
import styles from '../styles/home.module.scss'
import type { Album as AlbumType, Image, Song } from '@/types/kalm'
import Head from 'next/head';

// https://www.deviantart.com/antivvibu/art/Desktop-Music-Player-Ui-Design-Concept-850455506

const ALBUM_SIZE = 300

type Props = {
  trending: AlbumType[]
  songs: Song[]
}

export const getServerSideProps: GetServerSideProps<{ props: Props }> = async () => {
  const res = await fetch('http://localhost:3000/album/random/')
  const trending = await res.json() as AlbumType[]

  const res2 = await fetch('http://localhost:3000/song/random/')
  const songs = await res2.json() as Song[]

  return {
    props: {
      trending,
      songs
    }
  }
}

// Images is an array of Image objects with different sizes, denoted by the size property
function getBestImage(images: Image[]): string {
  console.log(images)

  // Find the image with the smallest size
  const smallestImage = images.reduce((max, image) => max.size > image.size ? max : image)

  // Return the URL of the smallest image
  return smallestImage.url
}

export default function Home({ songs, trending }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession()

  if (session) {
    return <div className={styles.home}>
      <Head><title>Kokopelli :: home</title></Head>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {trending.map((a: AlbumType) => <>
            <Album artist={a.artists.map(ar => ar.name).join(', ')} album={a.title} cover={getBestImage(a.image)} size={ALBUM_SIZE} />
          </>)}
        </div>
      </div>

      <h1 className={styles.title}>Songs</h1>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {songs.map((s: Song) => <>
            <Album artist={s.artists.map(ar => ar.name).join(', ')} album={s.title} cover={getBestImage(s.image)} size={ALBUM_SIZE} />
          </>)}
        </div>
      </div>

      <h1 className={styles.title}>Playlists</h1>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
          <Album artist="Slipknot" album="We Are Not Your Kind" cover="https://i.scdn.co/image/ab67616d00001e0297ed7b212715424daac8c600" size={ALBUM_SIZE} />
        </div>
      </div>

      <div className={styles.footer}>
        Still havent found what you are looking for? Try using <a href="/search">search!</a>
      </div>
    </div>
  }

}
