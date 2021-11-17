import React from 'react'
import planetloader from '../Assets/assets/planetloader.svg'

const Loader = () => {
    return (
        <div className="planet-img bg-light">
            <img src={ planetloader } alt="person-img"/>
        </div>
    )
}

export default Loader
