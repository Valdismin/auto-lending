import "./header.scss"
import Image from "next/image";
import telegram from "../../../public/telegram.svg";
import viber from "../../../public/viber.svg";
import logo from "../../../public/logo2.png";

export const DesktopHeader = () => {
    return (
        <header className="desktop-header-wrapper">
            <div className='container'>
                <a href="/"><Image src={logo} alt="Logo" width={200} height={80} className="header-logo"/></a>
                <nav>
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
                <div className="contacts-wrapper">
                    <div className="icons-wrapper">
                        <Image src={telegram} alt="Phone" width={30} height={30} className="icon"/>
                        <a href="viber://chat?number=%2B375291940894"><Image src={viber} alt="Phone" width={30} height={30} className="icon"/></a>
                    </div>

                    <span className="phone-number"><a href="tel:+375-29-194-08-94">+375-29-194-08-94</a></span>
                </div>
            </div>
        </header>
    );
}
