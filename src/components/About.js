import React from 'react'
import { Devices } from '../data/Devices';
import ChromeExtensionBanner from '../images/chrome-extension-banner.png'
import { FontAwesome } from '../data/FontAwesome';

export default function About() {

    return (
        <div>

            <h5>As-Salamu Alaykum</h5>

            <p></p>

            SmartAzanClock is an online adhan clock which can also be used to turn
            any Android, Windows or Raspberry Pi device into an actual adhan clock by
            simply adding it to (& running it from) the home screen.

            <p></p>

            <div className='d-flex flex-column gap-2'>
                <div>{FontAwesome.Check} It's free, safe and open source</div>
                <div>{FontAwesome.Check} No registration is required</div>
                <div>{FontAwesome.Check} No cookies</div>
                <div>{FontAwesome.Check} No ads</div>
                <div>{FontAwesome.Check} No app store downloads</div>
                <div>{FontAwesome.Check} Works even when offline</div>
            </div>

            <p></p>

            <span className='badge p-0'>Some commonly used Android devices</span>
            <div className='d-flex flex-row justify-content-between flex-nowrap gap-2'>
                {Devices.map(d => (
                    <div key={'d' + d.id} className='text-center col-6'>
                        <a className='btn btn-secondary col-12' href={d.link} target="_blank">
                            <small>{d.name}</small>
                        </a>
                    </div>
                ))}
            </div>

            <p></p>

            <a className='btn btn-warning col-12' href="https://ebay.us/i01XDk" target="_blank" rel="noreferer">
                Prefer a readily set up device?<br />Check out our listings on {FontAwesome.Ebay}
            </a>
            <p></p>

            <div className='bg-light px-2 pt-1 rounded'>
                <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">
                    <img src={ChromeExtensionBanner} className="img-fluid rounded" />
                </a>
            </div>

            <p></p>

            <div className='d-flex flex-row justify-content-between gap-1 align-items-center'>
                <div>
                    <a className='btn btn-sm btn-dark' title='Open Source Code' href="https://github.com/smartazanclock/pwa" target="_blank" rel="noreferrer">{FontAwesome.Github} GitHub</a>
                </div>
                <div>
                    <a className='btn btn-sm btn-dark' title='Privacy Policy' href="/privacy-policy/" target="_blank" rel="noreferrer">{FontAwesome.Shield} Privacy Policy</a>
                </div>
                <div>
                    <a className='btn btn-sm btn-dark' title='smartazanclock@gmail.com' href="mailto:smartazanclock@gmail.com">{FontAwesome.Envelope} Contact</a>
                </div>
            </div>

        </div>
    )
}

