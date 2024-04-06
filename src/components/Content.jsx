import React from "react";
import imgLove from './../img/favorite.png';
import imgGarant from './../img/icons8-guarantee.png';
import imgLight from './../img/icons8-light-on-100.png';
import imgAbout from './../img/about.png';
import imgMaryna from './../img/maryna.JPG';
import Gallery from "./blocks/Gallery";
import Form from "./blocks/Form";
import Way from "./blocks/Way";


const Content = () => {

    return (
        <div className="Content">
            <div className="block">
                <div className="title">
                    <div className="title-text">
                        <h2>Наші цінності</h2>
                    </div>
                </div>
                <div className="content">
                    <div className="cin">
                        <div className="card">
                            <div className="ico">
                                <img src={imgLove} alt="" />
                            </div>
                            <div className="title">
                                <p>любов</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="ico">
                                <img src={imgLight} alt="" />
                            </div>
                            <div className="title">
                                <p>індивідуальний підхід до кожної дитини</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="ico">
                                <img src={imgGarant} alt="" />
                            </div>
                            <div className="title">
                                <p>професіоналізм</p>
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
                                        <h2>Авторська методика</h2>
                                    </div>
                                </div>
                                <p>Наш центр працює за авторською методикою Марини Усенко - логопеда - дефектолога із 25 річним досвідом роботи. </p>
                                <p>Авторська методика допомогла вже більш ніж 10000 дітей заговорити правильно і красиво та отримати квиток в щасливе майбутнє.</p>
                                <p>Ми працюємо з діткам із затримкою мовленевого розвитку, з важкими мовленевими порушеннями, синдромом аспергера, РАС</p>
                                <div className="button">
                                    <button className="btn">Записатися</button>
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
                <Way />
            </div>
            <div className="triggers">
                <div className="content">
                    <div className="cards">
                        <div className="card">
                            <div class="circle" />
                            <span className="text">Авторська методика</span>
                        </div>
                        <div className="card">
                        <div class="circle" />
                            <span className="text">Відділ якості</span>
                        </div>
                        <div className="card">
                        <div class="circle" />
                            <span className="text">Душевні спеціалісти</span>
                        </div>
                    </div>
                    <div className="with_btn">
                        <div className="text">
                            <span>Комплексна діагностика розвитку дитини</span>
                            <button className="btn">Записатися</button>
                        </div>
                    </div>
                </div>
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

            <div className="form">
                <div className="content">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Content;