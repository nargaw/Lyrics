import { OrbitControls } from '@react-three/drei'
import Platform from './Platform.js'
import { Physics,Debug } from '@react-three/rapier'
import Lyrics from './Lyrics.js'
import LoadLyrics from './LoadLyrics.js'
import Sequence from './Sequence.js'
import { Perf } from 'r3f-perf'
import Lights from './Lights.js'
import Effects from './Effects.js'
import { Sparkles } from '@react-three/drei'

export default function Experience()
{
    return <>
        {/* <Perf position="top-right" /> */}
        <color args={['#191919']} attach="background" />
        <OrbitControls makeDefault/>
        <Physics>
            <Effects />
            {/* <Debug /> */}
            <Platform />
            <LoadLyrics />
            <Lyrics />
            <Sequence />
            {/* <Lights /> */}
        </Physics>
        
        <Sparkles size={5} scale={ [ 60, 100, 60 ] } position-y={ 1 }
    speed={ 2 }
    count={ 400 } />
    </>
}