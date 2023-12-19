import React from 'react'
import '../CSS/Herosection2.css';
import {Link} from 'react-router-dom';

const Herosection2 = () => {
    return (
        <>
            <h2 className="heading-style-h1">Explore</h2>

            <div className='flow'>

                <div className="card">
                    <div className="boxshadow"></div>
                    <div className="main">
                        <div className="top"></div>
                        <div className="left side"></div>
                        <div className="right side"></div>
                        <div className="title">D-GPT</div>
                        <div className="button-container">
                            <Link to={"/MainSol"}><button className="button" >
                                <svg
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                >
                                    <rect ry="5" rx="5" y="2" x="2" height="20" width="20"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line y2="6.5" y1="6.5" x2="17.51" x1="17.5"></line>
                                </svg>
                            </button></Link>
                        </div>
                    </div>
                </div>

                {/* ----------------------- */}

                <div className="card">
                    <div className="boxshadow"></div>
                    <div className="main">
                        <div className="top"></div>
                        <div className="left side"></div>
                        <div className="right side"></div>
                        <div className="title">NFT-Place</div>
                        <div className="button-container">
                            <button className="button">
                                <svg
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    fill="none"
                                    stroke="red"
                                    viewBox="0 0 24 24"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                >
                                    <rect ry="5" rx="5" y="2" x="2" height="20" width="20"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line y2="6.5" y1="6.5" x2="17.51" x1="17.5"></line>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Herosection2