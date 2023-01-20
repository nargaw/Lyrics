import { useRef, useEffect, useState } from "react"
import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

export default function Lyrics()
{
    const lyricsStatus = useLyrics(state => state.current)
    const changeStatus = useLyrics(state => state.changeStatus)
    console.log(lyricsStatus)
    const [lyrics, setLyrics] = useState([])
    const getLyrics = async () => {
        const response = await fetch('./lephilosophelyrics.json')
        const result = await response.json()
        setLyrics(result)
        changeStatus()
    }

    useEffect(() => {
        getLyrics()
    }, [])

    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const DisplayLyrics = ({num}) => 
    {
        // const test = 'text'
        // const textRef = useRef()
        // let line
        // if(lyrics.lyrics){
        //     // console.log('yes')
        //     console.log(lyrics.lyrics[num])
        //     // line = lyrics.lyrics[0].toLowerCase().split("")
        // }
        return <>
            {[...Array(lyrics.lyrics[num].length)].map((value,index) =>
                <RigidBody
                    type='fixed'
                    key={index}
                    position={[
                        (index / 2) - 10 ,
                        15 + num,
                        0
                    ]}
                    restitution={0.8}
                    friction={0.5}
                    mass={0.5}
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
        {lyricsStatus === 'loaded' && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index} key={index}/>
        )}
        {lyricsStatus === 'loaded' && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index + 5} key={index + 5}/>
        )}
    </>
}