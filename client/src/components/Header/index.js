import { useContext, useRef } from 'react'
import { MyContext } from '../MyContext/index'

import portfolioIcon from '../../images/portfolio-icon.jpg'
import moon from '../../images/black-moon.png'
// import sun from '../../images/sun.jpg'

import "./index.css"

const Header = () => {
  const aboutElementRef= useRef(null)
  const servicesElementRef= useRef(null)
  const skillsElementRef= useRef(null)
  const portfolioElementRef= useRef(null)

  const {sectionRef,aboutRef,skillsRef,projectsRef,servicesRef}=useContext(MyContext)
  

  const handleClicked =(particularRef)=>{
    // console.log(particularRef.current)
    const headerHeight = document.querySelector('.header-bg').offsetHeight; // offsetHeight is a property in JavaScript that returns the height of an element, including its vertical padding, vertical scrollbar (if present), and borders, but does not include margin.
    // console.log(headerHeight,"headerHeight")
    if(particularRef.current){
      window.scrollTo({
        top: particularRef.current.offsetTop - headerHeight,// adjusting the scroll position to ensure that the target element is visible below the header.
        behavior: "smooth" // scrolling should be animated smoothly.
      });
    }
  }

  // useEffect(()=>{
  //   const headerHeightValue = document.querySelector('.header-bg').offsetHeight;
  //   console.log(headerHeightValue,"headerHeightValue")
  // })

  const handleOnHover=(particularElementRef)=>{
    // console.log(particularElementRef.current,"handleOnHover")
    if(particularElementRef.current){
      particularElementRef.current.style.fontWeight="bold"
      particularElementRef.current.style.fontSize="20px"
      particularElementRef.current.style.color="#6D54F1"
    }
  }

  const handleOnLeaveHover=(particularElementRef)=>{
    // console.log(particularElementRef.current,"handleOnLeaveHover")
    if(particularElementRef.current){
      particularElementRef.current.style.fontWeight="normal"
      particularElementRef.current.style.fontSize="inherit"
      particularElementRef.current.style.color="inherit"
    }
  }

  return (
    <nav className='header-bg'>
      <div className='header-container-bg'>
        <img src={portfolioIcon} className='icon' alt="portfolioIcon" onClick={()=>handleClicked(sectionRef)} />
        <div className='nav-elements-bg'>
          <img src={moon} className='moon nav-el' alt='moon' />
          <p className='about-nav-el nav-el'
           ref={aboutElementRef}
           onMouseEnter={()=>handleOnHover(aboutElementRef)}
           onMouseLeave={()=>handleOnLeaveHover(aboutElementRef)}
           onClick={()=>handleClicked(aboutRef)}>About</p>
          <p className='services-nav-el nav-el'
           ref={servicesElementRef}
           onMouseEnter={()=>handleOnHover(servicesElementRef)}
           onMouseLeave={()=>handleOnLeaveHover(servicesElementRef)}
           onClick={()=>handleClicked(servicesRef)}>Services</p>
          <p className='skills-nav-el nav-el'
           ref={skillsElementRef}
           onMouseEnter={()=>handleOnHover(skillsElementRef)}
           onMouseLeave={()=>handleOnLeaveHover(skillsElementRef)}
           onClick={()=>handleClicked(skillsRef)}>Skills</p>
          <p className='portfolio-nav-el nav-el'
           ref={portfolioElementRef}
           onMouseEnter={()=>handleOnHover(portfolioElementRef)}
           onMouseLeave={()=>handleOnLeaveHover(portfolioElementRef)}
           onClick={()=>handleClicked(projectsRef)}>Portfolio</p>
          <p className='resume-nav-el nav-el'
          >Resume</p>
          <p className='portfolio-nav-el nav-el'
          >Testimonials</p>
          <p className='portfolio-nav-el nav-el'
          >Contact</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
