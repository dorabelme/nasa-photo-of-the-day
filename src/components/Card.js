import React from "react";


function Card(props) {
    const data = props.data;
    return (
        <div className="cardContent">
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            {props.data.media_type === "video" ? <iframe width="420" height="315"
                src={data.url} alt="NASA photo of the day">
            </iframe> : <img width="420" height="315"
                src={data.url} alt="NASA photo of the day">
                </img>}
            <h2>{props.description}</h2>
            <p className="text">{data.explanation}</p>
        </div>
    );
};

export default Card;