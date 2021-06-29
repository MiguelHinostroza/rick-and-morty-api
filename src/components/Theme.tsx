import React, {FunctionComponent} from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

interface OwnProps {
}

type Props = OwnProps;

const Theme: FunctionComponent<Props> = ({children}) => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#242c2c',
                contrastText: '#fff'
            },
            secondary: {
                main: '#242c2c',
                contrastText: '#F7A440'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
