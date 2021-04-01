import React,{useState} from 'react';
import "../App.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Shoppingimg from '../images/welcome1.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import SignIn from './Signin'
import SignUp from './SignUp'
const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(15, 0),
      display:'flex',
      maxHeight: '70vh',
      
    },
    image: {
      
      backgroundImage: `url(${Shoppingimg})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const WelcomePage=()=> {
    const classes = useStyles();
    const [mode, setMode] = useState(true)
    
    const handleSignIn = ()=> setMode(false)

    const handleSignUp =()=> setMode(true)

    return(
        <div className=" welcome overflow-hidden" >
      <Container maxWidth="md" >
    <Grid container  component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          
        {mode=== true ? <SignIn signin={handleSignIn}/> :
        <SignUp signup={handleSignUp}/>}
        </Grid>
      </Grid>
    </Container>
    </div>
    )
};

export default WelcomePage;