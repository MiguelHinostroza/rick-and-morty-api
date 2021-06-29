import React, {FunctionComponent} from 'react';
import {Character} from "../models/Character";
import {Grid, makeStyles, Typography} from "@material-ui/core";

interface OwnProps {
    character: Character
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

const CharacterDetails: FunctionComponent<Props> = ({character}) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={6} className={classes.containerImg}>
                <img className={classes.imgPoster} src={character.image} alt=""/>
            </Grid>
            <Grid item xs={12} md={6} className={classes.containerInfo}>
                <div className={classes.subContainerInfo}>
                    <Typography variant="h2">{character.name} </Typography>
                    <Typography variant="h6">
                        {character.status} - {character.species}
                    </Typography>
                    <Typography variant="h6">{character.location?.name} </Typography>
                    <Typography variant="h6">Gender: {character.gender} </Typography>
                </div>
            </Grid>
        </Grid>
       
    );
};

export default CharacterDetails;
