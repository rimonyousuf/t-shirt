import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {

    const {picture,name,price} = tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;