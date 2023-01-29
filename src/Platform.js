import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { Sparkles } from '@react-three/drei'

export default function Platform()
{

    const platformGeometry = new THREE.BoxGeometry(100, 200, 0.5)
    const platformMaterial = new THREE.MeshStandardMaterial({
        color: '#444444'
    })
    const platform = useRef()

    return <>
        {/* <Sparkles size={10} scale={ [ 60, 100, 60 ] } position-y={ 1 }
    speed={ 2 }
    count={ 400 }/> */}
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
                rotation-y={-Math.PI * 0.5}
                position-x={-50}
                receiveShadow
            />
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-y={-Math.PI * 0.5}
                position-x={50}
                receiveShadow
            />
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-z={-Math.PI }
                position-z={-50}
                receiveShadow
            />
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-z={-Math.PI }
                position-z={50}
                receiveShadow
            />
        </RigidBody>
    </>
}