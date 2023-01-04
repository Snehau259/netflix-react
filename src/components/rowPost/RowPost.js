import React from "react";
import axiosInstance from "../../axios";
import { apiKey, imageUrl } from '../../constants/Constant'
import { useEffect, useState } from "react";
import './RowPost.css'
function RowPost() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axiosInstance.get(`discover/tv?api_key=${apiKey}&with_networks=213`).then((response) => {
            console.log(response.data.results)
            setMovie(response.data.results);
        }).catch(err => { })
    }, []);

    return (
        <div className="row">
            <h1 className="posterTitle">Netflix Originals</h1>
            <div className="posters">
                {
                    movie.map(item => {
                        return (<img className="posterImage" alt='poster' src={`${imageUrl + item.backdrop_path}`} />)
                    })}
            </div>
        </div>

    )
}
export default RowPost;