import {React, useState}from 'react'
import Cards from './CardBox'
import { BsPlusLg } from "react-icons/bs";
import ModalCharacter from './ModalCharacter';
import CharacterPopup from './CharacterPopup';




const Caards = () => {
    const [show, setShow] = useState(false);
    const [isPlanetOpen, setIsPlanetOpen] = useState(false);
    const[name, setName] = useState("")
    const handleOpen = (name) => {
        setIsPlanetOpen(true)
        setName(name);
    }
    
    return (
        <div className={`${isPlanetOpen?"Card-Container pt-2 ps-3 p-width":"Card-Container show-pwidth"}`}>
            {
                Cards.map(Cardzz => {
                    return(
                        <div className="grid2">
                            <div className="Card  m-2 bg-white" key={Cardzz.Id} onClick={()=> handleOpen(Cardzz.CharacterName)}>
                            <div>
                                <img src={ Cardzz.CharacterImg } alt="pic" className="Card-img img-fluid"/>
                            </div>  
                            <div className="Card-Body pt-2 ps-3">
                                <h6 className="Card-Title">{ Cardzz.CharacterName }</h6>
                                <p className="Card-Text text-muted">{ Cardzz.Info }</p>
                            </div>        
                        </div>
                        <div onClick={() => setShow(true)} className={ `${ Cards[Cards.length-1].Id === Cardzz.Id?"Add-Icon text-white text-center pt-1 ms-auto":"d-none" }` }><BsPlusLg /></div>
                        </div>
                    )
                })
            }
            <ModalCharacter show={show} handleClose={() => setShow(false)}/>
            <CharacterPopup isPlanetOpen={isPlanetOpen} setIsPlanetOpen={setIsPlanetOpen} name={name}/>
        </div>
    )
}

export default Caards
