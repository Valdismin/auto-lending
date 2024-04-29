import "./form.scss"

export const Form = () => {
    return (
        <div className="form">
            <h2 className="form-title">Оставьте заявку</h2>

            <form className="form-wrapper">
                <input type="text" placeholder="Имя" className="input"/>
                <input type="email" placeholder="Email" className="input"/>
                <input type="tel" placeholder="Телефон" className="input"/>
                <textarea placeholder="Сообщение" className="textarea"/>
                <button type="submit" className="button">Отправить</button>
            </form>
        </div>
    );
}
