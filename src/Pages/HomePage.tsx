import React, {ChangeEvent, FunctionComponent, useEffect, useState} from 'react';
import {Box, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {Result} from "../models/CharacterSearched";
import RickAndMortyHttp, {EnumRequestType} from "../http/RickAndMorty.http";
import CharacterItem from "../components/CharacterItem";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    textInput: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
    }

}))

const HomePage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const [characters, setCharacters] = useState<Result[]>([]);
    const [search, setSearch] = useState('');

    const rickAndMortyHttp = RickAndMortyHttp.getInstance();

    const handleCharacteres = async () => {
        const characters = await rickAndMortyHttp.getCharacteresBySearch(EnumRequestType.character, search);
        setCharacters(characters.results)
    }

    const handleChange = (e: ChangeEvent<any>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        handleCharacteres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handleCharacteres()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box p={3}>
                    <Typography variant="h2">
                        Characters
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth value={search} onChange={handleChange}
                           className={classes.textInput}
                           label="Search"
                           variant="filled"/>
            </Grid>

            {
                characters && characters.map((character, i) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
                        <CharacterItem character={character}/>
                    </Grid>
                ))
            }


        </Grid>
    );
};

export default HomePage;
