import React from "react";
import b2 from './../../img/icons/b1.png';
import star from "../../img/logo-with-back.svg"
const SVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="12" viewBox="0 0 180 12" fill="none">
            <line x1="18.2222" y1="5.5" x2="140.222" y2="5.5" stroke="#121264" strokeDasharray="8 8" />
            <circle cx="154.222" cy="6" r="6" stroke="#B6E388" fill="#B6E388" strokeWidth="4" />
            <circle cx="7.22223" cy="6" r="6" stroke="#B6E388" strokeWidth="4" />
        </svg>
    )
}
const Shlyah = () => {




    return (
        <div className="Shlyah">
            <div className="Shlyah-title">
                <h2>Шлях до запису на заняття в UMSCHOOL</h2>
            </div>
            <div className="Shlyah-content">
                <div className="cards">
                    <div className="cards-line">
                        <div className="card">
                            <div className="krok">
                                <span>1</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Зайти на наш сайт
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>2</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Обрати напрямок який Вас цікавить
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>3</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Записатись на первинну діагностику
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>4</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Скласти індивідуальній графік занять зі спеціалістом
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cards-line reverse">
                        <div></div>
                        <div></div>
                        <div><img className="b2" src={b2} alt="" /></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="rotate90-wrap">
                            <div className="card-img rotate90">
                                <SVG />
                            </div>
                        </div>

                    </div>
                    <div className="cards-line reverse">
                        <div className="card">
                            <div className="krok">
                                <span>8</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Розпочати свою подорож до успішного майбутнього
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>7</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Відвідати первинну діагностику Зайти на наш сайт
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>6</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Залишити свої контактні дані
                                </p>
                            </div>
                        </div>
                        <div className="card-img">
                            <SVG />
                        </div>
                        <div className="card">
                            <div className="krok">
                                <span>5</span>
                            </div>
                            <div className="opis">
                                <p>
                                    Ознайомитись з інформацією про нас
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="Shlyah-content-grid">
                    <div className="Shlyah-content-left">
                        <div className="Shlyah-content-text">Зайти на наш сайт</div>
                        <div className="Shlyah-content-text">Обрати напрямок який Вас цікавить</div>
                        <div className="Shlyah-content-text">Записатись на первинну діагностику</div>
                        <div className="Shlyah-content-text">Скласти індивідуальній графік занять зі спеціалістом</div>
                    </div>
                    <div className="Shlyah-content-center"></div>
                    <div className="Shlyah-content-right">
                        <div className="Shlyah-content-text">Ознайомитись з інформацією про нас</div>
                        <div className="Shlyah-content-text">Залишити свої контактні дані</div>
                        <div className="Shlyah-content-text">Відвідати первинну діагностику</div>
                        <div className="Shlyah-content-text">Розпочати свою подорож до успішного майбутнього</div>
                    </div>
                </div>
                <div className="Shlyah-content-bottom">
                    <div className="Shlyah-content-text"></div>
                </div> */}
            </div>
        </div>
    )
}
export default Shlyah