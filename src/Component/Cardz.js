import {React, useState} from 'react'
import Cards from './CardsView';
import { BsPlusLg } from "react-icons/bs";
import ModalPlanet from './ModalPlanet';
import PlanetPopup from './PlanetPopup';


const Cardz = () => {
    const [show, setShow] = useState(false);
    const [isPlanetOpen, setIsPlanetOpen] = useState(false);
    return (
        <div className={`${isPlanetOpen?"Card-Container pt-2 p-width":"Card-Container pt-2 show-pwidth"}`}>
            {
                Cards.map(Cardd => {
                    return(
                        <div className="grid">
                            <div className="Card ms-4" key={Cardd.Id} onClick={()=> setIsPlanetOpen(true)}>
                                <div className="px-4 ">
                                    <img src={ Cardd.PlanetImg } alt="person-img" className="card-img img-fluid"/>
                                </div>
                                <div className="Card-body ps-3">
                                    <div className="Card-title">{ Cardd.PlanetName }</div>
                                    <div  className="Card-text text-muted">{ Cardd.Detail }</div>
                                </div>
                                <div onClick={() => setShow(true)} className={ `${ Cards[Cards.length-1].Id === Cardd.Id?"Add-Icon text-white text-center pt-1 ms-auto":"d-none" }` }><BsPlusLg /></div>
                            </div>
                        </div>  
                    )
                })
            } 
            <ModalPlanet show={show} handleClose={() => setShow(false)}/>
            <PlanetPopup isPlanetOpen={isPlanetOpen} setIsPlanetOpen={setIsPlanetOpen}/> 
        </div>
        
    )
}

export default Cardz
