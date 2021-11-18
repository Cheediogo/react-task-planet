import React from 'react'
import characterfive from '../Assets/characters/characterfive.png'
import charactereight from '../Assets/characters/charactereight.png'
import characterten from '../Assets/characters/characterten.png'
import characterthirteen from '../Assets/characters/characterthirteen.png'
import characterfourteen from '../Assets/characters/characterfourteen.png';
import characterseveteen from '../Assets/characters/characterseveteen.png'
import { BsXLg } from "react-icons/bs";

const Pops = [
        {
            CharacterName:"Brooklyn Simmons",
            Info:"Brooklyn is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:1
        },

        {
            CharacterName:"Cameron Williamson",
            Info:"Cameron is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:2
        },

        {
            CharacterName:"Leslie Alexander",
            Info:"Leslie is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:3
        },

        {
            CharacterName:"Kriston Watson",
            Info:"Kriston is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:4
        },

        {
            CharacterName:"Jenny Wilson",
            Info:"Jenny is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:5
        },

        {
            CharacterName:"Mavin Mckinney",
            Info:"Mavin is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:6
        },

        {
            CharacterName:"Jerome Bell",
            Info:"Jane is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:7
        },

        {
            CharacterName:"Guy Hawkins",
            Info:"Guy is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:8
        },

        {
            CharacterName:"Robert Fox",
            Info:"Robert is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:9
        },

        {
            CharacterName:"Darlene Robertson",
            Info:"Darlene is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:10
        },

        {
            CharacterName:"Kathryn Murhpy",
            Info:"Kathryn is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:11
        },
        
        {
            CharacterName:"Bessie Cooper",
            Info:"Bessie is really a nice person. She's been living on planet Alpha for the last 10 years.",
            Id:12
        },
      
    ]

const Pop =({isPlanetOpen, setIsPlanetOpen}) => {
    return(
        Pops.map(pop => {
            return(
                <div className={`${isPlanetOpen?"card-container show-cardcontainer":"card-container"}`}>
                    <div className="card card-pop" style={{ width: '25rem' }}>
                        <div class="d-flex justify-content-end pe-3 py-3">
                            <div className="square mb-2 text-center" onClick={()=>setIsPlanetOpen(false)}><BsXLg/></div>
                        </div>
                        <div className="card-body"  key={ pop.Id }>
                            <h6  className="card-title fw-bold fs-4 pb-3">{ pop.CharacterName }</h6>
                            <p className="card-text mb-2 text-muted lh-sm text">{ pop.Info }</p>
                            <div className="alpha-content">
                                <div className="alpha-txt">
                                    <p className="card-text pt-1 mb-0">Planet</p>
                                    <p className="card-txt fw-bold">Alpha</p>
                                </div>
                                <div>
                                    <p className="card-text pt-1 mb-0">Planet</p>
                                    <p className="card-txt fw-bold">Alpha</p>
                                </div>
                            </div>
                            <div>
                                <h6 className="txt text-muted pt-2">FRIENDS</h6> 
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={characterseveteen} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Eleanor Pena</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={characterten} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Brooklyn Simmons</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={charactereight} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Kriston Watson</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={characterfourteen} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Cody Fisher</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={characterthirteen} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Courtney Henry</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                            <div className="list-box d-flex pt-2">
                                <div className="img1">
                                    <img src={characterfive} alt="person-img"/>
                                </div>
                                <div className="list-txt">
                                    <h6 className="img-name mb-0 fw-bold">Annette Black</h6>
                                    <p className="img-para text-muted">They really do whatever they like here </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    )
}
    


export default Pop
