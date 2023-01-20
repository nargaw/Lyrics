import {create}  from 'zustand'

export default create((set, get) =>
{
    return {
        //status of lyrics
        loading: 'null',

        songStatus: 'start',

        songStartTime: 0,

        lyrics: '',

        //get song time
        getSongTime: () => {
            return get().songTimer
        },

        //get lyrics
        getLyrics: () => {
            return get().lyrics
        },

        //change status
        changeStatus: () => 
        {
            if(get().loading === 'null')
            {
                set((state) => ({
                    loading: 'loaded'
                }))
            }
        },

        startSong: () =>
        {
            set((state) => ({songStatus: 'playing'}))
            set((state) => ({songStartTime: Date.now()}))
            
        },

        setLyrics: (input) =>
        {
            set((state) => ({lyrics: input }))
        }
    }
})