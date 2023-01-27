import useLyrics from "./stores/useLyrics";
import { useEffect, useRef } from "react";
import { addEffect } from "@react-three/fiber";

export default function Sequence()
{
    const startTime = useLyrics(state => state.getSongTime())
    const songStatus = useLyrics(state => state.songStatus)
    const setStage1 = useLyrics(state => state.setStage1)
    const activateStage1 = useLyrics(state => state.activateStage1)
    const deleteStage1 = useLyrics(state => state.deleteStage1)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {
            if(songStatus === 'playing')
            {
                let elapsedTime = 0
                elapsedTime = Date.now() - startTime
                elapsedTime /= 1000
                console.log(elapsedTime)
            }
            
        })
    })

}