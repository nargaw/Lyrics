import { useEffect, useState } from "react"

export default function Lyrics()
{
    const [lyrics, setLyrics] = useState([])

    const getLyrics = async () => {
        const response = await fetch('./lephilosophelyrics.json')
        const result = await response.json()
        setLyrics(result)
        console.log(result)
    }

    useEffect(() => {
        getLyrics()
    }, [])

    return <>

    </>
}