import { Bloom, SSR, DepthOfField, EffectComposer } from "@react-three/postprocessing"

export default function Effects()
{
    return <EffectComposer>
            {/* <SSR 
                intensity={0.1}
            /> */}
            <Bloom
                mipmapBlur
                intensity={ 1.5 }
            />
    </EffectComposer>
}