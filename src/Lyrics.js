import { useRef, useEffect, useState } from "react"
import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"

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

    let line = ''
    if(lyrics.lyrics){
        line = lyrics.lyrics[0].toLowerCase().split("")
    }

    

    const DisplayLyrics = () => 
    {
        const textRef = useRef()
        

        return <>
            {[...Array(line.length)].map((value,index) =>
                <RigidBody
                    type="dynamic"
                    key={index}
                    position={[
                        (index / 4) - 5.75 ,
                        5,
                        0
                    ]}
                >
                    <Center>
                        <Text3D
                            name={index}
                            ref={textRef}
                            key={index} 
                            font={'./MajorMonoRegular.json'}
                            size={0.25}
                            letterSpacing = {0.1}
                            scale={[1, 1, 0.5]}
                        >
                                {line[index]}
                                
                        </Text3D>
                    </Center>
                </RigidBody>
            )}
        </>
    }
    
    return <>
        {lyricsStatus === 'loaded' && <DisplayLyrics />}
    </>
}