import React, { useContext, useRef } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import Settings from './Settings'
import Recitations from './Recitations';
import Alarms from './Alarms';
import About from './About';
import { AppContext } from '../AppContext';
import { FontAwesome } from '../data/FontAwesome';


export default function Menu() {

    const { showMenu, setShowMenu, deviceSettings } = useContext(AppContext)

    const recitationsTab = useRef(null);

    const goRecitations = () => {
        recitationsTab.current.click();
    }

    return (
        <Offcanvas placement="end" scroll="false" show={showMenu} onHide={() => setShowMenu(false)} className="bg-dark">
            <Offcanvas.Header className='pb-2'>
                <div className='d-flex flex-row w-100 align-items-start justify-content-between'>
                    <div id='topMenu'>
                        <ul className="nav nav-pills">
                            <li className='nav-item'>
                                <button className="nav-link active fs-4" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    {FontAwesome.Gear}
                                </button>
                            </li>

                            {navigator.onLine ? (<li className='nav-item'>
                                <button ref={recitationsTab} className="nav-link fs-4" id="recitations-tab" data-bs-toggle="tab"
                                    data-bs-target="#recitations" type="button" role="tab">
                                    {FontAwesome.Book}
                                </button>
                            </li>) : null}

                            {deviceSettings.azanCallsEnabled === 'Y' ? (<li className='nav-item'>
                                <button className="nav-link fs-4" id="alarms-tab" data-bs-toggle="tab"
                                    data-bs-target="#alarms" type="button" role="tab">
                                    {FontAwesome.Bell}
                                </button>
                            </li>) : null}

                            
                        </ul>
                    </div>
                    <div className='px-3'>
                        <span onClick={() => { setShowMenu(false) }} className="pointer bg-dark text-secondary fs-2">
                            {FontAwesome.Close}
                        </span>
                    </div>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="tab-content pt-0">
                    <div className="tab-pane fade show active" id="home">
                        <div className='px-3'>
                            <Settings />
                            <div className='d-flex flex-row justify-content-between align-items-center mt-3'>

                                {navigator.onLine ? (<div>
                                    <span className='badge p-0'>{FontAwesome.CheckOn} Auto updates are enabled</span>
                                </div>) : null}

                                <div>
                                    <span onClick={goRecitations} className="text-light pointer opacity-0">{FontAwesome.Book}</span>
                                </div>

                                {!navigator.onLine ? (<div>
                                    <span title='Looks like you are no longer connected to the Internet. No worries. SmartAzanClock will still work.' className='badge'>
                                        {FontAwesome.Plug} Offline
                                    </span>
                                </div>) : null}


                                {navigator.onLine ? (<div>
                                    <a className='btn btn-sm btn-dark' href="/reset/">{FontAwesome.Reset} Reset App</a>
                                </div>) : null}

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="recitations">
                        <div className='px-3 text-light'>
                            <Recitations />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="about">
                        <div className='px-3 text-light'>
                            <About />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="alarms">
                        <div className='px-3 text-light'>
                            <Alarms />
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas >
    )
}



