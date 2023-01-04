// import axios from "axios";
import React from "react";
import axiosInstance from "../../axios";
import './banner.css';
import { apiKey,imageUrl } from '../../constants/Constant'
import { useEffect, useState } from "react";
function Banner() {

    const [movie, setMovie] = useState()
    const [random, setRandom] = useState()
    useEffect(() => {
        axiosInstance.get(`trending/all/week?api_key=${apiKey}`).then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * 20)]);
        })

    }, []);
    return (
        <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path: ""})`}} className="banner" >
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