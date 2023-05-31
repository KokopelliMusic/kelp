import styles from '@/styles/library/music.module.scss'
import { Song } from '@/types/kalm';
import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Head from 'next/head';
import { Title } from '@/components/title';
import { useDispatch } from 'react-redux';
import { setCurrentlyPlayingState } from '@/store/currently-playing';

type Props = {
  songs: Song[]
}

export const getServerSideProps: GetServerSideProps<{ props: Props }> = async () => {
  const res = await fetch('http://localhost:3000/song/all?sortBy=title:ASC')
  const songs = (await res.json()).data as Song[]

  return {
    props: {
      songs
    }
  }
}

// Images is an array of Image objects with different sizes, denoted by the size property
function getBestImage(images: Image[]): string {
  // Find the image with the smallest size
  const smallestImage = images.reduce((max, image) => max.size > image.size ? max : image)

  // Return the URL of the smallest image
  return smallestImage.url
}

export default function SongsView({ songs }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useDispatch()

  return <>
    <Title>music</Title>

    <h1>Songs</h1>

    <div className={styles.songs}>
      {songs.map((s: Song) => <div key={s.id} className={styles.song}>

        <div className={styles.song}>
          <div className={styles.image}>
            <Image src={getBestImage(s.image)} width={100} height={100} alt={s.title} />
          </div>
          <h2 className={styles.title}>
            {s.title}
          </h2>
          <h3 className={styles.artist}>
            {s.artists.map(a => a.name).join(', ')}
          </h3>

          <button onClick={() => dispatch(setCurrentlyPlayingState({ song: s, progress: 0, playing: true }))}>
            Play
          </button>
        </div>

      </div>)}
    </div>
  </>
}