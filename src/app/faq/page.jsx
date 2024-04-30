import {questions} from "@/mocks/questions";
import './page.scss';
import {AccordionQuestion} from "@/components/accordionQuestion/accordionQuestion";


export default function FaqPage() {
    return (
        <div className='container faq-wrapper'>
            <div className='heading-wrapper'>
                <h1 className='header'>Вопрос-ответ</h1>
                <p className='description'>Тут вы найдете ответы на самые часто задаваемые вопросы</p>
            </div>

            <div>
                {questions.map((question, index) => {
                    return (
                        <AccordionQuestion question={question} key={index}/>
                    );
                })}
            </div>
        </div>
    );
}
