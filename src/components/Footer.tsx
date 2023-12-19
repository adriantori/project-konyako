import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Footer: React.FC = () => {
    return (
        <footer style={{ marginTop: '2rem', backgroundColor: 'teal', padding: '1rem' }}>
            <Container>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="white" align="left">
                            &copy; 2023 <a href="https://www.linkedin.com/in/adri-antori/" style={{color: 'inherit'}}>Cypherusuh</a> All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <IconButton color="inherit" href="https://www.youtube.com/@amarunyakoJP">
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitch.tv/amaru_nyako">
                            <OndemandVideoIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com/nyakoko_nyan">
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
