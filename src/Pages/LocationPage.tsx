import React, {FunctionComponent, useEffect, useState} from 'react';
import {makeStyles, Paper} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import RickAndMortyHttp, {EnumRequestType} from "../http/RickAndMorty.http";
import {Location} from "../models/Location";
import LocationDetails from "../components/LocationDetails";

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

const LocationPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const params: any = useParams();
    const history = useHistory();

    const rickandMortyHttp = RickAndMortyHttp.getInstance();

    const [location, setLocation] = useState<Location>({});

    const handleLocation = async () => {
        if (!params.id) {
            history.push('/')
        }
        const locationWanted = await rickandMortyHttp.getLocationById(EnumRequestType.location, params.id);
        setLocation(locationWanted);
    }

    useEffect(() => {
        handleLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Paper className={classes.root}>
            <LocationDetails location={location}/>
        </Paper>
    );
};

export default LocationPage;
