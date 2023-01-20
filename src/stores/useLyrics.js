import {create}  from 'zustand'

export default create((set, get) =>
{
    return {
        //status of lyrics
        current: 'null',

        songTimer: 0,

        //get song time
        getSongTime: () => {
            return get().songTimer
        },

        //change status
        changeStatus: () => 
        {
            if(get().current === 'null')
            {
                set((state) => ({
                    current: 'loaded'
                }))
            }
        },

        startSong: () =>
        {
            set((state) => ({songTimer: Date.now()}))
        }
    }
})