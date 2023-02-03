import React from 'react';
// import mzonelogo from '../../img/mzonelogo.png'
import githublogo from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import portfolio from '../../img/portfolio.png'
import angellist from '../../img/angellist.png'
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-container-inner'>
                <div className='nav-bar-left-inner'>
                    <div><img className='nav-bar-logo' src='https://drive.google.com/uc?export=view&id=1lTKnjy9TxFpkJRf4im-aVbqSwCcWiZi8' /></div>
                    <div className='footer-name'>Staybnb</div>
                </div>
                <div className='nav-bar-middle-container'>
                    <div className='footer-links'>
                        <div className='footer-logoname1'>Ming Liu</div>
                    </div>
                    <div className='footer-logo-container'>
                        <a href='https://effieml.github.io/'>
                            <div className='footer-links'>
                                <img src={portfolio} alt='linkedin' />
                                <div className='footer-logoname'>Portfolio</div>
                            </div>
                        </a>
                    </div>
                    <div className='footer-logo-container'>
                        <a href='https://www.linkedin.com/in/ming-liu-86611695/'>
                            <div className='footer-links1'>
                                <img src={linkedin} alt='linkedin' />
                                <div className='footer-logoname'>LinkedIn</div>
                            </div>
                        </a>
                    </div>
                    <div className='footer-logo-container'>
                        <a href='https://angel.co/u/ming-liu-19/'>
                            <div className='footer-links'>
                                <img src={angellist} alt='angellist' />
                                <div className='footer-logoname'>Angel List</div>
                            </div>
                        </a>
                    </div>
                    <div className='footer-logo-container'>
                        <a href='https://github.com/EffieML/Mzone'>
                            <div className='footer-links'>
                                <img src={githublogo} alt='github' />
                                <div className='footer-logoname'>GitHub</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )


}

export default Footer;
