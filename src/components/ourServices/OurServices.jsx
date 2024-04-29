"use client"
import React, {useRef, useEffect, useState} from 'react';
import './ourServices.scss';
import Image from "next/image";
import {services} from "@/mocks/services";

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
                            return <div className='block' key={index}>
                                <h3 className='block-title'>{service.title}</h3>
                                <p className='block-description'>{service.description}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}

