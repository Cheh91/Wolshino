import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Image from "./../img/About.jpg";

const useStyles = makeStyles(() => ({
    aboutPost: {
        height: "575px",
        width: "100%"
    }


}))

const About = () => {

    const classes = useStyles()

    return (

        <div>
            <Paper className={classes.aboutPost}
                style={{ backgroundImage: `url(${Image})` }}>
                
            </Paper>
        </div>
    )
}

export default About