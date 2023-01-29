
import Platform from './Platform.js'
import { Physics,Debug } from '@react-three/rapier'
import Lyrics from './Lyrics.js'
import LoadLyrics from './LoadLyrics.js'
import Sequence from './Sequence.js'
import { Perf } from 'r3f-perf'
import Lights from './Lights.js'
import Effects from './Effects.js'

import { OrbitControls, Sparkles, PresentationControls } from '@react-three/drei'


export default function Experience()
{
    return <>
        {/* <Perf position="top-right" /> */}
        <color args={['#191919']} attach="background" />
        {/* <OrbitControls makeDefault enableZoom={false} enablePan={false}  /> */}
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 100}}
            snap={{mass: 2, tension: 100}}
        >
        <Physics>
            <Effects />
            {/* <Debug /> */}
            <Platform />
            <LoadLyrics />
            <Lyrics />
            <Sequence />
            {/* <Lights /> */}
        </Physics>
        </PresentationControls>
        <Sparkles size={5} scale={ [ 60, 100, 60 ] } position-y={ 30 }
    speed={ 2 }
    count={ 400 } />
    </>
}