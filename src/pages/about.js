import React from 'react';
import '../index.css';
import { Carousel } from '../components/Carousel.jsx';
import slides from "../data/japan-carousel.json";
import cuisineSlides from "../data/cuisine-photos.json";

const About = () => {


  return (
    <div className='grid-container'>

      <div className='grid-item-header'>
        <h2>Who am I?</h2>
        <p>I love solving problems which pairs well with my natural curiousity 
          for the world because it helps me to come up with innovative solutions. </p>
          <p>
            Click below to learn about each of the respective parts of my life!
          </p>

          <div>
            <button  className='buttonTile'><a href='#lifelong'>Lifelong Learner</a></button>
            <button className='buttonTile'><a href='#japan'>Japanese Experiences</a></button>
            <button className='buttonTile'><a href='#cuisine'>Culinary Experiences</a></button>
          </div>
      </div>
      <div id='lifelong' className='grid-item'>
        <h2 >Lifelong Learner</h2>

      </div>
        <div id='japan' className='grid-item'>
          <h2>Appreciation for Japanese Culture</h2>
          <div className='container'>
            <div className='container-text'>
              <p>When I was growing up, I wanted to be a ninja. As funny and embarassing as it is reflecting on that, I studied the Japanese language and culture for 
                eight years because of that initial desire. After studying throughout all of high school, I eventually took runner-up at the Michigan High School Japanese Quiz Bowl in 2013.
              </p>
              <p> I learned that I love J-pop (Japanese pop music) - my two favorite songs are Sakura by Funky Monkey Babys and Kiseki by Greeeen! Both songs are worth looking at the
                translated lyrics if you enjoy love songs.
              </p>
              <p>
                I visited Japan for a couple weeks in May of 2023. I traveled to Tokyo and then took a bullet train to Osaka and Kyoto.
                Click through the carousel to see images from my trip! 
              </p>
            </div>
            <div className='container-picture'>
              <Carousel data={slides}/>
            </div>
          </div>

        </div>
        <div id='cuisine' className='grid-item'>
          <h2>Cusine Connoisseur</h2>

          <p> Add GALLERY ROULETTE of tiktok embedded videos of food transitions</p>

          <div className='container-picture'>
              <Carousel data={cuisineSlides}/>
            </div>
        </div>

    </div>
  )
}

export default About;