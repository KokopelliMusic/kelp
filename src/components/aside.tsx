import Image from 'next/image'
import styles from '../styles/aside.module.scss'
import { Session } from 'next-auth'

export default function Aside({ session }: { session: Session }) {

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
      <h2><a href="/discover">Discover</a></h2>
      <h2><a href="/radio">Radio</a></h2>
      <h2><a href="/settings">Settings</a></h2>
    </div>

    <div className={styles.library}>
      <p>Library</p>
      <b>🧾 <a href="/library/recents">Recents</a></b>
      <b>👩‍🎤 <a href="/library/artists">Artists</a></b>
      <b>🎵 <a href="/library/music">Music</a></b>
    </div>

    <div className={styles.library}>
      <p>Playlists</p>
      <b><a href="">Nurnberger Rostbratwurst</a></b>
      <b><a href="">Rock voor in de kamer</a></b>
      <b><a href="">This is Slipknot</a></b>
    </div>
  </aside>
}