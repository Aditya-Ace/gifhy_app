import { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

//Use Effect takes two parameter
//First one is a call back function
//Second one is dependency array
//If dependency array left empty, it will then work as ComponentDidMount Lifecycle
//Meaning it only gonna run in the first render

const Random = () => {
  const [gif, setGif] = useState('');
  async function fetchGif() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  }
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className='container'>
      <h1>Random Gif</h1>
      <img width='500' src={gif} alt='Random Gif' />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Random;
