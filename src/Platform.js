import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'

export default function Platform()
{

    const platformGeometry = new THREE.BoxGeometry(100, 100, 0.5)
    const platformMaterial = new THREE.MeshStandardMaterial({
        color: '#444444'
    })
    const platform = useRef()

    return <>
        <RigidBody
            ref={platform}
            type="kinematicPosition"
            colliders="cuboid"
            restitution={0.2}
            friction={1}
        >
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-x={-Math.PI * 0.5}
                receiveShadow
            />
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-x={-Math.PI * 0.5}
                receiveShadow
            />
        </RigidBody>
    </>
}