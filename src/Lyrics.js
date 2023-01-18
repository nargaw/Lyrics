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

    
    

    const textRef = useRef()
    if(textRef)
    {
        // textRef.material.wireframe = true
        console.log(textRef.current)
    }
    let line = ''
    console.log(lyrics)
    if(lyrics.lyrics){
        const firstLine = lyrics.lyrics[0].split(" ")
        console.log(firstLine)
        line = lyrics.lyrics[0].split(" ")
    }
    const twoWord = ['Banana', 'Monkey']
    const testWord = 'Word'
    const testArray = ['this', 'is', 'a', 'test', 'text']
    const testText = 'This is a test text'
    console.log(line)
    
    let previousBoundingBox = null

    const DisplayLyrics = () => 
    {
        return <>
            {[...Array(line.length)].map((value,index) =>
                <RigidBody
                    ref={textRef}
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
                            
                            key={index} 
                            font={'./Roboto.json'}
                            size={0.75}
                        >
                                {line[index]}
                                {console.log(textRef.position)}
                        </Text3D>
                    </Center>
                </RigidBody>
            )}
        </>
        
    }
    
    return <>
        {lyricsStatus === 'loaded' ? <DisplayLyrics /> : console.log('no')}
        
    </>
}