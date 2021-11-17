import React from 'react'
import { BsPlusLg, BsXLg } from "react-icons/bs";
import characterten from '../Assets/characters/characterten.png'
import charactereleven from '../Assets/characters/charactereleven.png'
import charactersixteen from '../Assets/characters/charactersixteen.png'
import characterfive from '../Assets/characters/characterfive.png'
import charactertwelve from '../Assets/characters/charactertwelve.png'
import characterseven from '../Assets/characters/characterseven.png'

const PlanetPopup = ({isPlanetOpen, setIsPlanetOpen}) => {
    return (
        <div className={`${isPlanetOpen?"card-container show-cardcontainer":"card-container"}`}>
            <div className="card card-pop" style={{ width: '25rem' }}>
                <div class="d-flex justify-content-end pe-3 py-3">
                    <div className="square mb-2 text-center" onClick={()=>setIsPlanetOpen(false)}><BsXLg/></div>
                </div>
                <div className="card-body">
                    <h6  className="card-title fw-bold fs-4 pb-3">Planet Alpha</h6>
                    <p className="card-text mb-2 text-muted lh-sm">Planet Alpha is a place to be if you like anything related to planets. I know it's a bit meta, but come see by yourself </p>
                    <p className="card-text pt-1 mb-0">Population</p>
                    <p className="card-txt fw-bold">234</p>
                    <div className="d-flex justify-content-between">
                        <div>
                           <h6 className="txt text-muted">CHARACTERS</h6> 
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="square text-center "><BsPlusLg/></div>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={characterten} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Darlene Robertson</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={charactereleven} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Kathryn Murhpy</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={charactersixteen} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Jenny Wilson</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={characterfive} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Arlene McCoy</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={charactertwelve} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Darrell Steward</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                    <div className="list-box d-flex pt-2">
                        <div className="img1">
                            <img src={characterseven} alt="person-img"/>
                        </div>
                        <div className="list-txt">
                            <h6 className="img-name mb-0 fw-bold">Bessie Cooper</h6>
                            <p className="img-para text-muted">23 friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanetPopup
