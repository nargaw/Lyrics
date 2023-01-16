import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Leva />
        <Canvas
            
        >

        </Canvas>
    </StrictMode>
)