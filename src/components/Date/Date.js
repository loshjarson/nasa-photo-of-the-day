import React, {useRef} from 'react';

const Date = props => {
    const {getPic} = props;
    const date = useRef();
    const handlesubmit = (e) => {
        e.preventDefault();
        getPic(date.current.value);
        date.current.value = "";
      }
    return(
        <form className='date-picker' onSubmit={e=>handlesubmit(e)}>
            <label>
                Date:
                <input type='date' ref={date} placeholder=''/>
            </label>
            <input type='submit' value='Get Picture'/>
        </form>
    )
}

export default Date