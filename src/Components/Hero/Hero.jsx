import './Hero.css'
import backgroundImage from '../../assets/Rectangle 44.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(()=>{
    gsap.fromTo('.text-area', {
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity:1,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className='hero'>
        <img src={backgroundImage} alt="" className='bg-image' />

        <div className='hero-text-wrapper'>
          <div className='text-area'>
            <h1 id='header-animate'>You get party? We get people</h1>
            <p id='sub-animate'>Venues, planners, and vendors, inside one place</p>
          </div>

          <div className='button-wrapper'>
            <Link to="/" className='get-started'>Get started</Link>
            <Link to="/" className='login'>Login</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero