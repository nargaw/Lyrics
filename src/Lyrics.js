import { useRef, useEffect, useState } from "react"
import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"

export default function Lyrics()
{
    const [lyrics, setLyrics] = useState([])
    const getLyrics = async () => {
        const response = await fetch('./lephilosophelyrics.json')
        const result = await response.json()
        setLyrics(result)
    }

    useEffect(() => {
        getLyrics()
    }, [])

    const textRef = useRef()
    console.log(textRef.current)
    console.log(lyrics)
    if(lyrics.lyrics){
        const firstLine = lyrics.lyrics[0].split(" ")
        console.log(firstLine)
    }
    
    const testWord = 'Word'
    const testArray = ['this', 'is', 'a', 'test', 'text']
    const testText = 'This is a test text'
    
    return <>
        {[...Array(testArray.length)].map((value,index) =>
            <RigidBody
                
                key={index}
                position={[
                    index - 4,
                    5,
                    0
                ]}
            >
                <Center>
                    <Text3D
                        ref={textRef} 
                        font={'./Roboto.json'}
                        size={0.75}
                    >
                            {testArray[index]}
                    </Text3D>
                </Center>
            </RigidBody>
        )}
    </>
}