import React from 'react'
import Tabs from '../Component/Tabs';
import Cardz from '../Component/Cardz';
import ModalCharacter from './ModalCharacter';

const Home = () => {
    return (
        <div className="home">
            <Tabs/>
            <Cardz/>
            <ModalCharacter/>
        </div>
    )
}

export default Home
