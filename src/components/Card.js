import React from "react";
import styled from 'styled-components';


const CardContent = styled.div`
    width: 1000px;
    background: #FFFFFF;
    box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);
    margin: 3rem auto;
    padding: 3rem 2rem;
    min-height: 16.5rem;
    border-radius: 20px;
`;

const TextP = styled.p`
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 18px;
`;



function Card(props) {
    const data = props.data;
    return (
        <CardContent>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            {props.data.media_type === "video" ? <iframe width="420" height="315"
                src={data.url} alt="NASA photo of the day">
            </iframe> : <img width="420" height="315"
                src={data.url} alt="NASA photo of the day">
                </img>}
            <h2>{props.description}</h2>
            <TextP>{data.explanation}</TextP>
        </CardContent>
    );
};

export default Card;