import React, {FunctionComponent} from 'react';
import {Result} from "../models/CharacterSearched";
import {Box, Card, CardContent, CardMedia, makeStyles, Typography, useTheme} from "@material-ui/core";
import {useHistory} from "react-router-dom";

interface OwnProps {
    character: Result
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        //minHeight: theme.spacing(0),
        //cursor: 'pointer',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'

    },
    content: {
        flex: '1 0 auto',
        backgroundColor: '#3c3c44'
    },
    cover: {
        width: 250,
        height: 250,
    },
    itemLink: {
        textDecoration: 'none'
    },
    active: {
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
        }
    },
    colorG: {
        color: '#CDCDCD'
    },
    colorW: {
        color: '#fff'
    }
}))

const CharacterItem: FunctionComponent<Props> = ({character}) => {
    const classes = useStyles();
    const theme = useTheme();
    //const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const history = useHistory();
    const handleClick = () => {
        history.push(`/character/${character.id}`);
    }
    const handleClickLocation = () => {
        history.push(`/location/${id}`);
    }

    const location = character.location.url;
    const id = location?.slice(41, 43);


    return (
        <Box p={1} mt={3}>
            <Card className={classes.root}> {/*onClick={handleClick}*/}
                <CardMedia
                    className={classes.cover}
                    image={character.image}
                    title={character.name}/>

                {
                    /*isLg &&*/ <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography onClick={handleClick} className={classes.active} variant="h5">
                            {character.name}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.colorW}>
                            {character.status} - {character.species}
                        </Typography>
                        <Typography variant="h6" className={classes.colorG}>
                            Last know location:
                        </Typography>
                        <Typography onClick={handleClickLocation} variant="subtitle1" className={classes.active}>
                            {character.location.name}
                        </Typography>
                        <Typography variant="h6" className={classes.colorG}>
                            Created :
                        </Typography>
                        <Typography variant="subtitle1" className={classes.colorW}>
                            {character.created}
                        </Typography>
                    </CardContent>
                </div>
                }

            </Card>
        </Box>
    );
};

export default CharacterItem;
