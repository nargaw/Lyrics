import { OrbitControls } from '@react-three/drei'
import Platform from './Platform.js'
import { Physics,Debug } from '@react-three/rapier'
import Lyrics from './Lyrics.js'
import LoadLyrics from './LoadLyrics.js'

export default function Experience()
{
    return <>
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