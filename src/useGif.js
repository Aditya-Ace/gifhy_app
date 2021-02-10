import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//Use Effect takes two parameter
//First one is a call back function
//Second one is dependency array
//If dependency array left empty, it will then work as ComponentDidMount Lifecycle
//Meaning it only gonna run in the first render

const useGif = (tag) => {
  const [gif, setGif] = useState('');

  async function fetchGif(tag) {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  }
  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
