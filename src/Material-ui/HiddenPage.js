import React from 'react';
import Hidden from '@material-ui/core/hidden';

function HiddenPage() {
    return (
        <div>
            
            <Hidden xsDown>
                <h1>Shows on large screeen greater than 600px</h1>
            </Hidden>
            <Hidden smUp>
                <h1>Show only on small screens less than 600px</h1>
            </Hidden>
        </div>
    )
}

export default HiddenPage
