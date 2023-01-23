import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame, addEffect } from "@react-three/fiber"
import * as THREE from 'three'
import { useEffect } from "react"

import { useRef, forwardRef } from "react"

export default function Lyrics()
{
    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const lyrics = useLyrics(state => state.getLyrics())
    // const time = useLyrics(state => state.timer)
    const songStatus = useLyrics(state => state.songStatus)




    const time = useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            // // const element = document.querySelector('.progress')
            // // console.log(element.style.width)
            // let elapsedTime = 0
            // // element.style.width = ((elapsedTime/241) * 100) + '%'
            // const state = useLyrics.getState()
            // const startTime = getSongTime()
            // // console.log(startTime)
            // if(songStatus === "playing")
            // {
            //     elapsedTime = 0   
            // }

            // elapsedTime = Date.now() - startTime
            // elapsedTime /= 1000
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


    // console.log(time)
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
        {/* {[...Array(5)].map((value, index) => 
            <DisplayLyrics num={index} key={index} />
        )}
        {[...Array(5)].map((value, index) => 
            <DisplayLyrics num={index + 5} key={index + 5}/>
        )} */}
    </>
}