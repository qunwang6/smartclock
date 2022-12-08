import React from 'react'
import { Devices } from '../data/Devices';
import { FontAwesome } from '../data/FontAwesome';

export default function About() {

    return (
        <div>

            <h5>As-Salamu Alaykum</h5>

            <p></p>

            SmartAzanClock is an online adhan clock which can also be used to turn
            any Android, Windows or <a href="/setup/rpi/" className='whiteLink'>Raspberry Pi</a> device into an actual adhan clock by
            simply adding it to (& running it from) the home screen.

            <p></p>

            <div className='d-flex flex-column gap-2'>
                <div>{FontAwesome.Check} Free, safe and open source</div>
                <div>{FontAwesome.Check} No registration</div>
                <div>{FontAwesome.Check} No cookies</div>
                <div>{FontAwesome.Check} No app store downloads</div>
                <div>{FontAwesome.Check} Works even when offline</div>
            </div>

            <p></p>

            Some commonly used Android devices:
            <div className='d-flex flex-row justify-content-between flex-nowrap gap-2 mt-2'>
                {Devices.map(d => (
                    <div key={'d' + d.id}>
                        <a className='btn btn-secondary col-12' href={d.link} target="_blank">
                            <small>{d.name}</small>
                        </a>
                    </div>
                ))}
            </div>

            <p></p>

            <a className='btn btn-warning col-12' href="https://ebay.us/XF3NsK" target="_blank" rel="noreferer">
                Prefer a readily set up device?<br />Check out our listings on {FontAwesome.Ebay}
            </a>


            <div className='d-flex flex-row justify-content-between gap-1 align-items-center mt-2'>
                <div>
                    <a className='btn btn-lg btn-dark' title='Privacy Policy' href="/privacy-policy/" target="_blank" rel="noreferrer">{FontAwesome.Shield}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='Open Source Code' href="https://github.com/smartazanclock/pwa" target="_blank" rel="noreferrer">{FontAwesome.Github}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='Prayer Times Chrome Extension' href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">{FontAwesome.Chrome}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='Raspberry Pi Instructions' href="/setup/rpi/">{FontAwesome.RPi}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='smartazanclock@gmail.com' href="mailto:smartazanclock@gmail.com">{FontAwesome.Envelope}</a>
                </div>
            </div>

            <p></p>

        </div>
    )
}

