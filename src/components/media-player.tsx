import { selectCurrentlyPlayingState } from '@/store/currently-playing'
import type { Song } from '@/types/kalm'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function getUrl(song: Song) {
  return 'http://localhost:3000/stream/' + song.id
}


export function MediaPlayer() {
  const currentlyPlaying = useSelector(selectCurrentlyPlayingState)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (currentlyPlaying.playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [currentlyPlaying])

  if (currentlyPlaying.song === null) return null

  return <audio ref={audioRef} src={getUrl(currentlyPlaying.song)} />
}