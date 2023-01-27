import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame, addEffect } from "@react-three/fiber"
import * as THREE from 'three'
import { useRef, useEffect } from "react"

export default function Lyrics()
{
    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const timeRef = useRef()

    const lyrics = useLyrics(state => state.getLyrics())
    const getTime = useLyrics(state => state.timer)
    // console.log(getTime)
    const songStatus = useLyrics(state => state.songStatus)
    // console.log(songStatus)
    const getSongTime = useLyrics(state => state.getSongTime)
    const stage1 = useLyrics(state => state.stage1)
    const stage1active = useLyrics(state => state.stage1active)
    const stage2 = useLyrics(state => state.stage2)
    const stage2active = useLyrics(state => state.stage2active)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            let timer = 0
            let elapsedTime = 0
            const startTime = getSongTime()
            if(songStatus === "start")
            {
                elapsedTime = 0   
            }
            elapsedTime = Date.now() - startTime
            elapsedTime /= 1000
            timeRef.current = elapsedTime 
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])

    const DisplayLyrics = ({num, mass}) => 
    {
        return <>
            {/* {console.log(time)} */}
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
                    mass={mass}
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
        {/* {console.log(stage1active)} */}
        {stage1 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index} key={index} mass={stage1active ? 0.1 : 0.0}/>
        )}
        {stage2 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + 5} key={index + 5} mass={stage2active ? 0.1 : 0.0} />
        )}    
    </>
}