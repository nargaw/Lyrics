import { RigidBody } from "@react-three/rapier"
import { Text3D, Center } from "@react-three/drei"
import useLyrics from "./stores/useLyrics.js"
import { useFrame, addEffect } from "@react-three/fiber"
import * as THREE from 'three'
import { useRef, useEffect } from "react"

export default function Lyrics()
{
    useFrame((state, delta) =>
    {
        const lyricsPosition = new THREE.Vector3(0, 15, 0)
        state.camera.lookAt(lyricsPosition)
    })

    const timeRef = useRef()

    const lyrics = useLyrics(state => state.getLyrics())
    const getTime = useLyrics(state => state.timer)
    // console.log(getTime)
    const songStatus = useLyrics(state => state.songStatus)
    // console.log(songStatus)
    const getSongTime = useLyrics(state => state.getSongTime)
    const stage1 = useLyrics(state => state.stage1)
    const stage1active = useLyrics(state => state.stage1active)
    const stage2 = useLyrics(state => state.stage2)
    const stage2active = useLyrics(state => state.stage2active)
    const stage3 = useLyrics(state => state.stage3)
    const stage3active = useLyrics(state => state.stage3active)
    const stage4 = useLyrics(state => state.stage4)
    const stage4active = useLyrics(state => state.stage4active)
    const stage5 = useLyrics(state => state.stage5)
    const stage5active = useLyrics(state => state.stage5active)
    const stage6 = useLyrics(state => state.stage6)
    const stage6active = useLyrics(state => state.stage6active)
    const stage7 = useLyrics(state => state.stage7)
    const stage7active = useLyrics(state => state.stage7active)
    const stage8 = useLyrics(state => state.stage8)
    const stage8active = useLyrics(state => state.stage8active)
    const stage9 = useLyrics(state => state.stage9)
    const stage9active = useLyrics(state => state.stage9active)
    const stage10 = useLyrics(state => state.stage10)
    const stage10active = useLyrics(state => state.stage10active)
    const stage11 = useLyrics(state => state.stage11)
    const stage11active = useLyrics(state => state.stage11active)
    const stage12 = useLyrics(state => state.stage12)
    const stage12active = useLyrics(state => state.stage12active)
    const stage13 = useLyrics(state => state.stage13)
    const stage13active = useLyrics(state => state.stage13active)
    const stage14 = useLyrics(state => state.stage14)
    const stage14active = useLyrics(state => state.stage14active)
    const stage15 = useLyrics(state => state.stage15)
    const stage15active = useLyrics(state => state.stage15active)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {   
            let timer = 0
            let elapsedTime = 0
            const startTime = getSongTime()
            if(songStatus === "start")
            {
                elapsedTime = 0   
            }
            elapsedTime = Date.now() - startTime
            elapsedTime /= 1000
            timeRef.current = elapsedTime 
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])

    const DisplayLyrics = ({num, pos, mass}) => 
    {
        return <>
            {/* {console.log(time)} */}
            {[...Array(lyrics.lyrics[num].length)].map((value,index) =>
                <RigidBody
                    type='kinematic'
                    key={index}
                    position={[
                        (index / 2) - 10 ,
                        15 + pos,
                        0
                    ]}
                    restitution={0.8}
                    friction={0.5}
                    mass={mass}
                >
                    <Center>

                        <Text3D
                            castShadow
                            key={index} 
                            font={'./MajorMonoRegular.json'}
                            size={0.25}
                            letterSpacing = {0.1}
                            scale={[2, 2, 0.2]}
                            dispose={null}
                        >
                                {lyrics.lyrics[num].toLowerCase()[index]}
                            <meshBasicMaterial color={ [ 1.5, 1.5, 4 ] } toneMapped={ false }/>
                        </Text3D>
                    </Center>
                </RigidBody>
            )}
        </>
    }
    
    return <>
        {/* {console.log(stage1active)} */}
        {stage1 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 0)} pos={-index + 5} key={index} mass={stage1active ? 0.1 : 0.0}/>
        )}
        {stage2 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 1)} pos={-index + 5} key={index + 5} mass={stage2active ? 0.1 : 0.0} />
        )}
        {stage3 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 2)} pos={-index + 5} key={index + 5} mass={stage3active ? 0.1 : 0.0} />
        )}  
        {stage4 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 3)} pos={-index + 5} key={index + 5} mass={stage4active ? 0.1 : 0.0} />
        )}  
        {stage5 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 4)} pos={-index + 5} key={index + 5} mass={stage5active ? 0.1 : 0.0} />
        )}  
        {stage6 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 5)} pos={-index + 5} key={index + 5} mass={stage6active ? 0.1 : 0.0} />
        )}  
        {stage7 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 6)} pos={-index + 5} key={index + 5} mass={stage7active ? 0.1 : 0.0} />
        )}  
        {stage8 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 7)} key={index + 5} pos={-index + 5} mass={stage8active ? 0.1 : 0.0} />
        )}  
        {stage9 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 8)} key={index + 5} pos={-index + 5} mass={stage9active ? 0.1 : 0.0} />
        )}  
        {stage10 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 9)} key={index + 5} pos={-index + 5} mass={stage10active ? 0.1 : 0.0} />
        )}  
        {stage11 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 10)} key={index + 5} pos={-index + 5} mass={stage11active ? 0.1 : 0.0} />
        )}  
        {stage12 && [...Array(6)].map((value, index) => 
             <DisplayLyrics num={index + (5 * 11)} key={index + 5} pos={-index + 5} mass={stage12active ? 0.1 : 0.0} />
        )}
        {stage13 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + 1 + (5 * 12)} key={index + 5} pos={-index + 5} mass={stage13active ? 0.1 : 0.0} />
        )}  
        {stage14 && [...Array(5)].map((value, index) => 
             <DisplayLyrics num={index + 1 + (5 * 13)} key={index + 5} pos={-index + 5} mass={stage14active ? 0.1 : 0.0} />
        )}          
    </>
}