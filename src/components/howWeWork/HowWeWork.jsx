"use client"
import useEmblaCarousel from "embla-carousel-react";
import "./howWeWork.scss"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {useCallback, useEffect, useState} from "react";
import mail from "../../../public/mail-icon.svg";
import handshake from "../../../public/handshake-icon.svg";
import money from "../../../public/money-icon.svg";
import document from "../../../public/document-icon.svg";
import reverse from "../../../public/reverse-icon.svg";
import quality from "../../../public/quality-icon.svg";


export const PrevButton = (props) => {
    const {children, ...restProps} = props

    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="#000000"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
            </svg>
            {children}
        </button>
    )
}

export const NextButton = (props) => {
    const {children, ...restProps} = props

    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            {...restProps}
        >
            <svg className="embla__button__svg" viewBox="0 0 532 532">
                <path
                    fill="#000000"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
            </svg>
            {children}
        </button>
    )
}

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

export const HowWeWork = () => {
    const options = {
        loop: false,
        align: 'start'
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({
        delay: 2000,
        playOnInit: true,
        stopOnUserInput: false
    })]);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback) => {
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    return (
        <div className="how-we-work container">
            <h2 className="how-we-work-title">Как мы работаем</h2>
            <div className="embla" ref={emblaRef}>
                <div className="how-we-work-wrapper embla__container">
                    <div className="how-we-work-item embla__slide">
                        <Image src={mail} alt="mail" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">1.Оставьте заявку</h3>
                        <p className="how-we-work-item-text">Оставьте заявку на нашем сайте или позвоните нам по
                            телефону</p>
                    </div>

                    <div className="how-we-work-item embla__slide">
                        <Image src={handshake} alt="handshake" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">2.Встреча с оценщиком</h3>
                        <p className="how-we-work-item-text">Специалист компании «АвтоВыкуп» оперативно выезжает по
                            указанному адресу. Осматривает транспортное средство, дает свое заключение о его техническом
                            состоянии и стоимости.</p>
                    </div>


                    <div className="how-we-work-item embla__slide">
                        <Image src={money} alt="money" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">3.Получение денег</h3>
                        <p className="how-we-work-item-text">Если вас устраивает цена, предложенная оценщиком, именно
                            она является окончательной, мы выплачиваем вам деньги наличными или на банк.карту/счет.</p>
                    </div>

                    <div className="how-we-work-item embla__slide">
                        <Image src={document} alt="docs" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">4.Оформление документов</h3>
                        <p className="how-we-work-item-text">После передачи денег Вам на руки, заключается договор
                            купли-продажи - официально.</p>
                    </div>

                    <div className="how-we-work-item embla__slide">
                        <Image src={reverse} alt="reverse" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">5.Перерегистрация ТС</h3>
                        <p className="how-we-work-item-text">Мы самостоятельно перерегистрируем автомобиль в ДАИ.</p>
                    </div>

                    <div className="how-we-work-item embla__slide">
                        <Image src={quality} alt="quality" className="image" width={120} height={120}/>
                        <h3 className="how-we-work-item-title">6.Контроль качества</h3>
                        <p className="how-we-work-item-text">Оцените качество услуг по телефону (viber / telegram). Нам
                            важно мнение каждого!</p>
                    </div>
                </div>
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton
                            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
