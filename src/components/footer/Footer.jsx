import Image from "next/image";
import "./footer.scss";

export const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Image src="/logo2.png" alt="Logo" width={150} height={60}/>
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
                            <Image className='icon' src="/telegram.svg" alt="Phone" width={30} height={30}/>
                            <Image className='icon' src="/viber.svg" alt="Phone" width={30} height={30}/>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
