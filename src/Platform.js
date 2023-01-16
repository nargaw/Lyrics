import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'

export default function Platform()
{

    const platformGeometry = new THREE.BoxGeometry(12, 12, 0.5)
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
            friction={0.4}
        >
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-x={-Math.PI * 0.5}
                receiveShadow
            />
        </RigidBody>
    </>
}