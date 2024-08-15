import React from 'react';
import '../index.css';
import { Carousel } from '../components/Carousel.jsx';
import slides from "../data/japan-carousel.json";
import cuisineSlides from "../data/cuisine-photos.json";
import bookSlides from "../data/books-carousel.json";


const About = () => {

  const smoothScroll = (e) => {
    e.preventDefault();
  
   const anchor = e.target.closest("a");   // Find closest Anchor (or self)
  if (!anchor) return;                     // Not found. Exit here.
  document.getElementById(anchor.getAttribute('href').substring(1)).scrollIntoView({ behavior: "smooth", block: "start"});
  
  }

  return (
    <div className='grid-container'>

      <div className='grid-item-header'>
        <h2>Who am I?</h2>
        <div className='container'>

            <div className='justify'>

            <p>A problem solver. I love to solve problems which pairs with my natural curiousity 
              for the world because it helps me to explore the problem to come up with innovative solutions. Not every problem needs 
              a unique solution, but finding the right solution to each problem is what I find so much fun about the process! </p>
              <p>Outside of exploring technologies and expanding my career as a software engineer, I have a variety of interests. 
                I regularly enjoy reading to expand my knowledge about the evergrowing the world around me - particularly psychology and finance.
                I am fascinated with traveling and worldly culture - Japanese culture in particular - and I like to regularly hit the links and play 18 holes of golf. </p>
              <p>
                Click below to learn more about some of my favorite interests.
              </p>
              </div>
          </div>
              <div className='center'>
                <a href='#lifelong' onClick={smoothScroll}><button className='buttonTile'>Lifelong Learner</button></a>
                <a href='#japan' onClick={smoothScroll}><button className='buttonTile'>Japan Travel</button></a>
                <a href='#cuisine'onClick={smoothScroll}><button className='buttonTile'>'Fore!' Ways Golf Impacted My Life</button></a>
              </div>
          </div>
        
      <div id='lifelong' className='grid-item'>
        <h2 >Lifelong Learner</h2>
        <div className='container'>
          <div className='justify'>
              <p>I am a person of many interests and hobbies, but I always like to be learning and improving at the things I pursue. </p>
                
              <p>I am a fan of the concept that consistency builds success, and that creating habits to 
                invest in yourself is one of the best things you can do. After all, if I improve 1% every day, then I will be 37 times the person I am today in a year from now.
              </p>

              <p>I have listed some of my favorite books below that I read in the pursuit of continuing to improve myself. I like to read at least twenty minutes every night for concepts that can help me in my personal life.
              </p>
          </div>
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
        <div id='japan' className='grid-item'>
          <h2>Appreciation for World Culture</h2>
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
                I have plans to revisit in November of 2024, but will be planning trips to Europe afterwards. 
              </p>
              <p>  
              Stay tuned for more, but for now click through the carousel to see images from my trip! 
              </p>
            </div>
            <div className='container-picture'>
              <Carousel data={slides}/>
            </div>
          </div>

        </div>
        <div id='cuisine' className='grid-item'>
          <h2>'Fore!' Ways Golf Has Impacted My Life</h2>

          <div className='container'>
            <div className='container-text'>
              <p>I had a 5 iron in my hands at five years old. Golf has always been a part of my life.</p>

              <p>My first job was a caddie, I used to wake up every day during the summer at 5:30AM to ride my bike to the country club. I would then caddie 36 holes of golf, ride my bike home, and then go play 18 holes myself.</p>

              <p>At the end of high school, I was awarded the Chick Evans Caddie Scholarship - a full ride scholarship to attend the Univesity of Michigan.</p>

              <p>Golf has grown and evolved with me throughout my life, its been a staple for me for many years. In my current life, I use it as a way to spend
                quality time with my retired father.
              </p>
            </div>
          </div>

          <div className='container-picture'>
              <Carousel data={cuisineSlides}/>
            </div>
        </div>

    </div>
  )
}

export default About;