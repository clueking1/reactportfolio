import React from 'react'
import NavBar from '../../components/navBar'
import Cards from '../../components/cards'
import './style.css'

function Home() {

    return(
        <div className='home'>
            <div className="navigate">
                <NavBar />
            </div>
            
            <div className="allCards">
                <Cards />
            </div>
        </div>
    )
}

export default Home