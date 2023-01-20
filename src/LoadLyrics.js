import { useEffect } from "react"
import useLyrics from "./stores/useLyrics"

export default function LoadLyrics()
{
    const changeStatus = useLyrics(state => state.changeStatus)
    const pushLyrics = useLyrics(state => state.setLyrics)
    const getLyrics = async () => {
        const response = await fetch('./lephilosophelyrics.json')
        const result = await response.json()
        pushLyrics(result)
        changeStatus()
    }

    useEffect(() => {
        getLyrics()
    }, [])

    return <>
        {/* {console.log(viewLyrics())} */}
    </>
}