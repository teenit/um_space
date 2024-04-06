import React from "react";
import i1 from './../../img/icons/1-logoped.png';
import i2 from './../../img/icons/2-psy.png';
import i3 from './../../img/icons/3-kin.png';
import i4 from './../../img/icons/4-lepka.png';
import i5 from './../../img/icons/5-paint.png';
import i6 from './../../img/icons/6-school.png';
import i7 from './../../img/icons/7-psy-group.png';
import i9 from './../../img/icons/9-english.png';
import i10 from './../../img/icons/10-music.png';
import i8 from './../../img/icons/8-dance.png';
const Way = () => {
    const ways = [
        "Логопед - дефектолог",
        "Дитячий психолог",
        "Кінезіотерапія",
        "Живопис та ліплення ",
        "АРТ - терапія",
        "Підготовка до школи",
        "Логопедична група для наймолодших ",
        "Англійська мова",
        "Музичні заняття",
        "Танці",
    ]
    const waysImg = [
        i1, i2, i3, i4, i5, i6, i7, i9, i10, i8,
    ]
    return (
        <div className="Way">
            <div className="title">
                <div className="title-text">
                    <h2>Наші напрямки</h2>
                </div>
            </div>
            <div className="ways">
                {
                    ways.map((item, ind) => {
                        return (
                            <div className="card">
                                <img src={waysImg[ind]} alt="" />
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Way;