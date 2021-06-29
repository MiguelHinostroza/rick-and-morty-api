import React, {FunctionComponent} from 'react';
import {IRoute} from "../models/IRoute";
import {Route} from 'react-router-dom';

interface OwnProps extends IRoute {
}

type Props = OwnProps;

const SubRoute: FunctionComponent<Props> = (route) => {

    return (
        <Route path={route.path} render={(props => (<route.component {...props} routes={route.routes}/>))}/>
    );
};

export default SubRoute;
