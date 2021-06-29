import React, {FunctionComponent, useEffect, useState} from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import RickAndMortyHttp, {EnumRequestType} from "../http/RickAndMorty.http";
import {Character} from "../models/Character";
import CharacterDetails from "../components/CharacterDetails";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '90vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}))

const CharacterPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const params: any = useParams();
    const history = useHistory();

    const rickandMortyHttp = RickAndMortyHttp.getInstance();

    const [character, setCharacter] = useState<Character>({});

    const handleCharacter = async () => {
        if (!params.id) {
            history.push('/')
        }
        const characterWanted = await rickandMortyHttp.getCharacterById(EnumRequestType.character, params.id);
        setCharacter(characterWanted);
    }

    useEffect(() => {
        handleCharacter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper className={classes.root}>
            <CharacterDetails character={character}/>
        </Paper>
    );
};

export default CharacterPage;
