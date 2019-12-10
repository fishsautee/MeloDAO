import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Completed from './Completed';
import Voting from './Voting';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Proposals() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BrowserRouter>
      <CssBaseline />
      
      <main>
      
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Proposals
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Vote on releases to add to the MeloDAO digital catalogue
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to='/proposals'>
                  <Button variant="contained" color="primary">
                    Voting
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                <Link to='/proposals/completed'>
                  <Button variant="outlined" color="primary">
                    Completed
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>  
         
        
          <Route exact path="/proposals">
            <Voting /> 
          </Route>
          <Route path="/proposals/completed">
            <Completed />
          </Route>
      </main>
      </BrowserRouter>
    </React.Fragment>
  );
}