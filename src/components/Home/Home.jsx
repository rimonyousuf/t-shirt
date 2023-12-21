import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

    const tshirts = useLoaderData()

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart</h3>
            </div>
        </div>
    );
};

export default Home;