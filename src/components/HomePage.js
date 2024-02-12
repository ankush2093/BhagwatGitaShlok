import LordKrishna from '../img/krishnag.png';
import '../css/Homepage.css';
import React, { useState, useEffect } from 'react';
import Music from './Music';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const getShlok = () => {
        setLoading(true);

        const chapter = Math.floor(Math.random() * 18) + 1; // Generate a random chapter number (1-18)
        const verse = Math.floor(Math.random() * 47) + 1; // Generate a random verse number (1-47)

        fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((fetchedData) => {
                console.log(fetchedData);
                setData(fetchedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching shlok:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getShlok(); // Fetch shlok when component mounts
    }, []);


    return (
        <div className='content-main-box'>
            <div className='content-box'>
                <img className='MainLordKrishnaImg' alt='logo' src={LordKrishna} />
            </div>

            <div className='content-box'>
                <h1>श्रीमद्‍भगवद्‍गीता</h1>
                <div className="box">

                    {loading ? (
                        <img alt='loading' src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif' height="70%"
                            data-aos="fade-right"
                            data-aos-duration={2000}></img>
                    ) : data ? (
                        <div className=''>
                            <h4>आज का श्लोक</h4><hr></hr>
                            <h2>Chapter {data.chapter}, Verse {data.verse}</h2>
                            <h4 style={{ fontWeight: 'bold' }}>{data.slok}</h4>

                            <p className='HindiTranslation'><span style={{ fontWeight: 'bold' }}>Hindi Translation </span>{data.tej?.ht}</p>
                            <p className='HindiTranslation'><span style={{ fontWeight: 'bold' }}>English Translation </span>{data.siva?.et}</p>

                            <div className='soclial'>
                                <i className="fa-brands fa-square-whatsapp whatsaap"></i>
                                <a rel="noreferrer" href="https://www.facebook.com/ankushsingh2093/" target="_blank" ><i className="fa-brands fa-square-facebook facebook"></i></a>

                            </div>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}

                </div>

                <button className="btn btn-danger m-4 text-center" onClick={getShlok}>
                    <i className="fas fa-sync fa-spin" /> Another Shlok
                </button>

                <Music></Music>

            </div>
           
        </div>
    );
}

export default HomePage;
