import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import portfolioIcon from '../../images/portfolio-icon.jpg'
import moon from '../../images/black-moon.png'
// import sun from '../../images/sun.jpg'

import "./index.css"

const Header = () => {
  const {sectionRef,aboutRef,skillsRef,projectsRef,servicesRef}=useContext(MyContext)
  

  const handleClicked =(particularRef)=>{
    // console.log(particularRef.current)
    const headerHeight = document.querySelector('.header-bg').offsetHeight;
    if(particularRef.current){
      window.scrollTo({
        top: particularRef.current.offsetTop - headerHeight,
        behavior: "smooth"
      });
    }
  }

  return (
    <nav className='header-bg'>
      <div className='header-container-bg'>
        <img src={portfolioIcon} className='icon' alt="portfolioIcon" onClick={()=>handleClicked(sectionRef)} />
        <div className='nav-elements-bg'>
          <img src={moon} className='moon nav-el' alt='moon' />
          <p className='about-nav-el nav-el' onClick={()=>handleClicked(aboutRef)}>About</p>
          <p className='services-nav-el nav-el' onClick={()=>handleClicked(servicesRef)}>Services</p>
          <p className='skills-nav-el nav-el' onClick={()=>handleClicked(skillsRef)}>Skills</p>
          <p className='portfolio-nav-el nav-el' onClick={()=>handleClicked(projectsRef)}>Portfolio</p>
          <p className='resume-nav-el nav-el'>Resume</p>
          <p className='portfolio-nav-el nav-el'>Testimonials</p>
          <p className='portfolio-nav-el nav-el'>Contact</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
