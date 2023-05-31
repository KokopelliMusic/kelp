import Image from 'next/image'
import styles from '../styles/aside.module.scss'
import { Session } from 'next-auth'
import Link from 'next/link'
import { AiFillStepBackward, AiFillStepForward, AiOutlinePauseCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentlyPlayingState, setCurrentlyPlayingState, setPlaying } from '@/store/currently-playing'
import LinesEllipsis from 'react-lines-ellipsis'

export default function Aside({ session }: { session: Session }) {
  const currentlyPlaying = useSelector(selectCurrentlyPlayingState)
  const dispatch = useDispatch()

  console.log(currentlyPlaying)

  return <aside className={styles.sidebar}>
    <div className={styles.title}>
      <Image src="/kokopelli_white.png" width={30} height={50} alt="Kokopelli logo" />
      <h1>Kokopelli</h1>
    </div>
    <div className={styles.card}>
      <Image src={session.user?.image ?? '/missing.jpg'} width={100} height={100} alt="Profile picture" />
      <div className={styles.cardInfo}>
        <h4>{session.user?.name}</h4>
        <p>{session.user?.email}</p>
      </div>
    </div>

    <div className={styles.mainOptions}>
      <h2><Link href="/">Discover</Link></h2>
      <h2><Link href="/radio">Radio</Link></h2>
      <h2><Link href="/settings">Settings</Link></h2>
    </div>

    <div className={styles.library}>
      <p>Library</p>
      <b>🧾 <Link href="/library/recents">Recents</Link></b>
      <b>👩‍🎤 <Link href="/library/artists">Artists</Link></b>
      <b>🎵 <Link href="/library/music">Music</Link></b>
    </div>

    <div className={styles.library}>
      <p>Playlists</p>
      <b><a href="">Nurnberger Rostbratwurst</a></b>
      <b><a href="">Rock voor in de kamer</a></b>
      <b><a href="">This is Slipknot</a></b>
    </div>

    <div className={styles.player}>
      {currentlyPlaying.song !== null ?
        <div className={styles.playerInfo}>

          <div className={styles.innerInfo}>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src={currentlyPlaying.song?.image[0].url ?? ''} width={50} height={50} alt="Album cover" />
            </div>
            <div className={styles.infoText}>
              <h4 className={styles.playerInfoTitle}>
                <LinesEllipsis
                  text={currentlyPlaying.song?.title ?? 'No song'}
                  maxLine='2'
                  ellipsis='...'
                  trimRight
                  basedOn='letters' />
              </h4>
              <h6 className={styles.playerInfoArtist}>{currentlyPlaying.song?.artists?.map(a => a.name).join(', ') ?? ''}</h6>
            </div>
          </div>

          <div className={styles.icons}>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <button onClick={() => alert('todo')}>
                <AiFillStepBackward />
              </button>

              <button onClick={() => dispatch(setPlaying(!currentlyPlaying.playing))}>
                <AiOutlinePauseCircle />
              </button>

              <button onClick={() => alert('todo')}>
                <AiFillStepForward />
              </button>
            </IconContext.Provider>
          </div>
        </div>
        :
        null
      }
    </div>
  </aside>
}