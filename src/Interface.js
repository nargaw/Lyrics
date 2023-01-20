import useLyrics from "./stores/useLyrics";
import { useEffect } from "react";
import { addEffect } from "@react-three/fiber";

export default function Interface()
{
    const state = useLyrics.getState()
    const songStatus = useLyrics(state => state.songStatus)
    const getSongTime = useLyrics(state => state.getSongTime)
    const startSong = useLyrics(state => state.startSong)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {

            let elapsedTime = 0

            if(state.songStatus === 'playing')
            {
                elapsedTime = Date.now() - state.songStartTime
                elapsedTime /= 1000
            }
            // console.log(elapsedTime)
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])


    const func = () => {
        console.log('clicked')
    }
    
    return <>
        <div className="interface">
            {/* {songStatus === 'start' && <div className="start" onClick={startSong()}>start</div> } */}
            {/* <div className="pause">pause</div> */}
            {/* <div className="restart">restart</div> */}
        </div>
    </>
}