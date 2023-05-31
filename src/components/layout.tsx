import Aside from './aside';
import { signIn, useSession } from 'next-auth/react';
import styles from '../styles/layout.module.scss'
import Player from './player';
import { MediaPlayer } from './media-player';

export default function Layout({ children }) {
  const { data: session } = useSession()

  if (session) {
    return <div className={styles.layout}>

      <div className={styles.aside}>
        <Aside session={session} />
      </div>

      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>

      <div className={styles.playerContainer}>
        {/* <Player /> */}
      </div>

      <MediaPlayer />
    </div>
  }

  return <main>
    <h1>Kokopelli</h1>

    <button onClick={() => signIn('authentik')}>Login met Invictus</button>
  </main>
}