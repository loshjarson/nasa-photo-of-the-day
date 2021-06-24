import React, {useRef} from 'react';
import styled from "styled-components";

const Date = props => {
    const {getPic} = props;
    const date = useRef();
    const handlesubmit = (e) => {
        e.preventDefault();
        getPic(date.current.value);
        date.current.value = "";
      }

    const DatePicker = styled.form`
        display: flex;
        flex-direction: column;
        margin: auto;
        font-family: Arial, Sans-serif;
        border: 1px solid #dddddd;
        padding: 10px;
        font-size: 12px;
        width: 18rem;
        border-radius: 15px;
        background-color: grey;
        
    `
    const Label = styled.label`
        display: inline-block;
        float: left;
        font-size: 18px;
        margin-top: 5px;
    `

    const Input = styled.input`
        display: inline-block;
        background-color:#e4ebef;
        border: none;
        padding: 5px 10px;
        float: right;
    `
    const SubmitButton = styled.button`
        display: block;
        margin: 15px auto 5px auto;
        float: center;
        border: 2px solid white;
        border-radius: 10px;
        height: 75px;
        width: 85px;
        font-size: 15px;
        background-color: rgb(255, 151, 151);
        color: white;
        cursor: pointer;
    `
    // props.value='Get Picture'
    return(
        <DatePicker onSubmit={e=>handlesubmit(e)}>
            <span>
                <Label>
                    New date
                </Label>
                <Input type='date' ref={date} required/>
            </span>
            <SubmitButton>Get Picture<br/>🚀</SubmitButton>
        </DatePicker>
    )
}

export default Date