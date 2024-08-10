import React from 'react'
import Collage from './Collage'
import sir1 from '../../assets/Sir1.png'
import sir2 from '../../assets/VShah.png'
import '../Teamspage/teams.css'
import ujjwalS from '../../assets/ujjalSir.png'
import edclogo from "../../assets/logo.png";
import '../Teamspage/timeline.css';
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"
import AdarshRaj from "../../assets/Adarsh raj.jpg";
import boy from "../../assets/boy.png"
import AmanPratik from "../../assets/Aman Pratik-min.jpeg";
import Anshuman from "../../assets/Anshuman Raj.jpeg";
import Debjyoti from "../../assets/Debjyoti Dey.jpeg"
import Diptanshu from "../../assets/Diptanshu Mahakud.jpg";
import Nikhil from "../../assets/NIKHIL KUMAR.png";
import Nishit from "../../assets/Nishit Sharma.png";
import Pranav from "../../assets/Pranav raj.jpg";
import Prince from "../../assets/Prince Raj.jpg";
import Pulkit from "../../assets/Pulkit Rewri.jpg";
import Shubham from "../../assets/Shubham Kumar.jpg";
import VarunG from "../../assets/Varun Gupta.jpg";
import VarunK from "../../assets/Varun Kumar.jpg";
import Yash from "../../assets/YASHWANT Bhise.jpeg";
import Yogesh from "../../assets/YOGESH KUMAR.jpg";
import girl from "../../assets/girl.jpeg";




function Teamspage() {
    return (
        <>
            <Collage />
            <div className='mains'>
                <div className=' p-10 hero-2'>
                    <div className='p-1'> <h3 className='text-xl font-semibold mb-4'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ou</span>r Team</h3>
                        <h2 className='text-2xl font-bold mb-4 '>Faculty Member</h2>

                    </div>
                    <div className='flex space-x-4 justify-evenly columns'>
                        <div className='prof1 flex flex-col'>
                            <div className='prof'>
                                <img src={sir1} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Dr. C Jegannathan</p>
                                </div>
                            </div>

                        </div>
                        <div className='prof'>
                            <img src={sir2} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Vishal H. Shah</p>
                            </div>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='p-1'>
                            <h2 className='text-2xl font-bold mb-4 '>Leadership Body</h2>

                        </div>
                        <div className='prof1 flex flex-col align-center justify-evenly '>
                            <div className='prof mx-auto'>
                                <img src={ujjwalS} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Ujjwal Aman</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className='prof mx-auto'>
                                <img src={VarunK} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Kumar Varun</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={boy} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Vedant Gupta</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={girl} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Mugdha Shukla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='p-1'>
                            <h2 className='text-2xl font-bold mb-4'>Executive Body</h2>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={Pranav} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Pranav Raj Shrivastav</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={Anshuman} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Anshuman Tomar</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={AmanPratik} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Aman Pratik</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={Diptanshu} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Diptanshu Mahakud</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={Nishit} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Nishit Sharma</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={Debjyoti} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Debjyoti Dey</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={Nikhil} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Nikhil Kumar</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={AdarshRaj} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Adarsh Raj</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={Prince} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Prince Raj</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={Nikhil} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Nikhil Kumar</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={AdarshRaj} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Adarsh Raj</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={Prince} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Prince Raj</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={Nikhil} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Nikhil Kumar</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={Pulkit} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Pulkit Rewri</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={Shubham} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Shubham Kumar</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'><div className='prof mx-auto'>
                            <img src={VarunG} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Varun Gupta</p>
                            </div>
                        </div>
                            <div className='prof mx-auto'>
                                <img src={Yash} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Yashwant Bhise</p>
                                </div>
                            </div>
                            <div className='prof mx-auto'>
                                <img src={Yogesh} className='sir' />
                                <div className='text flex align-center text-center'>
                                    <p className='text-center'>Yogesh Kumar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='boxx'>
                    <div className='p-1'> <h3 className='text-xl font-semibold ml-7 mb-4 mt-8'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ha</span>ll of Fame</h3>
                        <h2 className='text-2xl font-bold ml-7 mb-4 mt-7 '>Previous Presidents</h2>
                    </div>
                    <div className='temp'>
                        <div className='timeline'>
                            <div class="container left-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div class="text-box txtx">
                                    <h2>EDC President</h2>
                                    <small>2017-2018</small>
                                    <p>Narendra Modi</p>
                                    <span class="left-container-arrow"></span>
                                </div>
                            </div>
                            <div className="container right-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div className="text-box">
                                    <h2>EDC President</h2>
                                    <small>2018-2019</small>
                                    <p>Narendra Modi</p>
                                    <span className="right-container-arrow"></span>
                                </div>
                            </div>

                            <div className="container left-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div className="text-box txtx">
                                    <h2>EDC President</h2>
                                    <small>2019-2020</small>
                                    <p>Narendra Modi</p>
                                    <span className="left-container-arrow"></span>
                                </div>
                            </div>

                            <div className="container right-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div className="text-box">
                                    <h2>EDC President</h2>
                                    <small>2020-2021</small>
                                    <p>Narendra Modi</p>
                                    <span className="right-container-arrow"></span>
                                </div>
                            </div>

                            <div className="container left-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div className="text-box txtx">
                                    <h2>EDC President</h2>
                                    <small>2021-2022</small>
                                    <p>Narendra Modi</p>
                                    <span className="left-container-arrow"></span>
                                </div>
                            </div>

                            <div className="container right-container">
                                <img src={edclogo} alt="EDC Logo" />
                                <div className="text-box">
                                    <h2>EDC President</h2>
                                    <small>2022-2023</small>
                                    <p>Narendra Modi</p>
                                    <span className="right-container-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={blob} class="blob11" />
            <img src={blob} class="blob22" />
            <img src={blobR} class="blob33" />
            <img src={blobR} class="blob55" />
        </>
    )
}

export default Teamspage
