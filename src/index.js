import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import Interface from './Interface'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Leva />
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.01,
                far: 2000,
                position: [ 0, 15, 40 ]
            } }
        >
            <Experience />
        </Canvas>
        <Interface />
    </StrictMode>
)