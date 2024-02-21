import React from 'react'
import heroImg from '../../assets/images/hero.png'
import CountUp from 'react-countup' 
import {Bio} from '../../data/constants'
import Typewriter from 'typewriter-effect'; 
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaReact, FaNode, FaMedium , FaGithub  } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiFlutter, SiMedium   } from "react-icons/si";

const Hero = () => {
  return (
    <section className='pt-0' id='about'>  
        <div className='container pt-14'> 
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos= 'fade-right' data-aos-duration='1500'
                    className='text-headingColor font-[600] text-[16px]'>
                        Hello Welcome
                    </h5>

                    <h1
                    data-aos= 'fade-up' 
                    data-aos-duration='1500'
                    className='text-headingColor font-[800] 
                    text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                        I'm Chamika Dilshan <br/>
                        <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                    </h1>

                    <div
                     data-aos= 'fade-up' 
                     data-aos-duration='1800'
                     data-aos-delay='200'
                    className='flex items-center gap-6 mt-7'>
                        <button className='bg-primaryColor text-white font-[500] py-2
                        px-4 rounded-[8px] hover:font'>
                            <a className='flex items-center gap-2' href='#contact'>
                                <i className='ri-mail-line'></i>
                                Contact me 
                            </a>
                        </button>

                        <a className='text-smallTextColor font-[600] text-[16px] 
                        border-b border-solid' 
                        href='#experience'>
                                See Portfolio
                            </a>
                    </div>

                    <p  data-aos= 'fade-left' 
                     data-aos-duration='1500'
                     className='flex gap-2 text-headingColor font-[500]
                     text-[20px] leading-7 sm:pl-14 sm:pr-10 mt-12'>
                        <span>
                            <i class='ri-apps-2-line'></i>
                        </span>
                        I'm a computer science undergraduate who enjoys exploring new things and taking on challenges. I'm always eager to learn more and expand my knowledge.
                        </p> 

                        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className='mt-10'> 
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Chamidilshan" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/chamikadilshan/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://chamidilshan.medium.com/"
              target="_blank"
            >
              <span className="bannerIcon">
                <SiMedium   />
              </span>
            </a>
            <a href="https://www.facebook.com/chamika.dilshan.3386" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div> 
        </div>
      </div>
                </div>

                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={heroImg}></img> 
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero