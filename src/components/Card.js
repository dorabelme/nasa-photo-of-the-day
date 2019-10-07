import React from "react";
import styled from 'styled-components';
import ButtonExampleLabeledBasic from "./ButtonLabel";


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
    margin-bottom: 4rem;
`;

const Title = styled.h2`
    font-family: 'Russo One', sans-serif;
    font-size: 1.8rem;
`;

const DateP = styled.p`
  font-family: 'Russo One', sans-serif;
`;

function Card(props) {
    const data = props.data;
    return (
        <CardContent>
            <Title>{data.title}</Title>
            <DateP>{data.date}</DateP>
            {props.data.media_type === "video" ? <iframe width="420" height="315"
                src={data.url} alt="NASA photo of the day">
            </iframe> : <img width="420" height="315"
                src={data.url} alt="NASA photo of the day">
                </img>}
            <Title>{props.description}</Title>
            <TextP>{data.explanation}</TextP>
            <ButtonExampleLabeledBasic />
        </CardContent>
    );
};

export default Card;