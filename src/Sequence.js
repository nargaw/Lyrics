import useLyrics from "./stores/useLyrics";
import { useEffect, useRef } from "react";
import { addEffect } from "@react-three/fiber";

export default function Sequence()
{
    const startTime = useLyrics(state => state.getSongTime())
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
    const setStage = useLyrics(state => state.setStage4)
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
                console.log(elapsedTime)

                //stage1
                if(elapsedTime > 0)
                {
                    setStage1()
                }
                if(elapsedTime > 33)
                {
                    activateStage1()
                }
                if(elapsedTime > 53)
                {
                    deleteStage1()
                }

                //stage2
                if(elapsedTime > 33)
                {
                    setStage2()
                }
                if(elapsedTime > 53)
                {
                    activateStage2()
                }
                if(elapsedTime > 66)
                {
                    deleteStage2()
                }

                //stage3
                if(elapsedTime > 53)
                {
                    setStage3()
                }
                if(elapsedTime > 66)
                {
                    activateStage3()
                }
                if(elapsedTime > 80)
                {
                    deleteStage3()
                }

                // //stage4
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage5
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage6
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage7
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage8
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage9
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage10
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage11
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage12
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage13
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage14
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }

                // //stage15
                // if(elapsedTime > 0 && elapsedTime < 53)
                // {
                //     setStage1()
                // }
                // if(elapsedTime > 34)
                // {
                //     activateStage1()
                // }
                // if(elapsedTime >= 53)
                // {
                //     deleteStage1()
                // }
            }
        })
    })

}