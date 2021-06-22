import React from "react";
import './Picture.css';

const Picture = props => {
    const {picture} = props;
    return(
        <div className='picture'>
            <img src={picture} alt=""/>
        </div>
    );
};

export default Picture