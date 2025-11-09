import React from 'react';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer space-x-3 sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <img className='w-12' src="https://img.icons8.com/avantgarde/100/box.png" alt="logo" />
                    <p className='text-2xl'>
                        Fin<span className='text-primary font-semibold'>Ease</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title"> Contact details</h6>
                    <p className="link link-hover text-red-300">Hotline:+11099358</p>
                    <p className="link link-hover">Email:finEase@gmail.com</p>
                </nav>
                <nav>
                    <h6 className="footer-title"> Terms & Conditions</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <div className='grid sm:grid-cols-2 md:justify-self-center lg:flex gap-3'>
                        <Link to={'https://www.facebook.com/'} className="link link-hover"><FaFacebook size={30} /></Link>
                        <Link to={'https://www.instagram.com/'} className="link link-hover"><FaInstagramSquare size={30} /></Link>
                        <Link to={'https://x.com/'} className="link link-hover"><FaXTwitter size={30} /></Link>
                        <Link to={'https://youtube.com/'} className="link link-hover"><FaYoutube size={30} /></Link>
                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;