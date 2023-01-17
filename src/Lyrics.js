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

    // if(lyrics)
    // {
    //     console.log(lyrics.lyrics)
    // }
    const [text, setText] = useState([])
    const testText = 'test'
    const CreateText = () => {
        for (let i =0; i < testText.length; i++)
        {
            console.log(testText[i])
            return <>
                <RigidBody>
                    <Text3D
                        font="./Roboto.json"
                    >
                    test
                    </Text3D>
                </RigidBody>
            </>
        }
    }

    setText(
        <CreateText />
    )
    

    return <>
        {[...text]}
        {/* {[...Array(10)].map((value, index) =>
            <RigidBody>
            <Text3D
                font="./Roboto.json"
            >
                {}
            </Text3D>
        </RigidBody>
        )} */}
        {/* {text()} */}
    </>
}