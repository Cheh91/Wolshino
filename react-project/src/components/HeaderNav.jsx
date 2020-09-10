import React from 'react';
import './../App.css';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
    wrapper: {
      maxWidth: "800px",
      width: "100%",
      margin: "0 auto"
    },
    root: {
      marginTop: '50px',
      marginBottom: '130px'
    },
    link: {
      color: "#9ba7b4",
      textTransform: "uppercase",
      fontWeight: '500',
      textDecoration: "none",
      marginLeft: "25px",
      marginRight: "25px"
    }
}))

const HeaderNav = () => {

  const classes = useStyles()

  return (

    <Container className={classes.wrapper}>
      <Box>
        <Typography className={classes.root}>
          <Link href="#" className={classes.link}>
            about
          </Link>
          <Link href="#" className={classes.link}>
            projects
          </Link>
          <Link href="#" className={classes.link}>
            gallery
          </Link>
          <Link href="#" className={classes.link}>
            houses
          </Link>
          <Link href="#" className={classes.link}>
            general plan
          </Link>
          <Link href="#" className={classes.link}>
            location
          </Link>
        </Typography>
      </Box>
    </Container>
  );

}

export default HeaderNav;