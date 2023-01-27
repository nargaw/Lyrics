import useLyrics from "./stores/useLyrics";
import { useEffect, useRef } from "react";
import { addEffect } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export default function Interface()
{
    const time = useRef()
    const progress = useRef()
    // console.log(progress.current)
    const songStatus = useLyrics(state => state.songStatus)
    const getSongTime = useLyrics(state => state.getSongTime)
    const startSong = useLyrics(state => state.startSong)
    const setTimer = useLyrics(state => state.setTimer)
    const timer = useLyrics(state => state.timer)

    


    const timeDisplay = (e) => 
    {
        const m = Math.floor(e % 3600 / 60).toString().padStart(2,'0')
        const s = Math.floor(e % 60).toString().padStart(2,'0')

        return m + ':' + s;
    }
    
    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            // const element = document.querySelector('.progress')
            // console.log(element.style.width)
            let elapsedTime = 0
            // element.style.width = ((elapsedTime/241) * 100) + '%'
            const state = useLyrics.getState()
            const startTime = getSongTime()
            // console.log(startTime)
            if(songStatus === "start")
            {
                elapsedTime = 0   
            }

            elapsedTime = Date.now() - startTime
            elapsedTime /= 1000
            // if(element.style.width && elapsedTime <= 241)
            // {
            //     console.log((elapsedTime/241) * 100)
            //     element.style.width = ((elapsedTime/241) * 100) + '%'
            // }
            // console.log(songStatus)
            if(time.current && elapsedTime > 0 && elapsedTime <= 242){
                time.current.textContent = timeDisplay(elapsedTime)
                // element.style.width = ((elapsedTime/241) * 100) + '%'
                // console.log(time.current)
                progress.current.style.width = ((elapsedTime/241) * 100) + '%'
                setTimer(Math.round(elapsedTime/2) * 2) 
            }   
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])
    
    return <>
        <div className="interface">
            {songStatus === 'start' && <div className="start" onClick={startSong}>start</div> }
            {/* <div className="pause">pause</div> */}
            {/* <div className="restart">restart</div> */}
            <div className="song">song: le philosophe sans la barbe</div>
            <div className="artist">artist: bigflo & oli </div>
            <div id='Progress_Status'>
                <div className="progress" ref={progress}></div>
            </div>
            <div className="time" ref={time}>00:00</div>
        </div>
    </>
}