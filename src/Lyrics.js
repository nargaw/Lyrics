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
        line = lyrics.lyrics[0].split("")
    }

    

    const DisplayLyrics = () => 
    {
        const textRef = useRef()
        

        return <>
            {[...Array(line.length)].map((value,index) =>
                <RigidBody
                    type="fixed"
                    key={index}
                    position={[
                        (index / 5) - 5.5 ,
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
                            letterSpacing = {0.001}
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