import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import image from "./../img/photo-1.jpg";
import image2 from "./../img/photo-2.jpg";

const useStyles = makeStyles(() => ({
    news: {
        height: "574px",
        backgroundColor: "#e9edf0",
    },
    title: {
        fontSize: "50px",
        lineHeight: "30px",
        fontWeight: 300,
        color: "#000",
        textTransform: "uppercase",
        paddingTop: "60px",
        textAlign: "center"
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "60px"
    },
    newsPost: {
        width: "345px",
        height: "254px",
        position: "relative"
    },
    newsItem: {
        width: "345px",
        height: "95px",
        backgroundColor: "#fff",
        position: "absolute",
        left: "0",
        bottom: "0"
    },
    text: {
        fontSize: "22px",
        lineHeight: "30px",
        color: "#6e7b82",
        padding: "18px 20px "
    },
    newsDate: {
        width: "61px",
        height: "77px",
        backgroundColor: "#fff",
        position: "absolute",
        top: "12px",
        left: "18px",

    },
    dateText: {
        color: "#9ba7b4",
        textAlign: "center",
        fontSize: "13px",
        lineHeight: "14px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "5px",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    dateNumber: {
        fontSize: "28px",
        lineHeight: "28px",
        fontWeight: "500",
        textAlign: "center",
    },
    form: {
        width: "0",
	    height: "0",
	    borderLeft: "20px solid transparent",
	    borderRight: "20px solid transparent",
        borderBottom: "20px solid #fff",
        position: "absolute",
        left: "28px",
        bottom: "95px"
    }

    

}))

const News = () => {

    const classes = useStyles()

    return (
        <Paper className={classes.news} >
            <Container style={{ width: '1440px' }}>
                <Typography className={classes.title}>
                    News
                    </Typography>
                <Box className={classes.wrapper}>
                    <Paper className={classes.newsPost} elevation={0}
                        style={{ backgroundImage: `url(${image})` }}>
                        <Box className={classes.newsDate}>
                            <Typography className={classes.dateText}>
                            <Typography className={classes.dateNumber}>
                                18
                            </Typography>
                                june
                                2014
                            </Typography>
                        </Box>
                        <Box className={classes.newsItem}>
                            <Typography className={classes.text}>
                                Where the Russians were resting in the summer of 2014
                            </Typography>
                            <Box className={classes.form}></Box>
                        </Box>
                    </Paper>
                    <Paper className={classes.newsPost} elevation={0}
                        style={{ backgroundImage: `url(${image2})` }}>
                        <Box className={classes.newsDate}>
                        <Typography className={classes.dateText}>
                            <Typography className={classes.dateNumber}>
                                18
                            </Typography>
                                june
                                2014
                            </Typography>
                        </Box>
                        <Box className={classes.newsItem}>
                            <Typography className={classes.text}>
                                Where the Russians were resting in the summer of 2014
                            </Typography>
                            <Box className={classes.form}></Box>
                        </Box>
                    </Paper>
                    <Paper className={classes.newsPost} elevation={0}
                        style={{ backgroundImage: `url(${image})` }}>
                        <Box className={classes.newsDate}>
                        <Typography className={classes.dateText}>
                            <Typography className={classes.dateNumber}>
                                18
                            </Typography>
                                june
                                2014
                            </Typography>
                        </Box>
                        <Box className={classes.newsItem}>
                            <Typography className={classes.text}>
                                Where the Russians were resting in the summer of 2014
                            </Typography>
                            <Box className={classes.form}></Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Paper>
    )

}

export default News