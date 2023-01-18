import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Leva />
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.01,
                far: 200,
                position: [ 0, 5, 7 ]
            } }
        >
            <Experience />
        </Canvas>
    </StrictMode>
)