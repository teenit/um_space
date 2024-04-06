import React from "react";
import logoImg from './../../img/logo.svg';
import youtubeImg from './../../img/youtube.svg';
import instaImg from './../../img/instagram.svg';
import facebookImg from './../../img/facebook.svg';
import phoneImg from './../../img/phone.svg';
import formImg from './../../img/for_form.jpg';
import backImg from './../../img/about-us-back.png';

const Form = () => {

    return (
        <div className="Header Form">
            <div className="Header-back" style={{backgroundImage:`url(${backImg})`}}>
                <div className="Header-back-dark">
                    <div className="Header-block">
                        <div className="Header-block-text">
                            <div className="text-content">
                                <div className="slogan">
                                    <h1>Зателефонуйте нам, напишіть у месенджер, чи заповніть форму</h1>
                                </div>

                                <div className="description">
                                    <div className="header__wrap">
                                        <div className="items__wrap">
                                            <div className="social__wrap">
                                                <a href="#">
                                                    <img src={youtubeImg} alt="YouTube" />
                                                </a>
                                                <a href="https://www.facebook.com/logoped.umschool">
                                                    <img src={facebookImg} alt="Facebook" />
                                                </a>
                                                <a href="https://instagram.com/umschool.top?igshid=MTk0NTkyODZkYg==">
                                                    <img src={instaImg} alt="Instagram" />
                                                </a>
                                            </div>
                                            <div className="phone__wrap">
                                                <img src={phoneImg} alt="Телефон" />
                                                <a href="tel:+48 451 676 147">+48 451 676 147</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="input">
                                        <input type="text" placeholder="Ваше ім'я"/>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder="Ваш номер телефону"/>
                                    </div>
                                </div>
                                <div className="button">
                                    <button className="btn">Надіслати</button>
                                </div>
                            </div>
                        </div>
                        <div className="Header-block-img" style={{backgroundImage:`url(${formImg})`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;