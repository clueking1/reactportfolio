import React from 'react'
import './style.css'

function Cards(props) {
 
    return(
        <div className="cards-list">
  
<div className="card 1" >
  <div className="card_image"> <img src="https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif" onClick={() => props.projDiv()}/> </div>
  <div className="card_title title-white">
    <p>Projects</p>
  </div>
</div>

  <div className="card 2">
  <div className="card_image">
    <img src="https://media.giphy.com/media/VcvvP1f4s5brZvmmdT/giphy.gif" />
    </div>
  <div className="card_title title-black">
    <p>Contact Me!</p>
  </div>
</div>

<div className="card 3">
  <div className="card_image">
    <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" onClick={() => props.aboutDiv()}/>
  </div>
  <div className="card_title title-blac">
    <p>About Me</p>
  </div>
</div>

</div>
    )
}

export default Cards