import React from 'react';

import classes from './HexagonsContainer.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const HexagonsContainer = (props) => {
 
    const buildRow = (hex) => {
        console.log(hex);
        return(
            <div className={classes.AlignHexagon}>
                <div className={classes.Hexagon}>
                    <div className={classes.Icons}>
                        <MaterialIcon icon={hex.name} size={70} />
                        
                    </div>
                    
                </div>
                <h3>{hex.title}</h3>
                        <p>{hex.desc}</p>
            </div>

        )

    }
    return(
        <div className={classes.Container}>
            <div className={classes.HexagonsContainer}>
                {props.hexagons.map(buildRow)}
            </div>        
        </div>

    );

}

export default HexagonsContainer;