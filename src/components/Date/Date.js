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
        margin: auto;
    `
    const Label = styled.label`
        display: block;
        margin: auto;
    `

    const Input = styled.input`
        display: block;
        margin: auto;
    `
    const SubmitButton = styled.button`
        display: block;
        margin: auto;
    `
    // props.value='Get Picture'
    return(
        <DatePicker onSubmit={e=>handlesubmit(e)}>
            <Label>
                Date:
                <Input type='date' ref={date}/>
            </Label>
            <SubmitButton>Get Picture</SubmitButton>
        </DatePicker>
    )
}

export default Date