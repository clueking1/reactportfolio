import React, { useState } from 'react'
import NavBar from '../../components/navBar'
import Cards from '../../components/cards'
import About from '../../components/aboutMe'
import './style.css'

function Home() {
    const [about, setAbout] = useState(false)

    function aboutDiv() {
        console.log('hi')
        setAbout(!about)
    }

    return(
        <div className='home'>
            <div className="navigate">
                <NavBar />
            </div>
            <div className="aboutWrapper">
                {about ? <About /> : undefined}
            </div>
            
            <div className="allCards">
                <Cards aboutDiv={aboutDiv} />
            </div>
        </div>
    )
}

export default Home