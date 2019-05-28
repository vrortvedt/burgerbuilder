import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} />
        <div 
            className={classes.Modal}
            styles={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                opacity: props.show ? '0' : '0',
            }}>
        {props.children}
    </div>
    </Aux>
);

<<<<<<< HEAD
export default modal;
=======
export default modal;
>>>>>>> 3d226ed133cbf6bfc75f7f40ae0140efddee41b3
