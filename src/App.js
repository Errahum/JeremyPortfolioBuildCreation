import React from 'react';
import './App.css';

function App() {
  const images = [
    {
      src: 'https://raw.githubusercontent.com/Errahum/HeliosFinance/4ac54cdf9a00db22f5dfbcd812ee3063243c8596/assets/Helios-Github.svg',
      title: 'Helios GitHub',
      description: '...',
      category: 'finance'
    },
    {
      src: 'https://raw.githubusercontent.com/Errahum/HeliosChart/main/helioschart.gif',
      title: 'Helios Chart',
      description: '...',
      category: 'finance'
    },
    {
      src: 'https://i.imgur.com/2qNkuMo.gif',
      title: 'Batailles de Timealot',
      description: '...',
      category: 'game'
    },
    {
      src: 'https://i.imgur.com/0pZYOxT.gif',
      title: 'HeliosTuner OpenAI fine-tuning',
      description: '...',
      category: 'tool'
    },
  ];

  const categories = ['finance', 'game', 'tool'];

  return (
  <div className="App">
    <header className="App-header">
      <h1>Mon Portfolio</h1>
      <div className="gallery">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Projects</h2>
            <div className="images">
              {images
                .filter((image) => image.category === category)
                .map((image, index) => (
                  <div key={index} className="image-container">
                    <img src={image.src} alt={image.title} />
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                    <button>Voir plus</button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </header>
  </div>
  );
}

export default App;