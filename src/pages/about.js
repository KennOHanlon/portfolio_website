import React from 'react';
import '../index.css';
import { Carousel } from '../components/Carousel.jsx';
import slides from "../data/japan-carousel.json";
import cuisineSlides from "../data/cuisine-photos.json";
import bookSlides from "../data/books-carousel.json";

const About = () => {


  return (
    <div className='grid-container'>

      <div className='grid-item-header'>
        <h2>Who am I?</h2>
        <p>I love solving problems which pairs well with my natural curiousity 
          for the world because it helps me to come up with innovative solutions. </p>
          <p>
            Click below to learn more about some of my favorite interests!
          </p>

          <div className='center'>
            <a href='#lifelong'><button  className='buttonTile'>Lifelong Learner</button></a>
            <a href='#japan'><button className='buttonTile'>Japanese Experiences</button></a>
            <a href='#cuisine'><button className='buttonTile'>Culinary Experiences</button></a>
          </div>
      </div>
      <div id='lifelong' className='grid-item'>
        <h2 >Lifelong Learner</h2>
        <div className='container'>
          <div className='justify'>
              <p>I am a person of many interests and hobbies, but I always like to be learning and improving at the things I pursue. </p>
                
              <p>I am a fan of the concept that consistency builds success, and that creating habits to 
                invest in yourself is one of the best things you can do. After all, if I improve 1% every day, then I will be 3.5 times the person I am today in a year from now.
              </p>

              <p>I have listed some of my favorite books below that I read in the pursuit of continuing to improve myself. I like to read at least twenty minutes every night for concepts that can help me in my personal life.
              </p>

              <div className='bookImgContainer'>
              <img className='book' src="./assets/leadersEatLast.png" alt="Leaders Eat Last by Simon Sinek"></img> 
              <img className='bookWithBorder' src="./assets/goSuckALemon.jpg" alt="Go Suck a Lemon by Michael Cornwall"></img> 
              <img className='book' src="./assets/radicalHonesty.jpg" alt="Radical Honesty by Brad Blanton"></img> 
              <img className='book' src="./assets/psychologyOfMoney.jpg" alt="The Psychology of Money by Morgan Housel"></img> 
              <img className='book' src="./assets/atomicHabits.jpg" alt="Atomic Habits by James Clear"></img> 

              </div>

              <div className='bookImgContainerMobile'>
              <Carousel data={bookSlides}/>
              </div>
          
          </div>
        </div>
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