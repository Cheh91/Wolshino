import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image from "./../img/aspen.png";
import image2 from "./../img/heaven.png";
import image3 from "./../img/vei.png";
import image4 from "./../img/tower.png";




const useStyles = makeStyles(() => ({
    titleTypes: {
        textTransform: "uppercase",
        fontWeight: "300",
        fontSize: "50px",
        textAlign: "center",
        marginTop: "30px"
    },
    form: {
        bgcolor: "background.paper",
        alignItems: "center",
        width: "270px",
        height: "410px",
        alignContent: "flexEnd"
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "300",
        fontSize: "40px",
        lineHeight: "90px",
    },
    text: {
        fontSize: "16px",
        lineHeight: "28px",
        color: "#747474",
        fontWeight: "300",
        textAlign: "center"
    },
    aboutPost: {
        height: "115px",
        width: "192px",
        marginTop: "50px"
    },
    aboutPost2: {
        height: "128px",
        width: "193px",
        marginTop: "35px"
    },
    aboutPost3: {
        height: "114px",
        width: "204px",
        marginTop: "50px"
    },
    aboutPost4: {
        height: "162px",
        width: "198px",
    },
    media: {
        height: "100px"
    }
}))

const Section = () => {

    const classes = useStyles()

    return (
        <Container style={{ width: '1440px' }}>
            <div style={{ width: '100%' }}>
                <Typography className={classes.titleTypes}>
                    6 house types
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={"30px"} mb={"140px"}>
                    <Box display="flex" flexDirection="column" className={classes.form} p={0} m={'0px'} >
                        <Paper className={classes.aboutPost} elevation={0}
                            style={{ backgroundImage: `url(${image})` }} >
                        </Paper>
                        <Typography className={classes.title}>
                            Aspen
                        </Typography>
                        <Typography className={classes.text}>
                            House area - 121.4 m2.
                            Not a big compact and cozy house of wood. Gable roof. Second
                            floor - attic. Space of the house clearly defined by function. To ...
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" className={classes.form} p={0} m={'0px'}>
                        <Paper className={classes.aboutPost2} elevation={0}
                            style={{ backgroundImage: `url(${image2})` }}>
                        </Paper>
                        <Typography className={classes.title}>
                            heaven
                        </Typography>
                        <Typography className={classes.text}>
                            House area - 121.4 m2.
                            Not a big compact and cozy house of wood. Gable roof. Second
                            floor - attic. Space of the house clearly defined by function. To ...
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" className={classes.form} p={0} m={'0px'}>
                        <Paper className={classes.aboutPost3} elevation={0}
                            style={{ backgroundImage: `url(${image3})` }}>
                        </Paper>
                        <Typography className={classes.title}>
                            Veil
                        </Typography>
                        <Typography className={classes.text}>
                            House area - 121.4 m2.
                            Not a big compact and cozy house of wood. Gable roof. Second
                            floor - attic. Space of the house clearly defined by function. To ...
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" className={classes.form} p={0} m={'0px'}>
                        <Paper className={classes.aboutPost4} elevation={0}
                            style={{ backgroundImage: `url(${image4})` }}>
                        </Paper>
                        <Typography className={classes.title}>
                            Tower
                        </Typography>
                        <Typography className={classes.text}>
                            House area - 121.4 m2.
                            Not a big compact and cozy house of wood. Gable roof. Second
                            floor - attic. Space of the house clearly defined by function. To ...
                        </Typography>
                    </Box>
                </Box>
            </div>
        </Container>
    )

}

export default Section