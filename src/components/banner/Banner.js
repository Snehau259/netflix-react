// import axios from "axios";
import React from "react";
import axiosInstance from "../../axios";
import './banner.css';
import { apiKey,imageUrl } from '../../constants/Constant'
import { useEffect, useState } from "react";
function Banner() {

    const [movie, setMovie] = useState()
    const [random, setRandom] = useState()
    // setRandom(Math.floor(Math.random() * 20))
    // console.log('random ' + movie.title)
    useEffect(() => {
        axiosInstance.get(`trending/all/week?api_key=${apiKey}`).then((response) => {
            // console.log('response' + response.data.results[0])
            setMovie(response.data.results[0]);
        })

    }, []);
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className="banner" >
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div>
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>

                <h1 className="description">{movie ? movie.overview : ""} </h1>

            </div>
            <div className="fade"></div>
        </div>
    )
}
export default Banner;