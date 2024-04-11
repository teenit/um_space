import React from "react";
import { createPortal } from "react-dom";
import RootPortal from "./Portal";
import closeImg from "./../../img/icons8-close.svg";

const Logoped = ()=>{

    return(
        <div className="Grid">
        <section>
            <h3>Логопед-дефектолог</h3>
            <p>У нашому центрі працюють комплексні спеціалісти, які під час своєї роботи використовують знання трьох професій: логопед, дефектолог, нейропсихолог. Робота на заняттях також комплексна, працюємо над інтелектуальним розвитком дитини, мовленнєвим розвитком та корекцією поведінки (за потреби). Кожне завдання направлене на формування нових нейронних зв'язків в певних ділянках головного мозку дитини, тому наші учні виходять на крутий результат. Запис до занять можливий після проходження комплексної первинної діагностики!</p>
        </section>
        <section>
            <h3>Корекційний психолог</h3>
            <p>Корекційний психолог спеціалізується на допомозі дітям у подоланні психологічних труднощів та розвитку позитивних навичок. Вони працюють з дітьми будь-якого віку, допомагаючи їм вирішувати проблеми, такі як емоційні труднощі, поведінкові проблеми, адаптація в школі та соціальні взаємини.</p>
            <br /><h3>Проблеми, які вирішуються:</h3>
            <ul>
                <li>СДВГ (Синдром дефіциту уваги з гіперактивністю)</li>
                <li>ЗПР (Затримка Психічного розвитку)</li>
                <li>Емоційні труднощі (стрес, тривога, депресія)</li>
                <li>Поведінкові проблеми (агресивність, неслухняність, нав'язливість)</li>
                <li>Соціальні труднощі (проблеми зі спілкуванням, відчуття самотності)</li>
                <li>Адаптація в школі\садочку (проблеми з навчанням, адаптація до нового оточення)</li>
                <li>Робота над емоційним інтелектом</li>
            </ul>
        </section>
        </div>
    )
}

const ChildPsy = () => {
    return(
        <div className="Grid">
            
        </div>
    )
}

const Modal = ({element, close})=> {

    const data = {
        logoped: {
            title: "Логопед-дефектолог",
            content: Logoped
        },
        child_psy: {
            title: "Дитячий психолог",
            
        }
    }

    return(
        <RootPortal>
            <div className="Modal-back" onClick={close}></div>
            <div className="Modal">
                <div className="Modal-close" onClick={close}>
                    <img src={closeImg}/>
                </div>
                <div className="Modal-title">
                    <h2>{data[element].title}</h2>
                </div>
                <div className="Modal-content">{data[element].content()}</div>
                <div className="Modal-footer">
                    <button className="btn">Записатися</button>
                </div>
            </div>
            
        </RootPortal>
    )
}
export default Modal;