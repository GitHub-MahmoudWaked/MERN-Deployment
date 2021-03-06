import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/HomePage.css';
import siteAd from '../assets/videos/home.mp4';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    document.title = 'Welcome to FixMe Fitness';
    axios
      .get('http://localhost:8000/api/articles')
      .then(response => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <Box component="div" className="home-bg">
      <Box component="div" className="home-overlay">
        <video autoPlay loop muted className="home-video">
          <source src={siteAd} type="video/mp4" />
        </video>
        <Container maxWidth="lg" className="home p-5">
          <h1 className="intro text-danger text-lg-left text-center">BE FiT</h1>
          <p style={{ fontSize: '20px' }} className="text-justify mb-5">
            FixMe is a platform specialized in providing up-to-date advice on fitness and nutrition. You can
            browse through our well-written and highly-informative health articles, as well as our
            high-quality workout guides. You can get customized meal and workout plans based on your body
            measurements. Stay healthy and enjoy using FixMe.
            <br />
            <br />
            This website has contributed to the well-being of many people, whether it was for weight-gain,
            weight-loss, muscle-gain or strength. You can be an absolute beginner with zero experience, or a
            professional athlete looking to reach your true potential, we can help!
            <br />
            <br />
            Get your measurments and start your journey to health. Remember don't eat less, eat right!
          </p>
          <h1 className="intro text-danger text-lg-left text-center">Health Articles</h1>
          <Grid container>
            {articles.length > 0 &&
              articles.map((article, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Grid item lg={4} md={12} sm={12} xs={12} className="px-2">
                      <Card className="mb-4">
                        <CardActionArea>
                          <CardMedia image={`../imgs/${article.title}.jpg`} style={{ height: '150px' }} />
                          <CardContent style={{ height: '175px' }}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {article.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              <div>{article.author}</div>
                              <div>{article.publishedIn}</div>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            onClick={() => navigate(`/articles/${article._id}`)}
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </React.Fragment>
                );
              })}
          </Grid>
          <h1 className="intro text-primary text-center mb-5">Our Staff</h1>
          <Grid container>
            <Grid item lg={6} md={12} sm={12} xs={12} className="px-2">
              <Card className="mb-4" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <CardActionArea>
                  <CardMedia
                    image="../imgs/trainer.jpg"
                    style={{ height: '175px', borderRadius: '50%', margin: '10px 35%' }}
                  />
                  <CardContent
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      height: '200px',
                      textAlign: 'center',
                    }}
                  >
                    <h3>Ghada Qaraeen</h3>
                    <h5 className="text-muted">Trainer</h5>
                    <div className="text-justify">
                      Ghada is one of our highly-qualified trainers at FixMe. She is qualified to provide
                      dietry plans along side training plans. Her speciality is weight-loss and muscule
                      building. Ghada has helped many of our users to maintain and improve their health.
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12} className="px-2">
              <Card className="mb-4" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <CardActionArea>
                  <CardMedia
                    image="../imgs/nutritionist.jpg"
                    style={{ height: '175px', borderRadius: '50%', margin: '10px 35%' }}
                  />
                  <CardContent
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      height: '200px',
                      textAlign: 'center',
                    }}
                  >
                    <h3>Mahmoud Waked</h3>
                    <h5 className="text-muted">Nutritionist</h5>
                    <div className="text-justify">
                      Mahmoud is a qualified Clinical Nutritionist. He has well-rounded experience working
                      with people of different needs. He provides professional and scientifically-proven
                      nutritional advice and meal-plans. Mahmoud believes in safety and steers away from
                      trendy diets.
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
