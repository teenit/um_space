import React from "react";
import img1 from './../../img/photo_13_2024-04-01_01-18-26.jpg';
import img2 from './../../img/photo_15_2024-04-01_01-18-26.jpg';
import img3 from './../../img/photo_19_2024-04-01_01-18-26.jpg';
import img4 from './../../img/photo_1_2024-04-01_01-18-26.jpg';
import img5 from './../../img/photo_25_2024-04-01_01-18-26.jpg';
import img6 from './../../img/photo_32_2024-04-01_01-18-26.jpg';
import img7 from './../../img/photo_14_2024-04-01_01-18-26.jpg';
import img8 from './../../img/photo_40_2024-04-01_01-18-26.jpg';
import img9 from './../../img/photo_42_2024-04-01_01-18-26.jpg';



const Gallery = () =>{
    const mas = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
    ]
    return (
        <div className="Gallery">
            <div className="wrap">
                {
                    mas.map((item)=>{
                        return (
                            <div className="img" style={{backgroundImage:`url(${item})`}}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery;