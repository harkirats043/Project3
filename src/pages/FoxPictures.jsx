import React, { useState, useEffect } from 'react';

export default function FoxPictures() {
  const [foxImage, setFoxImage] = useState('');

  // Function to fetch a new random fox image
  async function fetchNewFoxImage() {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFoxImage(data.image);
    } catch (error) {
      console.error('Error fetching fox image:', error);
    }
  }

  useEffect(() => {
    // Fetch the initial fox image when the component mounts
    fetchNewFoxImage();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
      <div className="max-w-lg mt-16 mb-2 border-solid border-2 border-indigo-60">
          {foxImage && <img src={foxImage} alt="Random Fox" />}
        </div>
      </div>
      <div className='flex justify-center'>
        <button onClick={fetchNewFoxImage} className='my-2 rounded-md bg-blue-500 px-4 py-2 hover:bg-blue-700 active:bg-blue-900 text-md ring ring-blue-300 md:ring-blue-500'>New Image </button>
      </div>
    </div>
  );
}
