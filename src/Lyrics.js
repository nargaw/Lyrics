import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import { useRef, forwardRef } from "react"

export default function Lyrics()
{
    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const lyrics = useLyrics(state => state.getLyrics())
    const time = useLyrics(state => state.timer)
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
        {time > 0 && time < 20 && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index} key={index} />
        )}
        {time >= 20 && time < 40 && [...Array(5)].map((value, index) => 
            <DisplayLyrics num={index + 5} key={index + 5}/>
        )}
    </>
}