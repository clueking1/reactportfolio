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
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Planner.jpg')} />
                    <button className="gitBut">
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Pw.jpg')} />
                    <button className="gitBut">
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/WeatherDash.jpg')} />
                    <button className="gitBut">
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Zodiac.jpg')} />
                    <button className="gitBut">
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
                <div>
                    <img src={require('./websitepics/Quiz.jpg')} />
                    <button className="gitBut">
                        <a href="/">Github</a>
                    </button>
                    <button className="webBut">
                        <a href="/">Website</a>
                    </button>
                </div>
            </Carousel>
    </div>
  );
}

export default Projects;