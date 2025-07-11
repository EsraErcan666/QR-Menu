import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='background'>
                <div className='header'>
                    <h2>QREATIONE</h2>
                    <FontAwesomeIcon icon={faBasketShopping} className='icon' onClick={() => navigate('/basket')} />
                </div>
                <div className='main-home'>
                    <div className='row-1'>
                        <div className='main-home-1'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>DONDURMALI TATLILAR</p>
                        </div>
                        <div className='main-home-2'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>SOĞUK KAHVELER</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={('src/assets/tatli.jpg')}/>
                            <p className='p-home'>MAKARNALAR</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;