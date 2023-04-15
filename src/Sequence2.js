import useLyrics from "./stores/useLyrics";
import { useEffect, useRef } from "react";
import { addEffect } from "@react-three/fiber";

export default function Sequence()
{
    const startTime = useLyrics(state => state.getSongTime())
    const restartSong = useLyrics(state => state.restartSong)
    const songStatus = useLyrics(state => state.songStatus)
    const setStage1 = useLyrics(state => state.setStage1)
    const activateStage1 = useLyrics(state => state.activateStage1)
    const deleteStage1 = useLyrics(state => state.deleteStage1)
    const setStage2 = useLyrics(state => state.setStage2)
    const activateStage2 = useLyrics(state => state.activateStage2)
    const deleteStage2 = useLyrics(state => state.deleteStage2)
    const setStage3 = useLyrics(state => state.setStage3)
    const activateStage3 = useLyrics(state => state.activateStage3)
    const deleteStage3 = useLyrics(state => state.deleteStage3)
    const setStage4 = useLyrics(state => state.setStage4)
    const activateStage4 = useLyrics(state => state.activateStage4)
    const deleteStage4 = useLyrics(state => state.deleteStage4)
    const setStage5 = useLyrics(state => state.setStage5)
    const activateStage5 = useLyrics(state => state.activateStage5)
    const deleteStage5 = useLyrics(state => state.deleteStage5)
    const setStage6 = useLyrics(state => state.setStage6)
    const activateStage6 = useLyrics(state => state.activateStage6)
    const deleteStage6 = useLyrics(state => state.deleteStage6)
    const setStage7 = useLyrics(state => state.setStage7)
    const activateStage7 = useLyrics(state => state.activateStage7)
    const deleteStage7 = useLyrics(state => state.deleteStage7)
    const setStage8 = useLyrics(state => state.setStage8)
    const activateStage8 = useLyrics(state => state.activateStage8)
    const deleteStage8 = useLyrics(state => state.deleteStage8)
    const setStage9 = useLyrics(state => state.setStage9)
    const activateStage9 = useLyrics(state => state.activateStage9)
    const deleteStage9 = useLyrics(state => state.deleteStage9)
    const setStage10 = useLyrics(state => state.setStage10)
    const activateStage10 = useLyrics(state => state.activateStage10)
    const deleteStage10 = useLyrics(state => state.deleteStage10)
    const setStage11 = useLyrics(state => state.setStage11)
    const activateStage11 = useLyrics(state => state.activateStage11)
    const deleteStage11 = useLyrics(state => state.deleteStage11)
    const setStage12 = useLyrics(state => state.setStage12)
    const activateStage12 = useLyrics(state => state.activateStage12)
    const deleteStage12 = useLyrics(state => state.deleteStage12)
    const setStage13 = useLyrics(state => state.setStage13)
    const activateStage13 = useLyrics(state => state.activateStage13)
    const deleteStage13 = useLyrics(state => state.deleteStage13)
    const setStage14 = useLyrics(state => state.setStage14)
    const activateStage14 = useLyrics(state => state.activateStage14)
    const deleteStage14 = useLyrics(state => state.deleteStage14)
    const setStage15 = useLyrics(state => state.setStage15)
    const activateStage15 = useLyrics(state => state.activateStage15)
    const deleteStage15 = useLyrics(state => state.deleteStage15)
    const setStage16 = useLyrics(state => state.setStage16)
    const activateStage16 = useLyrics(state => state.activateStage16)
    const deleteStage16 = useLyrics(state => state.deleteStage16)
    const setStage17 = useLyrics(state => state.setStage17)
    const activateStage17 = useLyrics(state => state.activateStage17)
    const deleteStage17 = useLyrics(state => state.deleteStage17)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {
            if(songStatus === 'playing')
            {
                let elapsedTime = 0
                elapsedTime = Date.now() - startTime
                elapsedTime /= 1000
                elapsedTime = Math.round(elapsedTime)
                // console.log(elapsedTime)

                // if(elapsedTime >= 241)
                // {
                //     restartSong()
                // }

                //stage1 - 9
                if(elapsedTime > 9)
                {
                    setStage1()
                }
                if(elapsedTime > 22)
                {
                    activateStage1()
                }
                if(elapsedTime > 33)
                {
                    deleteStage1()
                }

                //stage2 - 22
                if(elapsedTime > 22)
                {
                    setStage2()
                }
                if(elapsedTime > 33)
                {
                    activateStage2()
                }
                if(elapsedTime > 40)
                {
                    deleteStage2()
                }

                //stage3 - 33
                if(elapsedTime > 33)
                {
                    setStage3()
                }
                if(elapsedTime > 40)
                {
                    activateStage3()
                }
                if(elapsedTime > 49)
                {
                    deleteStage3()
                }

                //stage4 - 40
                if(elapsedTime > 40)
                {
                    setStage4()
                }
                if(elapsedTime > 49)
                {
                    activateStage4()
                }
                if(elapsedTime > 64)
                {
                    deleteStage4()
                }

                //stage5 - 49
                if(elapsedTime > 49)
                {
                    setStage5()
                }
                if(elapsedTime > 64)
                {
                    activateStage5()
                }
                if(elapsedTime > 82)
                {
                    deleteStage5()
                }

                //stage6 - 64
                if(elapsedTime > 64)
                {
                    setStage6()
                }
                if(elapsedTime > 82)
                {
                    activateStage6()
                }
                if(elapsedTime > 95)
                {
                    deleteStage6()
                }

                //stage7 - 82
                if(elapsedTime > 82)
                {
                    setStage7()
                }
                if(elapsedTime > 95)
                {
                    activateStage7()
                }
                if(elapsedTime > 106)
                {
                    deleteStage7()
                }

                //stage8 - 95
                if(elapsedTime > 95)
                {
                    setStage8()
                }
                if(elapsedTime > 106)
                {
                    activateStage8()
                }
                if(elapsedTime > 114)
                {
                    deleteStage8()
                }

                //stage9 - 106
                if(elapsedTime > 106)
                {
                    setStage9()
                }
                if(elapsedTime > 114)
                {
                    activateStage9()
                }
                if(elapsedTime > 123)
                {
                    deleteStage9()
                }

                //stage10 - 114
                if(elapsedTime > 114)
                {
                    setStage10()
                }
                if(elapsedTime > 123)
                {
                    activateStage10()
                }
                if(elapsedTime > 130)
                {
                    deleteStage10()
                }

                //stage11 - 123
                if(elapsedTime > 123)
                {
                    setStage11()
                }
                if(elapsedTime > 130)
                {
                    activateStage11()
                }
                if(elapsedTime > 147)
                {
                    deleteStage11()
                }

                //stage12 - 130
                if(elapsedTime > 130)
                {
                    setStage12()
                }
                if(elapsedTime > 147)
                {
                    activateStage12()
                }
                if(elapsedTime > 158)
                {
                    deleteStage12()
                }

                //stage13 - 147
                if(elapsedTime > 147)
                {
                    setStage13()
                }
                if(elapsedTime > 158)
                {
                    activateStage13()
                }
                if(elapsedTime > 172)
                {
                    deleteStage13() 
                }

                //stage14 - 158
                if(elapsedTime > 158)
                {
                    setStage14()
                }
                if(elapsedTime > 172)
                {
                    activateStage14()
                }
                if(elapsedTime > 183)
                {
                    deleteStage14()
                }

                //stage15 - 172
                if(elapsedTime > 172)
                {
                    setStage15()
                }
                if(elapsedTime > 183)
                {
                    activateStage15()
                }
                if(elapsedTime > 191)
                {
                    deleteStage15()
                }

                //stage16 - 183
                if(elapsedTime > 183)
                {
                    setStage16()
                }
                if(elapsedTime > 191)
                {
                    activateStage16()
                }
                if(elapsedTime > 195)
                {
                    deleteStage16()
                }

                //stage17 - 191
                if(elapsedTime > 191)
                {
                    setStage17()
                }
                if(elapsedTime > 195)
                {
                    activateStage17()
                }
                if(elapsedTime > 202)
                {
                    deleteStage17()
                }

                if(elapsedTime >= 203)
                {
                    restartSong()
                }
            }
        })
    })

}