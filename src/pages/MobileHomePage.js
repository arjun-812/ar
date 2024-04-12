import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileHeader from '../partials/Mobile/MobileHeader'
import MobileHome from '../partials/Mobile/MobileHome'
import MobileAbout from '../partials/Mobile/MobileAbout'
import MobileSkills from '../partials/Mobile/MobileSkills'
import MobileService from '../partials/Mobile/MobileService'
import MobileContactMe from '../partials/Mobile/MobileContactMe'
import MobileFooter from '../partials/Mobile/MobileFooter'
import MobileSkill from '../partials/Mobile/Skill';
import MobileProject from '../partials/Mobile/MobileProjects'

const MobileHomePage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <div className='bg-gray-800 text-white tracking-wide'>
      <MobileHeader />
      <MobileHome />
      <MobileAbout />
      {/* <MobileSkills /> */}
      <MobileSkill />
      <MobileService />
      <MobileProject/>
      <MobileContactMe />
      <MobileFooter />
    </div>
  )
}

export default MobileHomePage
