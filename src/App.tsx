import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSpring, animated, config } from 'react-spring';

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface FallingImageProps {
  id: number;
  x: number;
  removeImage: (id: number) => void;
}

const FallingImage: React.FC<FallingImageProps> = ({ id, x, removeImage }) => {
  const [{ y, rotate, opacity }, set] = useSpring(() => ({
    y: -500,
    rotate: Math.random() * 360 - 180,
    opacity: 1,
    onRest: () => {
      set({ opacity: 0 });
      setTimeout(() => {
        removeImage(id);
      }, 500); // Delay removal for 500 milliseconds after opacity transition
    },
    config: { ...config.default, duration: getRandomInt(2000, 5000) },
  }));

  useEffect(() => {
    set({
      y: window.innerHeight,
      rotate,
      reset: true,
    });
  }, [rotate, set]);

  return (
    <animated.img
      src="assets/yes.png" // Replace with your image URL
      alt="Falling Image"
      style={{
        position: 'absolute',
        top: y,
        left: x,
        transform: rotate.to((r) => `rotate(${r}deg)`),
        opacity: opacity.to((o) => o),
      }}
    />
  );
};

const App: React.FC = () => {
  const [images, setImages] = useState<{ id: number; x: number }[]>([]);

  const handleButtonClick = () => {
    const newImages = Array.from({ length: 5 }).map((_, index) => ({
      id: Date.now() + index,
      x: Math.random() * (window.innerWidth - 100),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (id: number) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Spawn Images
      </Button>
      {images.map(({ id, x }) => (
        <FallingImage key={id} id={id} x={x} removeImage={removeImage} />
      ))}
    </div>
  );
};

export default App;
