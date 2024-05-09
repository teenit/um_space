import React, { useState } from "react";
import imgLove from './../img/favorite.png';
import imgGarant from './../img/icons8-guarantee.png';
import imgLight from './../img/icons8-light-on-100.png';
import imgAbout from './../img/about.png';
import imgMaryna from './../img/maryna.JPG';
import Gallery from "./blocks/Gallery";
import Form from "./blocks/Form";
import Way from "./blocks/Way";
import Modal from "./blocks/Modal";
import Shlyah from "./blocks/Shlyah";
import FeedBack from "./blocks/FeedBack";
import b4 from './../img/icons/b4.png';


const Content = () => {
    const [diagnostics, setDiagnostics] = useState(false)
    const [state, setState] = useState({
        modalWay: false
    })
    const closeHendler = () => {
        setState({
            ...state,
            modalWay: false
        })
    }
    const activeHandler = (key) => {
        setState({
            ...state,
            key,
            modalWay: true
        })
    }
    return (
        <div className="Content">
            <div className="block">
                <div className="title">
                    <div className="title-text">
                        <h2>Цінностями нашої компанії є:</h2>
                    </div>
                </div>
                <div className="content">
                    <div className="cin">
                        <div className="card">
                            <div className="ico">
                                <img src={imgLove} alt="" />
                            </div>
                            <div className="title">
                                <p>Любов до дітей</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="ico">
                                <img src={imgLight} alt="" />
                            </div>
                            <div className="title">
                                <p>Високий рівень професіоналізму спеціалістів</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="ico">
                                <img src={imgGarant} alt="" />
                            </div>
                            <div className="title">
                                <p>Індивідуальний підхід до кожної дитини</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block">

                <div className="content">

                    <div className="about-us">
                        <div className="block-two">

                            <div className="text">
                                <div className="title">
                                    <div className="title-text">
                                        <h2>Про нас</h2>
                                    </div>
                                </div>

                               <p> Ми використовуємо авторські напрацювання, які стали результатом 60 років праці родини засновниці UMSCHOOL Усенко Марини Геннадіївни.</p>
                               <p> Ефективність методик перевірена на тисячах дітей, які зараз ведуть повноцінне життя.</p>
                               <p> Ми завжди націлені на результат, тому прислухаємось до побажань клієнтів. Нашою основною метою є вивести розвиток дитини на норму, провести за руку від особливої до великої, виховати генія нового покоління.</p>
                                <div className="button">
                                    <button className="btn">Записатися <img className="b4" src={b4} alt="" /></button>
                                </div>

                            </div>
                            <div className="img">
                                <img src={imgAbout} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="triggers">
                <Way activeHandler={activeHandler} />
            </div>
            
            <div className="block">
                <Shlyah />
            </div>
            <div className="block">
                <div className="title">
                    <div className="title-text">
                        <h2>Наші світлини</h2>
                    </div>
                </div>
                <div className="content">
                    <Gallery />
                </div>
            </div>
            <div className="triggers">
                <div className="content">
                    <div className="cards">
                       
                    </div>
                    <div className="with_btn">
                        <div className="text">
                            <span>комплексна первинна діагностика</span>
                            <button className="btn" onClick={() => {
                                setDiagnostics(!diagnostics)
                            }}
                            >{diagnostics ? "Закрити" : "Детальніше"}</button>
                        </div>
                        {diagnostics && 
                        <section>
                            <p>Перед тим, як почати роботу з нашими спеціалістами, ми рекомендуємо кожному нашому клієнту пройти первинну діагностику. </p>
                            <br /><p>Наша первинна діагностика є частиною авторської методики UMsystem, розробленою нашою засновницею Усенко Мариною, логопедом-дефектологом з 24-річним досвідом роботи. 👩‍🏫</p>
                            <p>Первинна діагностика UMsystem- це покроковий комплексний аудит розвитку дитини.</p>
                            <p>Наша ціль – допомогти батькам знайти проблемні місця, визначити точки росту та спроектувати дорожну карту у щасливе майбутнє Вашої дитини. 🎯</p>
                            <br /><p>Що вона включає в себе:</p>
                            <ul>
                                <li>Діагностування мовлення дитини (звуковимова, словниковий запас, фонематичне сприймання, граматична будова мовлення).</li>
                                <li>Діагностування зорово-просторового сприймання.</li>
                                <li>Діагностування рівню математичних навичок дитини.</li>
                                <li>Діагностування загального рівню знань дитини згідно вікової норми</li>
                                <li>Надання рекомендацій батькам щодо ефективної взаємодії з дитиною вдома.</li>
                                <li>Допомога з організацією розвиваючого простору вдома та індивідуальним підбором іграшок для розвитку саме Вашої дитини, щоб Ви не витрачали гроші на іграшки, які не працюють.</li>
                                <li>Індивідуальний підбір комплексу занять для ефективного розвитку Вашої дитини ( наприклад логопед + лфк + ліплення).</li>
                                <li>Складання плану індивідуальної роботи за методикою Усенко Марини.</li>
                            </ul>
                            <br /><p>Наша детальна діагностика дозволяє виявити усі точки росту дитини, щоб у батьків було розуміння, з чим і для чого треба працювати. 📈</p>
                            <p>Ми прагнемо бути корисними кожній родині, що звертається до нашого простору.</p>
                            <p>І щоб батькам було зрозуміло, як працювати вдома, яка динаміка в дитини щомісяця, наша засновниця створила зошит «Успішного мовлення», в якому спеціаліст прописуватиме всі етапи індивідуальної програми дитини та щомісячну динаміку. 📈</p>
                            <p>Ви самі зможете контролювати нашу роботу.</p>
                            <p>А наш дерартамент якості Вам в цьому допоможе. Бо ми щотижня детально перевіряємо планування кожного викладача та щомісяця результати його роботи з дитиною. 📋</p>
                        </section>
                        }

                    </div>
                </div>
            </div>
            <div className="block">

                <div className="content">

                    <div className="about-us">
                        <div className="block-two">
                            <div className="img">
                                <img src={imgMaryna} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">
                                    <div className="title-text">
                                        <h2>Марина Усенко</h2>
                                    </div>
                                </div>
                                <p>Наш центр працює за авторською методикою Марини Усенко - логопеда - дефектолога із 25 річним досвідом роботи. </p>
                                <p>Авторська методика допомогла вже більш ніж 10000 дітей заговорити правильно і красиво та отримати квиток в щасливе майбутнє.</p>
                                <p>Ми працюємо з діткам із затримкою мовленевого розвитку, з важкими мовленевими порушеннями, синдромом аспергера, РАС</p>
                                <p>UM school – це особливий простір, де кожна дитина розглядається як зірка з унікальним потенціалом. З досвідченим педагогічним колективом та інноваційними методиками, ми забезпечуємо інтелектуальний, соціальний та емоційний розвиток учнів, одночасно розкриваючи їхні творчі здібності через різноманітні додаткові заняття.</p>
                                <div className="button">
                                    <button className="btn">Записатися</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {
                state.modalWay && <Modal element={state.key} close={closeHendler} />
            }

            <div className="form">
                <div className="content">
                    <Form />
                </div>
            </div>
            <div className="block">
                <div className="title">
                        <div className="title-text center">
                            <h2>Відгуки</h2>
                        </div>
                    </div>
                <div className="content">
                    <FeedBack />
                </div>
            </div>
        </div>
    )
}

export default Content;