import { OrbitControls } from '@react-three/drei'
import Platform from './Platform.js'
import { Physics,Debug } from '@react-three/rapier'
import Lyrics from './Lyrics.js'
import LoadLyrics from './LoadLyrics.js'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    return <>
        <Perf position="top-right" />
        <color args={['#191919']} attach="background" />
        <OrbitControls makeDefault/>
        <Physics>
            {/* <Debug /> */}
            <LoadLyrics />
            <Platform />
            <Lyrics />
        </Physics>
    </>
}