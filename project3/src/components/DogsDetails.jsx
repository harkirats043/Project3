import React, { useState, useEffect } from 'react';

export default function DogsDetails() {
  const [dogImage, setDogImage] = useState('');

  // Function to fetch a new random dog image
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
    // Fetch the initial dog image when the component mounts
    fetchNewDogImage();
  }, []);

  return (
    <div>
      <h2>Dog Details Page</h2>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Random Dog" />
        </div>
      )}
      <button onClick={fetchNewDogImage}>Fetch New Dog Image</button>
    </div>
  );
}
