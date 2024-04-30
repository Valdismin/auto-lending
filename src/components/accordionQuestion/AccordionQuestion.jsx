'use client'
import './accordionQuestion.scss';
import {useState} from "react";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";

export const AccordionQuestion = ({question}) => {
    const [isOpen, setIsOpen] = useState(false);
    const setOpen = () => setIsOpen(!isOpen);
    return (
        <div className='question-wrapper'>
            <div className={`title-wrapper ${isOpen ? 'open' : ''}`} onClick={setOpen}>
                <h2 className='title'>{question.title}</h2>
                <Image className='arrow' src={arrow} width='20' height="14"/>
            </div>

            <p className={`answer ${isOpen ? 'open' : ''}`}>{question.answer}</p>
        </div>
    )
}
