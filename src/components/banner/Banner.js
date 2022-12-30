import React from "react";
import './banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="content">
            <h1 className="title">Lorem Ipsum</h1>
                <div>
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                
                <h1 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel commodo arcu, eget scelerisque dolor. Duis congue risus vel lorem consequat porttitor. Proin bibendum urna sit amet efficitur dictum. Morbi congue ligula vitae tortor consequat molestie. </h1>

            </div>
            <div className="fade"></div>
        </div>
    )
}
export default Banner;