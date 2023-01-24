import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame, addEffect } from "@react-three/fiber"
import * as THREE from 'three'
import { useRef, forwardRef, useEffect } from "react"

export default function Lyrics()
{
    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const timeRef = useRef()

    const lyrics = useLyrics(state => state.getLyrics())
    // const time = useLyrics(state => state.timer)
    const songStatus = useLyrics(state => state.songStatus)
    console.log(songStatus)
    const getSongTime = useLyrics(state => state.getSongTime)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            // console.log('here counting')
            let timer = 0
            let elapsedTime = 0
            // // const element = document.querySelector('.progress')
            // // console.log(element.style.width)
            
            // // element.style.width = ((elapsedTime/241) * 100) + '%'
            // const state = useLyrics.getState()
            const startTime = getSongTime()
            // console.log(startTime)
            if(songStatus === "start")
            {
                elapsedTime = 0   
            }

            elapsedTime = Date.now() - startTime
            elapsedTime /= 1000
            // console.log(elapsedTime)
            timer = elapsedTime
            timeRef.current = elapsedTime
            // console.log(timeRef.current)
            // console.log(timer)
            // // if(element.style.width && elapsedTime <= 241)
            // // {
            // //     console.log((elapsedTime/241) * 100)
            // //     element.style.width = ((elapsedTime/241) * 100) + '%'
            // // }
            // // console.log(songStatus)
            // if(time.current && elapsedTime > 0 && elapsedTime <= 242){
            //     time.current.textContent = timeDisplay(elapsedTime)
            //     // element.style.width = ((elapsedTime/241) * 100) + '%'
            //     // console.log(time.current)
            //     progress.current.style.width = ((elapsedTime/241) * 100) + '%'
            //     // setTimer(elapsedTime) 
            // }   
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])

    // if(songStatus !== 'start')
    // {
    //     time()
    // }


    console.log(timeRef.current)
    const DisplayLyrics = ({num}) => 
    {
        return <>
            {[...Array(lyrics.lyrics[num].length)].map((value,index) =>
                <RigidBody
                    type='kinematic'
                    key={index}
                    position={[
                        (index / 2) - 15 ,
                        15 + num,
                        0
                    ]}
                    restitution={0.8}
                    friction={0.5}
                    mass={0.0}
                >
                    <Center>
                        <Text3D
                            
                            key={index} 
                            font={'./MajorMonoRegular.json'}
                            size={0.25}
                            letterSpacing = {0.1}
                            scale={[2, 2, 0.5]}
                            dispose={null}
                        >
                                {lyrics.lyrics[num].toLowerCase()[index]}
                                
                        </Text3D>
                    </Center>
                </RigidBody>
            )}
        </>
    }
    
    return <>
        {songStatus === "playing" && timeRef.current < 20 && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index} key={index} />
        )}
        {songStatus === "playing" && timeRef.current > 20 && timeRef.current < 50 && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index + 5} key={index + 5}/>
        )}
    </>
}