import Image from "next/image";
import "./footer.scss";
import telegram from "../../../public/telegram.svg";
import viber from "../../../public/viber.svg";
import logo from "../../../public/logo2.png";

export const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Image src={logo} alt="Logo" width={150} height={60}/>
                        <p className='all-rights'>©2024 vlad kozlovski</p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="/">Главная</a>
                            </li>
                            <li>
                                <a href="/about-us">О нас</a>
                            </li>
                            <li>
                                <a href="/faq">FAQ</a>
                            </li>
                            <li>
                                <a href="/contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contacts">
                        <div className="icons-wrapper">
                            <Image className='icon' src={telegram} alt="Phone" width={30} height={30}/>
                            <Image className='icon' src={viber} alt="Phone" width={30} height={30}/>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
