import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import heroImage from './assets/images/hero.png'
import firstIcon from './assets/images/magicBall.png'
import secondIcon from './assets/images/heart.png'
import thirdIcon from './assets/images/flower.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{minHeight: '100vh'}} className='gradient-bg'>
        <div className='container'>
        <div className='row'>
          <div className='wrapper'>
            <h1 >ASTROCLUB</h1>

            <div>
              <img src={heroImage} alt="main image" className='main-image'/>
            </div>
            
            <div class="subtitle-black">Explore your bond with a</div>
            <div class="subtitle-purple">Cosmic Compatibility Report</div>

            <div className='button-container'>
              <button className='but'>
                <img src={firstIcon} alt="1" className='box'/>
                Birth Charts
              </button>
              <button className='but'>
                <img src={secondIcon} alt="2" className='box'/>
                Energy Match
              </button>
              <button className='but'>
                <img src={thirdIcon} alt="3" className='box'/>
                Long-term Potential
              </button>
            </div>
          <button className='knopka'>
            Take the Quiz
          </button>
          </div>
          
        </div>
      </div>
       
   
    </div>
   
     
      
    </>
  )
}

export default App
