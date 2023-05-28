import Image from 'next/image'
import styles from '../styles/album.module.scss'

type AlbumProps = {
  artist: string
  album: string
  cover: string
  size: number
}

export default function Album(props: AlbumProps) {

  return <div style={{ width: props.size, height: props.size }} className={styles.album}>
    <div className={styles.gradient} style={{ width: props.size, height: props.size }} />

    <div className={styles.image}>
      <Image className={styles.image} src={props.cover} alt={props.album} width={props.size} height={props.size} unoptimized={true} />
    </div>

    <div className={styles.overlay} style={{ width: props.size, height: props.size }}>
      <h4>{props.album}</h4>
      <h5>{props.artist}</h5>
    </div>
  </div>
}