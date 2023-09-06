import React, { useState, useEffect } from 'react';

export default function DogsDetails() {
  const [dogImage, setDogImage] = useState('');

  async function fetchNewDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }

  useEffect(() => {
    fetchNewDogImage();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
       <div className="max-w-lg mt-16 mb-2 border-solid border-2 border-indigo-60">
      {dogImage &&  <img src={dogImage} alt="Random Dog" />}
        </div>
        </div>
      <div className='flex justify-center'>
      <button onClick={fetchNewDogImage} className="my-2 rounded-md bg-blue-500 px-4 py-2 hover:bg-blue-700 active:bg-blue-900 text-md ring ring-blue-300 md:ring-blue-500">New Image</button>
    </div>
    </div>
  );
}
