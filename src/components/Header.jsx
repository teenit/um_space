import React from "react";
import logoImg from './../img/logo.svg';
import youtubeImg from './../img/youtube.svg';
import instaImg from './../img/instagram.svg';
import facebookImg from './../img/facebook.svg';
import phoneImg from './../img/phone.svg';
const Header = () => {

    return (
        <div className="Header">
            <div className="menu">
                <div className="header-content">
                    <div className="header__wrap">
                        <div className="logo__wrap">
                            <img src={logoImg} alt="Логотип" />
                            <p>UM School</p>
                        </div>
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
            </div>
            <div className="Header-back">
                <div className="Header-back-dark">
                    <div className="Header-block">
                        <div className="Header-block-text">
                            <div className="text-content">
                                <div className="slogan">
                                    <h1>UM SCHOOL - <br /> центр розвитку Вашої дитини</h1>
                                </div>
                                <div className="description">
                                    <p>Preschool, початкова школа</p>
                                </div>
                                <div className="button">
                                    <button className="btn">Записатися</button>
                                </div>
                            </div>
                        </div>
                        <div className="Header-block-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;