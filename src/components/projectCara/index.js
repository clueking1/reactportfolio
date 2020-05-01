import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'

const Projects = () => {
  

  return (
    <div>
        <Carousel>
                <div>
                    <img src={require('./websitepics/Penny.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/Penny-Pinchers" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://ancient-crag-94323.herokuapp.com/" target="_blank">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Planner.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/Day-Planner" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://clueking1.github.io/Day-Planner/" target="_blank">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Pw.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/Password-Generator" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://clueking1.github.io/Password-Generator/" target="_blank">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/WeatherDash.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/Weather-API" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://clueking1.github.io/Weather-API/" target="_blank">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Zodiac.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/zodiac-astrology" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://clueking1.github.io/zodiac-astrology/" target="_blank">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Quiz.jpg')} />
                    <button className="gitBut">
                        <a href="https://github.com/clueking1/Homework-Quiz" target="_blank">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="https://clueking1.github.io/Homework-Quiz/" target="_blank">Website</a>
                    </button>
                </div>
            </Carousel>
    </div>
  );
}

export default Projects;