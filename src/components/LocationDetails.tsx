import React, {FunctionComponent} from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Location} from "../models/Location";

interface OwnProps {
    location: Location
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    subContainerInfo: {
        width: '100%'
    },
    imgPoster: {
        minHeight: '20vh',
        objectFit: 'cover'
    },
    containerImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '90vh',

    },
    containerInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(3)
    },
}))

const LocationDetails: FunctionComponent<Props> = ({location}) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={6} className={classes.containerInfo}>
                <div className={classes.subContainerInfo}>
                    <Typography variant="h2">{location.name} </Typography>
                    {/*  <Typography variant="h6">
                        {character.status} - {character.species}
                    </Typography>*/}
                    <Typography variant="h4">{location.dimension} </Typography>
                    <Typography variant="h4">Type: {location.type} </Typography>
                    <Typography variant="h4">Created: {location.created} </Typography>
                    {/*<Typography variant="h6">Residentes: {location.residents} </Typography>*/}
                </div>
            </Grid>
        </Grid>
    );
};

export default LocationDetails;
