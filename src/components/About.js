import React from 'react'
import { FontAwesome } from '../data/FontAwesome';

export default function About() {

    return (
        <div>

            <h5>As Salamu Alaykum</h5>
            <p></p>
            SmartAzanClock.com is an online adhan clock which can also be used to turn any Android or Raspberry Pi device into an actual adhan clock.
            <p></p>

            <div className='d-flex flex-column gap-2'>
                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It's free, safe and open source</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>There's no registration</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No subscriptions</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No app store downloads</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No browser cookies</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It works even when offline</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It doesn't require any specific Android device or brand</div>
                </div>
            </div>

            <p></p>


            Add smartazanclock.com to your home screen and run it. That's it!

            <p></p>

            <div className='d-flex flex-row justify-content-between gap-1 align-items-center mt-4'>
                <div>
                    <a className='whiteLink fs-3' title='Privacy Policy' href="/privacy-policy/" rel="noreferrer">{FontAwesome.Shield}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='Open Source Code' href="https://github.com/smartazanclock/pwa" rel="noreferrer">{FontAwesome.Github}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='Prayer Times Chrome Extension' href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">{FontAwesome.Chrome}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' href="/setup/rpi/" title='Raspberry Pi Adhan Clock Setup Instructions'>{FontAwesome.RPi}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='smartazanclock@gmail.com' href="mailto:smartazanclock@gmail.com">{FontAwesome.Envelope}</a>
                </div>
            </div>

            <p></p>

        </div >
    )
}

