import React from "react";
import './Description.css';

const Description = props => {
    const{title, date, explanation} = props;
    return(
        <div className='description'>
            <h2>{title}</h2>
            <div className='description-container'>
                <p className='line'>Date:</p>
                <p>{date}</p>
            </div>
            <div className='description-container'>
                <p className='line'>Explanation:</p>
                <p>{explanation}</p>
            </div>
        </div>
    );
};

export default Description