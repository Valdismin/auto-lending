"use client"
import React, {useRef, useEffect, useState} from 'react';
import './ourServices.scss';
import Image from "next/image";
import {services} from "@/mocks/services";

const Card = ({service}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className='block'>
            <div className='title-wrapper'>
                <h3 className='block-title'>{service.title}</h3>
                <div className={`arrow-accordion ${open ? 'rotated' : ''}`}>
                    <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                         viewBox="0 0 18 18" fill="none">
                        <path
                            d="M2 7L8.16362 13.1636C8.55415 13.5541 9.18731 13.5541 9.57783 13.1636L15.7415 7H12.913L8.87073 11.0423L4.82843 7H2Z"
                            fill="white"></path>
                    </svg>
                </div>
            </div>
            <p className={`block-description ${open ? 'open' : ''}`}>{service.description}</p>
        </div>
    );
}

export const OurServices = () => {
    const scrollListRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        if (!isVisible) {
            const handleScroll = () => {
                const {top} = scrollListRef.current.getBoundingClientRect();
                if (!isVisible && top < window.innerHeight - 200) {
                    setIsVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isVisible, scrollListRef]);

    return (
        <div className="our-services">
            <div className="container">
                <div className={`scroll-list ${isVisible ? 'show' : ''}`} ref={scrollListRef}>
                    <h2 className="title">Широкий спектр предоставляемых услуг</h2>
                    <div className="blocks-wrapper">
                        {services.map((service, index) => {
                            return <Card service={service} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}

