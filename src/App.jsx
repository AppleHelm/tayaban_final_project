import './App.css';
import React, { useState } from 'react';
import AboutMe from './assets/Components/AboutMe';
import Experience from './assets/Components/Experience';
import Education from './assets/Components/Education';
import Skills from './assets/Components/Skills';
import Contact from './assets/Components/Contact';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const components = [
  <AboutMe key="about" />,
  <Contact key="contact" />,
  <Education key="education" />,
  <Experience key="experience" />,
  <Skills key="skills" />,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % components.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + components.length) % components.length);

  // Keyboard support
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center transition-all duration-500">
      <header className="py-6 text-center w-full bg-blue-600">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="w-full max-w-4xl px-4 py-8 text-center">
        {components[currentIndex]}
      </main>
      <div className="flex justify-between w-full max-w-4xl px-8 pb-10">
        <button onClick={prevSlide} className="text-2xl text-white hover:text-blue-400">
          <ArrowLeft />
        </button>
        <button onClick={nextSlide} className="text-2xl text-white hover:text-blue-400">
          <ArrowRight />
        </button>
      </div>
      <div className="flex space-x-2 pb-4">
        {components.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
