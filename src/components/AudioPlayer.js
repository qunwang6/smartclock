import React, { useContext, useRef, useEffect } from 'react'
import { AppContext } from '../AppContext';
import { Audios, QuranAudios } from '../data/Audios';
import { FontAwesome } from '../data/FontAwesome';

export default function AudioPlayer() {

    const { time, locationSettings, deviceSettings, dol } = useContext(AppContext)
    const playerDiv = useRef(null)
    const playButtonDiv = useRef(null)
    const audioPlayer = useRef(null)

    useEffect(() => {


        if (!audioPlayer.current.paused) {
            dol('Already playing audio.')
            return;
        }

        let AU = JSON.parse(localStorage.getItem("AAA"));
        if (AU) {
            if (AU.time === time) {
                if (!AU.isPlayed) {
                    AU.isPlayed = true;
                    localStorage.setItem("AAA", JSON.stringify({ ...AU }));
                    let audio = Audios.find(a => a.id === AU.id);
                    audioPlayer.current.src = audio.source;
                    let promise = audioPlayer.current.play();
                    if (promise) {
                        promise.then(_ => {
                            // autoplay started!
                            dol('Azan called: ' + locationSettings.address);
                            playerDiv.current.style.visibility = 'visible';
                            playButtonDiv.current.style.visibility = 'hidden';
                        }).catch(error => {
                            dol(error);
                            playerDiv.current.style.visibility = 'hidden';
                            playButtonDiv.current.style.visibility = 'visible';
                        });
                    }
                }
            }
            else {
                localStorage.removeItem("AAA");
                playButtonDiv.current.style.visibility = 'hidden';
            }

        }


        let QA = JSON.parse(localStorage.getItem("QuranAudio"));
        if (QA) {
            localStorage.removeItem("QuranAudio");
            let audio = QuranAudios.find(a => a.id === QA.id);
            audioPlayer.current.src = audio.source;
            let promise = audioPlayer.current.play();
            if (promise) {
                promise.then(_ => {
                    // autoplay started!
                    playerDiv.current.style.visibility = 'visible';
                    playButtonDiv.current.style.visibility = 'hidden';
                }).catch(error => {
                    dol(error);
                    playerDiv.current.style.visibility = 'hidden';
                    playButtonDiv.current.style.visibility = 'visible';
                });
            }
        }

    })

    const stopAudio = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
        playerDiv.current.style.visibility = 'hidden';
        playButtonDiv.current.style.visibility = 'hidden';
    }

    const playAudio = () => {
        audioPlayer.current.play();
        playerDiv.current.style.visibility = 'visible';
        playButtonDiv.current.style.visibility = 'hidden';
    }

    return (
        <>
            <div ref={playerDiv} onClick={stopAudio} className="audioButtonDiv">
                <div className='d-flex h-100 justify-content-start align-items-top'>
                    <div>
                        <audio id="audioPlayer" src='' ref={audioPlayer} onEnded={stopAudio} />
                    </div>
                    <div className='fs-2 text-light p-2'>
                        {FontAwesome.Stop} Tap screen to stop audio
                    </div>
                </div>
            </div>
            <div ref={playButtonDiv} onClick={playAudio} className="audioButtonDiv">
                <div className='d-flex h-100 justify-content-start align-items-top'>
                    <div className='fs-2 text-light p-2'>
                        {FontAwesome.Play} Tap screen to play audio
                    </div>
                </div>
            </div>
        </>
    )
}
