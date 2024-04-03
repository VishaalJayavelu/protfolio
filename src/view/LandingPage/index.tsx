import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";

import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Qualifications from '../Qualifications'
import Contact from '../Contact'

import {LoaderProps} from '../../types'

export default function LandingPage({isOpen}:LoaderProps) {

  return (
    <>
      <TopNavBar isOpen={isOpen}/>

      <div className='flex flex-col gap-16 w-screen h-[92vh] overflow-y-scroll bg-stone-100 '>

        <Home isOpen={isOpen} />
        <About isOpen={isOpen} />
        <Skills isOpen={isOpen} />
        <Projects isOpen={isOpen} />
        <Qualifications isOpen={isOpen} />
        <Contact isOpen={isOpen} />
        <Footer isOpen={isOpen}/>

      </div> 
    </>
  )
}
