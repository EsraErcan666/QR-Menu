import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import accra from '../assets/accra-bonus.png';
import tatli from '../assets/dondurma-tatli.png';
import kahve from '../assets/soguk-kahve.jpg';
import cikolata from '../assets/cikolata.jpg';
import sicak from '../assets/sicak-kahve.jpg'
import accra2 from '../assets/pasta.jpg';
import kahve2 from '../assets/kahve-3.jpg';
import makarna from '../assets/makarna.jpg';
import soguk from '../assets/soguk-icecek.jpg';
import accra3 from '../assets/pasta.jpg';
import soguk2 from '../assets/soguk-kahve.jpg';
import dondurma from '../assets/dondurma.jpg';
import redbull from '../assets/redbull.jpg';
import mocktail from '../assets/mocktail.jpg';
import detoks from '../assets/detoks.png';
import redbull2 from '../assets/redbull-2.jpg';
import kahvalti from '../assets/kahvalti.jpg';
import generation from '../assets/generation.jpg';
import cikolata2 from '../assets/sicak-cikolata.jpg';
import cay from '../assets/cay.jpg';
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
                            <img className='home-image' src={accra}/>
                            <p className='p-home'>ACCRA BONUS</p>
                        </div>
                        <div className='main-home-2'>
                            <img className='home-image' src={tatli}/>
                            <p className='p-home'>DONDURMALI TATLILAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img
                                className='home-image'
                                src={kahve}
                                onClick={() => navigate('/product?category=soguk-kahveler')}
                                style={{cursor:'pointer'}}
                            />
                            <p className='p-home'>SOĞUK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={cikolata}/>
                            <p className='p-home'>ÇİKOLATALI TATLILAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={sicak} />
                            <p className='p-home'>SICAK KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={accra2}/>
                            <p className='p-home'>ACCRA COOKİES</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={kahve2} />
                            <p className='p-home'>KAHVELER & YÖRESEL KAHVELER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={makarna}/>
                            <p className='p-home'>ACCRA MAKARNA</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={soguk} />
                            <p className='p-home'>SOĞUK ALTERNATİFLER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={accra3}/>
                            <p className='p-home'>ACCRA PATİSSERİE</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={soguk2} />
                            <p className='p-home'>SOĞUK İÇECEKLER</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={dondurma}/>
                            <p className='p-home'>DONDURMALAR</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={redbull} />
                            <p className='p-home'>RED BULL COCKTAIL</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={mocktail}/>
                            <p className='p-home'>MOCKTAIL</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={detoks} />
                            <p className='p-home'>DETOKS</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={redbull2}/>
                            <p className='p-home'>RED BULL</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={kahvalti} />
                            <p className='p-home'>KAHVALTI / BRANCH</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={generation}/>
                            <p className='p-home'>III. GENERATION FAMILY</p>
                        </div>
                    </div>

                    <div className='row-2'>
                        <div className='main-home-3'>
                            <img className='home-image' src={cikolata2} />
                            <p className='p-home'>SICAK ÇİKOLATALAR</p>
                        </div>
                        <div className='main-home-3'>
                            <img className='home-image' src={cay}/>
                            <p className='p-home'>ÇAY ÇEŞİTLERİ</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;