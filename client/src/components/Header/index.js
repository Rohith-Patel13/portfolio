
import portfolioIcon from '../../images/portfolio-icon.jpg'
import moon from '../../images/black-moon.png'
// import sun from '../../images/sun.jpg'

import "./index.css"

const Header = () => {
  return (
    <nav className='header-bg'>
      <div className='header-container-bg'>
        <img src={portfolioIcon} className='icon' alt="portfolioIcon" />
        <div className='nav-elements-bg'>
          <img src={moon} className='moon nav-el' alt='moon' />
          <p className='about-nav-el nav-el'>About</p>
          <p className='services-nav-el nav-el'>Services</p>
          <p className='skills-nav-el nav-el'>Skills</p>
          <p className='portfolio-nav-el nav-el'>Portfolio</p>
          <p className='resume-nav-el nav-el'>Resume</p>
          <p className='portfolio-nav-el nav-el'>Testimonials</p>
          <p className='portfolio-nav-el nav-el'>Contact</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
