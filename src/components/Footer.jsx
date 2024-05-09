import React from "react";
import logoImg from './../img/logo.svg';
import youtubeImg from './../img/youtube.svg';
import instaImg from './../img/instagram.svg';
import facebookImg from './../img/facebook.svg';
import phoneImg from './../img/phone.svg';

const Footer = () => {

    return (
        <div className="Footer">
            <div className="footer__wrap">
                <div className="footer__logo__wrap">
                    <img src={logoImg} alt="Логотип" />
                    <p>UM School</p>
                </div>
                <div className="footer__in">
                    <div className="footer__left">
                        <p>Запрошуємо вас на захоплюючу подорож до світу навчання, розвитку та можливостей. Приходьте і станьте частиною нашої спільноти, де кожна дитина має шанс розкрити свій потенціал і зрости у впевнену, творчу та натхненну особистість.</p>
                    </div>
                    <div className="footer__right">
                        <div className="footer__adrees">
                            <h3>Адреса:</h3>
                            <div className="footer__adrees__in">
                                <p>UMschool Warszawa, Krucza 16/22</p>
                                <p>Київ, вул. Срібнокільська, 14А</p>
                            </div>
                        </div>
                        <div className="footer__contact">
                            <h3>Контакти:</h3>
                            <div className="footer__contact__in">
                                <a href="tel:+48 451 676 147">+48 451 676 147</a>
                                <div className="footer__contact__images">
                                    <a href="">
                                        <img src={youtubeImg} alt="" />
                                    </a>
                                    <a href="https://www.facebook.com/logoped.umschool">
                                        <img src={facebookImg} alt="" />
                                    </a>
                                    <a href="https://instagram.com/umschool.top?igshid=MTk0NTkyODZkYg==">
                                        <img src={instaImg} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__wrap">
                    <p>Copyright 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;