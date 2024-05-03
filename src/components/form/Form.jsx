'use client'
import "./form.scss"
import {useForm} from "react-hook-form";
import * as emailjs from "emailjs-com";

export const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            model: "",
            message: ""
        },
    });

    const templateParams = {
        name: watch('name'),
        phone: watch('phone'),
        model: watch('model'),
        message: watch('message')
    }
    console.log(process, 'process')
    const onSubmit = (data) => {
        emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.error(error.text);
                alert('Failed to send email');
            });
        console.log(errors)
        console.log(data)
    }
    return (
        <div className="form">
            <h2 className="form-title">Оставьте заявку</h2>

            <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)} id='contactForm'>
                <div className="input-wrapper">
                    <label htmlFor="name">Имя</label>
                    <input type="text" placeholder="Алексей" name='name'
                           className="input" {...register("name", {required: "name"})}/>
                    <div className='error-wrapper'>{errors.name &&
                        <span className='error'>Обязательное поле</span>}</div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="number">Номер телефона</label>
                    <input type="tel" placeholder="+375 (99) 999-99-99" name='number'
                           className="input" {...register("phone", {required: "phone"})}/>
                    <div className='error-wrapper'>{errors.phone &&
                        <span className='error'>Обязательное поле</span>}</div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="model">Марка и модель автомобиля</label>
                    <input type="tel" placeholder="BMW 5 Series E60" name='model'
                           className="input" {...register("model", {required: "model"})}/>
                    <div className='error-wrapper'>{errors.model &&
                        <span className='error'>Обязательное поле</span>}</div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="number">Краткое описание автомобиля</label>
                    <textarea placeholder="Модель: BMW 5 Series E60, год выпуска: 2003 и т.д" name='message'
                              className="textarea" {...register("message", {required: "message"})}/>
                    <div className='error-wrapper textarea-error'>{errors.message &&
                        <span className='error'>Обязательное поле</span>}</div>
                </div>
                <button type="submit" className="button">Отправить</button>
            </form>
        </div>
    );
}
