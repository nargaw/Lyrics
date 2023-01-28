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

        stage3: false,
        stage3active:false,

        stage4: false,
        stage4active:false,

        stage5: false,
        stage5active:false,

        stage6: false,
        stage6active:false,

        stage7: false,
        stage7active:false,

        stage8: false,
        stage8active:false,

        stage9: false,
        stage9active:false,

        stage10: false,
        stage10active:false,

        stage11: false,
        stage11active:false,

        stage12: false,
        stage12active:false,

        stage13: false,
        stage13active:false,

        stage14: false,
        stage14active:false,
        
        stage15: false,
        stage15active:false,


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

        restartSong: () =>
        {
            set((state) => ({songStatus: 'restart'}))
        },

        setLyrics: (input) =>
        {
            set((state) => ({lyrics: input }))
        },

        //stage1
        setStage1: () =>
        {
            set((state) => ({stage1: true}))
        },

        activateStage1: () => {
            set((state) => ({stage1active: true}))
        },

        deleteStage1: () => 
        {
            set((state) => ({stage1: false}))
        },

        //stage2
        setStage2: () =>
        {
            set((state) => ({stage2: true}))
        },

        activateStage2: () => {
            set((state) => ({stage2active: true}))
        },

        deleteStage2: () => 
        {
            set((state) => ({stage2: false}))
        },

        //stage3
        setStage3: () =>
        {
            set((state) => ({stage3: true}))
        },

        activateStage3: () => {
            set((state) => ({stage3active: true}))
        },

        deleteStage3: () => 
        {
            set((state) => ({stage3: false}))
        },

        //stage4
        setStage4: () =>
        {
            set((state) => ({stage4: true}))
        },

        activateStage4: () => {
            set((state) => ({stage4active: true}))
        },

        deleteStage4: () => 
        {
            set((state) => ({stage4: false}))
        },

        //stage5
        setStage5: () =>
        {
            set((state) => ({stage5: true}))
        },

        activateStage5: () => {
            set((state) => ({stage5active: true}))
        },

        deleteStage5: () => 
        {
            set((state) => ({stage5: false}))
        },

        //stage6
        setStage6: () =>
        {
            set((state) => ({stage6: true}))
        },

        activateStage6: () => {
            set((state) => ({stage6active: true}))
        },

        deleteStage6: () => 
        {
            set((state) => ({stage6: false}))
        },

        //stage7
        setStage7: () =>
        {
            set((state) => ({stage7: true}))
        },

        activateStage7: () => {
            set((state) => ({stage7active: true}))
        },

        deleteStage7: () => 
        {
            set((state) => ({stage7: false}))
        },


        //stage8
        setStage8: () =>
        {
            set((state) => ({stage8: true}))
        },

        activateStage8: () => {
            set((state) => ({stage8active: true}))
        },

        deleteStage8: () => 
        {
            set((state) => ({stage8: false}))
        },

        //stage9
        setStage9: () =>
        {
            set((state) => ({stage9: true}))
        },

        activateStage9: () => {
            set((state) => ({stage9active: true}))
        },

        deleteStage9: () => 
        {
            set((state) => ({stage9: false}))
        },

        //stage10
        setStage10: () =>
        {
            set((state) => ({stage10: true}))
        },

        activateStage10: () => {
            set((state) => ({stage10active: true}))
        },

        deleteStage10: () => 
        {
            set((state) => ({stage10: false}))
        },

        //stage11
        setStage11: () =>
        {
            set((state) => ({stage11: true}))
        },

        activateStage11: () => {
            set((state) => ({stage11active: true}))
        },

        deleteStage11: () => 
        {
            set((state) => ({stage11: false}))
        },


        //stage12
        setStage12: () =>
        {
            set((state) => ({stage12: true}))
        },

        activateStage12: () => {
            set((state) => ({stage12active: true}))
        },

        deleteStage12: () => 
        {
            set((state) => ({stage12: false}))
        },

        //stage13
        setStage13: () =>
        {
            set((state) => ({stage13: true}))
        },

        activateStage13: () => {
            set((state) => ({stage13active: true}))
        },

        deleteStage13: () => 
        {
            set((state) => ({stage13: false}))
        },

        //stage14
        setStage14: () =>
        {
            set((state) => ({stage14: true}))
        },

        activateStage14: () => {
            set((state) => ({stage14active: true}))
        },

        deleteStage14: () => 
        {
            set((state) => ({stage14: false}))
        },

        //stage15
        setStage15: () =>
        {
            set((state) => ({stage15: true}))
        },

        activateStage15: () => {
            set((state) => ({stage15active: true}))
        },

        deleteStage15: () => 
        {
            set((state) => ({stage15: false}))
        },

    }
})