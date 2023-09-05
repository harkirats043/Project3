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
      <h2>Fox Pictures</h2>
      <div>
        {foxImage && <img src={foxImage} alt="Random Fox" />}
        <button onClick={fetchNewFoxImage}>New Fox Image</button>
      </div>
    </div>
  );
}
