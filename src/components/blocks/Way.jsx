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
const Way = ({activeHandler}) => {
    const ways = [
        {
            title:"Логопед - дефектолог",
            key: "logoped"
        },{
            title:"Дитячий психолог",
            key: "child_psy"
        },{
            title:"Кінезіотерапія",
            key: "kinez"
        },{
            title:"АРТ - терапія",
            key: "art"
        },{
            title:"Підготовка до школ",
            key: "preschool"
        },{
            title:"Логопедична група для наймолодших",
            key: "group"
        },{
            title:"Англійська мова",
            key: "english"
        },{
            title:"Музичні заняття",
            key: "music"
        },{
            title:"Танці",
            key: "dance"
        },
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
                            <div className="card" onClick={()=>activeHandler(item.key)}>
                                <img src={waysImg[ind]} alt="" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Way;