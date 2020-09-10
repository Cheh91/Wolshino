import React from 'react';
import './../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    link: {
        fontSize: "28px",
        color: "#8fc74a"
    },
    title:{
        fontWeight: "400",
        fontSize: "41px",
        lineHeight: "34px",
        color: "#9ba7b4",
        letterSpacing: "2px"
    },
    button: {
        background: "none",
        border: "1px solid #8fc74a",
        outline: "none",
        fontSize: "14px",
        lineHeight: "36px",
        color: "#8fc74a",
        textTransform: "uppercase",
        fontWeight: "700",
        padding: "0px 36px",
        borderRadius: "25px"
    }
}))


const HeaderTop = () => {

    const classes = useStyles()

    return (
        <Container style={{ width: '1440px' }}>
            <Box className={classes.wrapper}>
                <Link href="#" className={classes.link}>
                    +2  495  134-27-72
                </Link>
                <Typography className={classes.title}>
                    wolshino.com
                </Typography>
                <Button className={classes.button}>
                    all information
                </Button>
            </Box>
        </Container>
    );
}

export default HeaderTop;
