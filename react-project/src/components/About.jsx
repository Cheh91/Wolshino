import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Image from "./../img/About.jpg";
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    aboutPost: {
        height: "575px",
        width: "100%",
        position: "relative"

    },
    aboutItem: {
        width: "1150px",
        height: "395px",
        border: "10px solid white",
        position: "absolute",
        top: "84px",
        left: "50%",
        transform: "translate(-50%)",
        textAlign: "center",
    },
    title: {
        fontSize: "50px",
        lineHeight: "30px",
        fontWeight: 300,
        color: "#fff",
        textTransform: "uppercase",
        marginTop: "60px"
    },
    text: {
        fontSize: "20px",
        lineHeight: "30px",
        color: "#fff",
        width: "970px",
        margin: "0 auto",
        marginTop: "50px",
    },
    button: {
        border: "2px solid #fff",
        fontSize: "20px",
        fontWeight: 700,
        color: "#fff",
        paddingLeft: "45px",
        paddingRight: "45px",
        borderRadius: "50px",
        marginTop: "40px",
        paddingTop: "7px",
        paddingBottom: "7px",
    }
}))

const About = () => {

    const classes = useStyles()

    return (
        <Paper className={classes.aboutPost}
            style={{ backgroundImage: `url(${Image})` }}>
            <Box className={classes.aboutItem}>
                <Typography className={classes.title}>
                    About
                </Typography>
                <Typography className={classes.text}>
                    New summer resort ... "It does not happen!" - You say - "Or is it a new or Starodachnoe!".
                    Say and wrong. And promptly, and happily acknowledge their error, as soon find yourself in a wonderful
                    oasis of luxurious simplicity, somehow magically arisen in the middle of a raging forest in the Russian epic
                    spellcasting lake just an hour away and only a few traffic lights from the Kremlin!
                </Typography>
                <Button className={classes.button}>
                    all information
                </Button>
            </Box>
        </Paper>
    )
}

export default About