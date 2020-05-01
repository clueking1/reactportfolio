import React, { useState } from 'react'
import NavBar from '../../components/navBar'
import Cards from '../../components/cards'
import About from '../../components/aboutMe'
import Projects from '../../components/projectCara'
import ContactCard from '../../components/contactCard'
import './style.css'

function Home() {
    const [uni, setUni] = useState(true)
    const [uni2, setUni2] = useState(false)
    const [about, setAbout] = useState(false)
    const [proj, setProj] = useState(false)
    const [con, setCon] = useState(false)
    const [cardOne, setCardOne] = useState(true)
    const [cardTwo, setCardTwo] = useState(true)
    const [cardThree, setCardThree] = useState(true)

    const card1Re = document.querySelector('.one')

    function card1 () {
        setCardTwo(!cardTwo)
        setCardThree(!cardThree)
    }

    function card2 () {
        setCardOne(!cardOne)
        setCardThree(!cardThree)
    }

    function card3 () {
        setCardTwo(!cardTwo)
        setCardOne(!cardOne)
    }

    function aboutDiv() {
        setAbout(!about)
        setUni(!uni2)
        card3()
    }

    function projDiv() {
       setProj(!proj)
       setUni(!uni)
       card1()
    }

    function contactDiv() {
        setCon(!con)
        setUni(!uni)
        card2()
    }

    return(
        <div className='home'>
            <div className="navigate">
                <NavBar />
            </div>
            <div className="aboutWrapper">
                {about ? <About /> : undefined}
            </div>
            <div className="projectWrapper">
                {proj ? <Projects /> : undefined}
            </div>
            {con ? <div className="contactWrapper">
                 <ContactCard /> 
            </div> : undefined}
            {uni ? <div className="emptyWrapper"></div> : undefined}
            {uni2 ? <div className="emptyWrapper"></div> : undefined}
            
            <div className="allCards">
                <Cards uni={uni} contactDiv={contactDiv} aboutDiv={aboutDiv} projDiv={projDiv} card1 = {card1} card2 = {card2} card3 = {card3}cardOne = {cardOne} cardTwo = {cardTwo} cardThree = {cardThree} />
            </div>
        </div>
    )
}

export default Home