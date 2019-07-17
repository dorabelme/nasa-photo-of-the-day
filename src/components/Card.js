import React, { useState, useEffect } from "react";
import axios from "axios";


function Card(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("use effect");

        axios.get("https://api.nasa.gov/planetary/apod?api_key=ggbBPZjSBIMi6bzPGsUGDmcxnKdec16FlHdjl99n")
            .then(res => {
                console.log("response", res);
                setData(res.data);
            })
            .catch(error => {
                console.log("The API is currently down, try again later", error);
            });
    }, []);

    return (
        <div className="cardContent">
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <iframe width="420" height="315"
                src={data.url} alt="NASA photo of the day">
            </iframe>
            <h2>{props.description}</h2>
            <p className="text">{data.explanation}</p>
        </div>
    );
};

export default Card;