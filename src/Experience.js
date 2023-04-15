
import Platform from './Platform.js'
import { Physics,Debug } from '@react-three/rapier'
// import Lyrics from './Lyrics.js'
import Lyrics from './Lyrics2.js'
import LoadLyrics from './LoadLyrics.js'
// import Sequence from './Sequence.js'
import Sequence from './Sequence2.js'
import { Perf } from 'r3f-perf'
import Lights from './Lights.js'
import Effects from './Effects.js'

import { OrbitControls, Sparkles, PresentationControls, Stars } from '@react-three/drei'


export default function Experience()
{
    return <>
        {/* <Perf position="top-right" /> */}
        <color args={['#000']} attach="background" />
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
        {/* <Sparkles size={10} scale={ [ 150, 150, 0 ] } position={[2, -5, -55]} speed={ 3 } count={ 400 } /> */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
}