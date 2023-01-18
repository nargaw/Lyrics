import {create}  from 'zustand'

export default create((set, get) =>
{
    return {
        //status of lyrics
        current: 'null',

        //change status
        changeStatus: () => 
        {
            if(get().current === 'null')
            {
                set((state) => ({
                    current: 'loaded'
                }))
            }
        }
    }
})