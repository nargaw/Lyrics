import {create}  from 'zustand'

export default create((set, get) =>
{
    return {
        //status of lyrics
        loading: 'null',

        songStatus: 'start',

        songStartTime: 0,

        lyrics: '',

        timer: 0,

        stage1: false,
        stage1active: false,

        stage2: false,
        stage2active:false,

        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,
        // stage1: false,

        //get song time
        getSongTime: () => {
            return get().songStartTime
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
            return get().songStartTime
        },

        setLyrics: (input) =>
        {
            set((state) => ({lyrics: input }))
        },

        setTimer: (input) =>
        {
            set((state) => ({timer: input}))
            if(get().timer > 0){
                set((state) => ({stage1: true}))
            }
            if(get().timer > 34){
                set((state) => ({stage2: true}))
                set((state) => ({stage1active: true}))
            }
            if(get().timer > 53){
                set((state) => ({stage1: false}))
                set((state) => ({stage2active: true}))
            }
            if(get().timer > 73){
                set((state) => ({stage2: false}))
            }
        }



    }
})