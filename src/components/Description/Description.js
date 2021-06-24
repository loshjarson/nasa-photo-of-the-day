import React from "react";
import styled from "styled-components";


const Description = props => {
    const{title, date, explanation} = props;

    const Description = styled.div`
        border: 2px solid black;
        border-radius: 15px;
        width: 30%;
        background-color: rgb(250, 242, 224);
        padding: 2rem;
        color: black;
        height: fit-content;
        margin: auto;
    `
    const Title = styled.h2`
        text-decoration: underline;
    `

    const Container = styled.div`
        float: left;
        display: flex;
        flex-direction: row;
    `
    const Key = styled.p`
        margin-right: 1rem;   
    `

    return(
        <Description>
            <Title>{title}</Title>
            <Container>
                <Key>Date:</Key>
                <p>{date}</p>
            </Container>
            <Container>
                <Key>Explanation:</Key>
                <p>{explanation}</p>
            </Container>
        </Description>
    );
};

export default Description