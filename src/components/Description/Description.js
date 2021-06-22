import React from "react";
import './Description.css';

const Description = props => {
    const{title, date, explanation} = props;
    return(
        <div className='description'>
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>Explanation: {explanation}</p>
        </div>
    );
};

export default Description