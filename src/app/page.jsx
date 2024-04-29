import Image from "next/image";
import "./page.scss";
import {Header} from "@/components/header/Header";
import {TextForm} from "@/components/textForm/TextForm";
import {HowWeWork} from "@/components/howWeWork/HowWeWork";
import {OurServices} from "@/components/ourServices/OurServices";
import {Footer} from "@/components/footer/Footer";

export default function Home() {
    return (
        <main className="main">
            <div className="hero">
                <Header/>
                <TextForm title={'Срочный выкуп Авто'}
                          description={'Срочная скупка подержанных легковых и коммерческих авто независимо от марки в любом техническом состоянии'}/>
            </div>
            <HowWeWork/>
            <OurServices/>
            <TextForm title={'Контакты'}
                        contacts
                      description={'Связаться с нами можно любым удобным для Вас способом: позвоните по указанным телефонам, оставить заяавку на сайте.'}/>
            <Footer/>
        </main>
    );
}
