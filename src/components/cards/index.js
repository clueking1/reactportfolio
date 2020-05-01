import React, { useState, useEffect } from 'react'
import './style.css'

function Cards(props) {
    const [showBut, setShowBut] = useState({height:'300px'})
   const card1 = document.querySelector('.hey')
   
   
    function toggle1() {
      let w = window.innerWidth;
      if (w > 499) {
      let whichHeight = showBut.height === '300px' ? '100px' : '300px'
      setShowBut({height: whichHeight})
      } else {
        let whichHeight = showBut.height === '100px' ? '50px' : '100px'
        setShowBut({height: whichHeight})
      }
      props.projDiv()
    }

    function toggle2() {
      let w = window.innerWidth;
      if (w > 499) {
        let whichHeight = showBut.height === '300px' ? '100px' : '300px'
        setShowBut({height: whichHeight})
        } else {
          let whichHeight = showBut.height === '100px' ? '50px' : '100px'
          setShowBut({height: whichHeight})
        }
      props.contactDiv()
    }

    function toggle3() {
      let w = window.innerWidth;
      if (w > 499) {
        let whichHeight = showBut.height === '300px' ? '100px' : '300px'
        setShowBut({height: whichHeight})
        } else {
          let whichHeight = showBut.height === '100px' ? '50px' : '100px'
          setShowBut({height: whichHeight})
        }
      props.aboutDiv()
    }

    useEffect(() => {
       let w = window.innerWidth;
      if (w <= 499) {
        setShowBut({height: '100px'})
      }
    }, [])

    return(
        <div className="cards-list">
      {props.cardOne ? 
      <div className="one card 1" style={showBut} onClick={() =>  toggle1()} >
        <div className="card_image"> <img src="https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif" /> </div>
        <div className="card_title title-white">
          <p>Projects</p>
        </div>
      </div> : undefined }
      {props.cardTwo ? 
        <div className="card 2" style={showBut} onClick={() =>  toggle2()} >
        <div className="card_image">
          <img src="https://media.giphy.com/media/VcvvP1f4s5brZvmmdT/giphy.gif" />
          </div>
        <div className="card_title title-black">
          <p>Contact Me!</p>
        </div>
      </div> : undefined }
      {props.cardThree ? 
      <div className="card 3" style={showBut}  onClick={() =>  toggle3()} >
        <div className="card_image">
          <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"/>
        </div>
        <div className="card_title title-blac">
          <p>About Me</p>
        </div>
      </div> : undefined }

</div>
    )
}

export default Cards