import React from "react";
import img1 from './../../img/new/2.JPG';
import img2 from './../../img/new/3.JPG';
import img3 from './../../img/new/4.JPG';
import img4 from './../../img/new/5.JPG';
import img5 from './../../img/new/6.JPG';
import img6 from './../../img/new/7.JPG';
import img7 from './../../img/new/8.JPG';
import img8 from './../../img/new/9.JPG';
import img9 from './../../img/new/10.JPG';



const Gallery = () =>{
    const mas = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
    ]
    return (
        <div className="Gallery">
            <div className="wrap">
                {
                    mas.map((item,index)=>{
                        return (
                            <div key={index} className="img" style={{backgroundImage:`url(${item})`}}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery;