import Image from "next/image";
import logo from "../../../public/logo2.png";

import {useEffect, useState} from "react";

export const MobileHeader = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };
        if (open) {
            document.body.addEventListener('touchmove', preventScroll, {passive: false});
        } else {
            document.body.removeEventListener('touchmove', preventScroll);
        }


        return () => {
            document.body.removeEventListener('touchmove', preventScroll);
        };
    }, [open]);

    return (
        <header className={`mobile-header-wrapper`}>
            <div className='container'>
                <a href="/"><Image src={logo} alt="Logo" width={200} height={80} className="header-logo"/></a>
                <nav className={`nav-menu ${open ? 'is-opened header-footer-paddings' : ''}`}>
                    <ul className="navigation-links-wrapper">
                        <li className="link">
                            <a href="/">Главная</a>
                        </li>
                        <li className="link">
                            <a href="/about-us">О нас</a>
                        </li>
                        <li className="link">
                            <a href="/faq">FAQ</a>
                        </li>
                        <li className="link">
                            <a href="/contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-menu burger">
                    {!open &&
                        <svg onClick={handleOpen} id="burger__svg--open" width="37" height="17" viewBox="0 0 37 17"
                             fill="#FFF"
                             xmlns="http://www.w3.org/2000/svg">
                            <path className="top-line" d="M4.02174 0.742188H37L32.9783 4.74219H0L4.02174 0.742188Z"
                                  fill="#FFF"/>
                            <path className="bottom-line" d="M13.9706 12.7422H37L33.0294 16.7422H10L13.9706 12.7422Z"
                                  fill="#FFF"/>
                        </svg>
                    }
                    {open &&
                        <svg onClick={handleOpen} id="burger__svg--close" width="26" height="25" viewBox="0 0 26 25"
                             fill="#FFF"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.9107 2.45065L25.1429 22.546L20.2381 22.5493L0.00595406 2.454L4.9107 2.45065Z"
                                  fill="#FFF"/>
                            <path d="M20.2377 2.45065L0.00557393 22.546L4.91032 22.5493L25.1425 2.454L20.2377 2.45065Z"
                                  fill="#FFF"/>
                        </svg>
                    }
                </div>
            </div>
        </header>

    )
}
