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

    console.log(lyrics)

    return <>

    </>
}