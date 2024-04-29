import "./header.scss"
import Image from "next/image";

export const Header = () => {
    return (
        <header className="header-wrapper">
            <div className='container'>
                <Image src="/logo2.png" alt="Logo" width={200} height={80} className="header-logo"/>
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
                        <Image src="/public/telegram.svg" alt="Phone" width={30} height={30} className="icon"/>
                        <Image src="/viber.svg" alt="Phone" width={30} height={30} className="icon"/>
                    </div>
                    <span className="phone-number">+375-29-194-08-94</span>
                </div>
            </div>
        </header>
    );
}
