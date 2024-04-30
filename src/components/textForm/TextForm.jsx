import {Form} from "@/components/form/Form";
import "./textForm.scss";
import Image from "next/image";
import telegram from "../../../public/telegram.svg";
import viber from "../../../public/viber.svg";

export const TextForm = ({title, description, contacts}) => {
    return (
        <div className={`${contacts ? 'bottom-form' : ''} text-form-wrapper container`}>
            <div className="text-wrapper">
                <h1 className="title">{title}</h1>
                <p className={`text`}>{description}</p>
                {contacts &&
                    <div className="contacts">
                        <span className="phone-number">+375-29-194-08-94</span>
                        <div className="icons-wrapper">
                            <Image src={telegram} alt="Phone" width={30} height={30} className="icon"/>
                            <Image src={viber} alt="Phone" width={30} height={30} className="icon"/>
                        </div>
                    </div>
                }
            </div>

            <Form/>
        </div>
    )
}
