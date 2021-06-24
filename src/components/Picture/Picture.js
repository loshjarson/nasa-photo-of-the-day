import React from "react";
import styled from "styled-components"

const Picture = props => {
    const {picture} = props;
    const Pic = styled.div`
        width: 60%;
        height: 100%;
    `
    const StyledImg = styled.img`
        max-height: 100%;
        max-width: 100%;
        margin: auto;
        border: 2px solid white;
    `
    return(
        <Pic>
            <StyledImg src={picture} alt=""/>
        </Pic>
    );
};

export default Picture