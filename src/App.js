import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Picture from './components/Picture/Picture'
import Description from './components/Description/Description'
import Date from './components/Date/Date'

import {BASE_URL,API_KEY} from './constants'

function App() {
  const [pictureDate, setPictureDate] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [pictureTitle, setPictureTitle] = useState('');
  const getPic = targetdate => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${targetdate}`)
    .then(({data}) => {
      console.log(data)
      setPictureDate(data.date);
      setPictureUrl(data.hdurl);
      setExplanation(data.explanation)
    })
    .catch(err => console.log('Error gatting picture: ', err))
  }

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(({data}) => {
      console.log(data)
      setPictureDate(data.date);
      setPictureUrl(data.hdurl);
      setExplanation(data.explanation)
      setPictureTitle(data.title);
    })
    .catch(err => console.log('Error gatting picture: ', err))
  }, [])

  return (
    <div className="App">
      <h1>Nasa</h1>
      <p>Photo of the Day</p>
      <div className='container'>
        <Picture picture={pictureUrl}/>
        <Description title={pictureTitle} date={pictureDate} explanation={explanation}/>
      </div>
      <Date getPic={getPic}/>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
