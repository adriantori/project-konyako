import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import './App.css';
import React, { useState } from 'react';
import FallingImage from './components/FallingImage'; // Adjust the path based on your project structure

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
  <Container>
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      {/* Left side content */}
      <Grid item xs={12} md={6} lg={4}>
        <Paper style={{ padding: '2rem', textAlign: 'center', borderRadius: '10px', background: 'teal' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
            私のVTuberの海底世界<br /><b>へようこそ！</b>
          </Typography>
          <img
            src="./assets/logo.png"
            alt="Undersea VTuber"
            style={{ width: '100%', borderRadius: '10px', marginTop: '1rem' }}
          />
          <Typography variant="h6" sx={{ marginTop: '1rem', color: 'white' }}>
            天流にゃこと一緒に<br />魔法のような海の世界に飛び込みましょう！
          </Typography>
          <Button variant="contained" color="success" onClick={handleButtonClick}>
            <b>バッカルコーーーーン!</b>
          </Button>
          {images.map(({ id, x }) => (
            <FallingImage key={id} id={id} x={x} removeImage={removeImage} />
          ))}
        </Paper>
      </Grid>

      {/* Right side content (full-sized vertical model) */}
      <Grid item xs={12} md={6} lg={8} style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="./assets/full.jpg"  // Replace with the path to your vertical model image
          alt="VTuber Vertical Model"
          style={{ width: '80%', borderRadius: '10px' }}
        />
      </Grid>
    </Grid>
  </Container>
);
};

export default App;
