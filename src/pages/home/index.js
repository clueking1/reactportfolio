import React, { useState } from 'react'
import NavBar from '../../components/navBar'
import Cards from '../../components/cards'
import About from '../../components/aboutMe'
import Projects from '../../components/projectCara'
import './style.css'

function Home() {
    const [uni, setUni] = useState(true)
    const [about, setAbout] = useState(false)
    const [proj, setProj] = useState(false)

    function aboutDiv() {
        setAbout(!about)
        setUni(!uni)
    }

    function projDiv() {
       setProj(!proj)
       setUni(!uni)
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
            {uni ? <div className="emptyWrapper"></div> : undefined}
            
            
            <div className="allCards">
                <Cards aboutDiv={aboutDiv} projDiv={projDiv} />
            </div>
        </div>
    )
}

export default Home