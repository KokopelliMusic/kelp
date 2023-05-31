import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper"
import { Song } from '@/types/kalm'

export interface CurrentlyPlayingState {
  playing: boolean
  song: Song | null
  progress: number
}

const initialState: CurrentlyPlayingState = {
  playing: false,
  song: null,
  progress: 0
}

export const currentlyPlayingSlice = createSlice({
  name: 'currentlyPlaying',
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.playing = action.payload
    },

    setCurrentlyPlayingState: (state, action) => {
      state.playing = action.payload.playing
      state.song = action.payload.song
      state.progress = action.payload.progress
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.currentlyPlaying
      }
    }
  }
})

export const { setCurrentlyPlayingState, setPlaying } = currentlyPlayingSlice.actions

export const selectCurrentlyPlayingState = (state: AppState) => state.currentlyPlaying

export default currentlyPlayingSlice.reducer