import React from 'react';
import './App.css';

function App() {
  const images = [
    {
      src: 'https://raw.githubusercontent.com/Errahum/HeliosFinance/4ac54cdf9a00db22f5dfbcd812ee3063243c8596/assets/Helios-Github.svg',
      title: 'Helios Finance',
      description: 'Heliosfinance is designed to assist finance developers by providing free access to data, a structured project setup for using Jupyter Notebooks with various tools. Share and gain knowledge!',
      category: 'finance',
      href: 'https://github.com/Errahum/HeliosFinance'
    },
    {
      src: 'https://raw.githubusercontent.com/Errahum/HeliosChart/main/helioschart.gif',
      title: 'Helios Chart',
      description: 'PyQt5 Candlestick Chart for traders',
      category: 'finance',
      href: 'https://github.com/Errahum/HeliosChart'
    },
    {
      src: 'https://i.imgur.com/2qNkuMo.gif',
      title: 'Batailles de Timealot',
      description: '1V1 top-view battles focusing on strategy and class interaction.',
      category: 'game',
      href: 'https://github.com/Errahum/Battles-Of-Timealot'
    },
    {
      src: 'https://i.imgur.com/0pZYOxT.gif',
      title: 'HeliosTuner OpenAI fine-tuning',
      description: 'About Fine-tuning allows improving the models performance on specific tasks by using additional training data.',
      category: 'tool',
      href: 'https://github.com/Errahum/HeliosTuner'
    },
  ];

  const categories = ['finance', 'tool', 'game'];

  return (
  <div className="App">
    <header className="App-header">
      {/* <h1>Mon Portfolio WIP</h1> */}
      <div className="gallery">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Projects</h2>
            <div className="images">
              {images
                .filter((image) => image.category === category)
                .map((image, index) => (
                  <div key={index} className="image-container">
                    <h3>{image.title}</h3>
                    <img src={image.src} alt={image.title} />
                    <p>{image.description}</p>
                    <button>
                      <a href={image.href} target="_blank" rel="noopener noreferrer" className="button-link">More</a>
                    </button>
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