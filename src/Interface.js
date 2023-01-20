import useLyrics from "./stores/useLyrics";

export default function Interface()
{
    const getSongTime = useLyrics(state => state.getSongTime())
    const startSong = useLyrics(state => state.startSong())
    
    return <>
        <div className="interface">
            {getSongTime === 0 && <div className="start">start</div> }
            {/* <div className="pause">pause</div> */}
            {/* <div className="restart">restart</div> */}
        </div>
    </>
}