import useGif from './../useGif';
import { useState } from 'react';

const Tag = () => {
  const [tag, setTag] = useState('code');
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className='container'>
      <h1>Random {tag} gif</h1>
      <img width='500' src={gif} alt='Random Gif' />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Tag;
