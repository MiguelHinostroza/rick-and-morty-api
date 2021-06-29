import React from 'react';
import './App.css';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {BrowserRouter, NavLink, Switch} from "react-router-dom";
import SubRoute from "./routes/SubRoute";
import routes from "./routes/routes";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '100%',
    },
    navbar: {
        padding: theme.spacing(3),
    },
    itemLink: {
        textDecoration: 'none'
    },
    active: {
        color: theme.palette.secondary.contrastText,
    }
}))

function App() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <BrowserRouter>
                    <Grid container className={classes.navbar}>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">
                                The Rick and Morty API
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography component={NavLink} exact={true} className={classes.itemLink}
                                        activeClassName={classes.active} to="/" noWrap
                                        color="inherit"
                                        variant="h6">
                                Characters
                            </Typography>
                        </Grid>

                    </Grid>


                    <Switch>
                        {
                            routes.map((route, i) => (<SubRoute key={i} {...route}/>))
                        }
                    </Switch>

                </BrowserRouter>
            </Container>
        </Box>
    );
}

export default App;
