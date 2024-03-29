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

    const timeDisplay = (e) => 
    {
        const m = Math.floor(e % 3600 / 60).toString().padStart(2,'0')
        const s = Math.floor(e % 60).toString().padStart(2,'0')
        return m + ':' + s;
    }

    const restart = () => 
    {

    }
    
    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            
            let elapsedTime = 0
            const startTime = getSongTime()
            if(songStatus === "start")
            {
                elapsedTime = 0   
            }

            elapsedTime = Date.now() - startTime
            elapsedTime /= 1000

            // if(time.current && elapsedTime > 0 && elapsedTime <= 242){
            //     time.current.textContent = timeDisplay(elapsedTime)
            //     progress.current.style.width = ((elapsedTime/241) * 100) + '%'
            // }
            // if(elapsedTime > 241)
            // {

            // } 
            if(time.current && elapsedTime > 0 && elapsedTime <= 203){
                time.current.textContent = timeDisplay(elapsedTime)
                progress.current.style.width = ((elapsedTime/203) * 100) + '%'
            }
            if(elapsedTime > 202)
            {

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
            {songStatus === 'restart' && <div className="restart" onClick={window.location.reload()}>restart</div>}
            {/* <div className="song">song: le philosophe sans la barbe</div>
            <div className="artist">artist: bigflo & oli </div> */}
            <div className="song">song: so good looking</div>
            <div className="artist">artist: the kooks </div>
            <div id='Progress_Status'>
                <div className="progress" ref={progress}></div>
            </div>
            <div className="time" ref={time}>00:00</div>
        </div>
    </>
}