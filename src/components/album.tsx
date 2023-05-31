import Image from 'next/image'
import styles from '../styles/album.module.scss'
import LinesEllipsis from 'react-lines-ellipsis'

type AlbumProps = {
  artist: string
  album: string
  cover: string
  size: number
}

export default function Album(props: AlbumProps) {

  return <div style={{ width: props.size, height: props.size }} className={styles.album} >
    <div className={styles.gradient} style={{ width: props.size, height: props.size }} />

    <div className={styles.image}>
      <Image className={styles.image} src={props.cover} alt={props.album} width={props.size} height={props.size} />
    </div>

    <div className={styles.overlay} style={{ width: props.size, height: props.size }}>
      <h4>
        <LinesEllipsis
          text={props.album}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters' />
      </h4>
      <h5>
        {props.artist}
      </h5>
    </div>
  </div>
}