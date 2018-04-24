import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const AppBar: React.SFC<{}> = () => {
    
    return (
        <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
    );
};
