import React from "react";
import i1 from './../../img/feed-back (1).jpg'
import i2 from './../../img/feed-back (2).jpg'
import i3 from './../../img/feed-back (3).jpg'
import i4 from './../../img/feed-back (4).jpg'
import i5 from './../../img/feed-back (5).jpg'
import i6 from './../../img/feed-back (6).jpg'

const FeedBack = () => {

    return(
        <div className="FeedBack">
            <div className="FeedBack--wrap">
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i1} alt="" srcset="" />
                </div>
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i2} alt="" srcset="" />
                </div>
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i3} alt="" srcset="" />
                </div>
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i4} alt="" srcset="" />
                </div>
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i5} alt="" srcset="" />
                </div>
                <div className="FeedBack--card">
                    <img className="FeedBack--img" src={i6} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default FeedBack;