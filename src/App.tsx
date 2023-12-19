import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Paper, Divider, Chip } from '@mui/material';
import './App.css';
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
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh', marginTop: '2rem' }}>
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
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '2rem', borderRadius: '10px', background: 'teal' }}>
              <img
                src="./assets/full.jpg"  // Replace with the path to your vertical model image
                alt="VTuber Vertical Model"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: '75vh' }}>
        <Grid container spacing={2} style={{ marginTop: '2rem' }}>
          {/* Left side (4 parts) */}
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '2rem', textAlign: 'center', borderRadius: '10px', background: 'teal' }}>
              <img
                src="https://via.placeholder.com/300"  // Replace with the path to your image
                alt="Left Image"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Paper>
          </Grid>

          {/* Right side (8 parts) */}
          <Grid item xs={12} md={8}>
            <Paper style={{ padding: '2rem', borderRadius: '10px', background: 'teal' }}>
              <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                伝記 / Biography
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                初めまして、こんにちは！<br />
                私はネットの海に漂う天使、クリオネの天流にゃこ(あまるにゃこ)です！<br />
                のんびりまったり配信を行っているので見に来てくれる皆と時間を共有できたらなぁ、と思っております🌸
              </Typography>
              <Divider light sx={{margin:2}}>
                <Chip label="自己紹介 / Introducing" sx={{color: 'white'}} />
              </Divider>
              <Typography variant="body1" sx={{ color: 'white' }}>
                nice to meet you!<br />
                I'm Amaru Nyako from Clione, an angel floating in the net sea!<br />
                I'm not good at it, but I hope I can share my time with everyone who comes to watch the stream in a relaxed atmosphere :-)
                Thank you!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
