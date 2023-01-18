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
        line = lyrics.lyrics[0].split(" ")
    }

    const textRef = useRef()
    console.log(textRef.current)

    const DisplayLyrics = () => 
    {
        return <>
            {[...Array(line.length)].map((value,index) =>
                <RigidBody
                   
                    key={index}
                    position={[
                        index - 2.5,
                        5,
                        0
                    ]}
                >
                    <Center>
                        <Text3D
                            name={index}
                            ref={textRef}
                            key={index} 
                            font={'./Roboto.json'}
                            size={0.75}
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