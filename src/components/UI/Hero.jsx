import React from 'react';
import heroImg from '../../assets/images/hero.png';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className='w-full md:basis-1/2'>
            <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-semibold text-lg'>
              Hello Welcome
            </h5>
            <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-bold text-2xl sm:text-4xl leading-tight mt-5'>
              I'm Chamika Dilshan <br />
              <Typewriter
                options={{
                  strings: [
                    'CS Undergraduate',
                    'Software Engineer',
                    'Full Stack Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='flex items-center gap-6 mt-7'>
              <button className='bg-primaryColor text-white font-medium py-2 px-4 rounded-lg hover:bg-opacity-90'>
                <a className='flex items-center gap-2' href='#contact'>
                  <i className='ri-mail-line'></i>
                  Contact me
                </a>
              </button>

              <a className='text-smallTextColor font-semibold text-lg border-b border-solid' href='#experience'>
                See Portfolio
              </a>
            </div>

            <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-white font-medium text-lg leading-7 sm:pl-14 sm:pr-10 mt-12'>
              <span>
                <i className='ri-apps-2-line'></i>
              </span>
              I'm a computer science undergraduate who enjoys exploring new things and taking on challenges. I'm always eager to learn more and expand my knowledge.
            </p>

            <div className='flex flex-col xl:flex-row gap-6 justify-between mt-10'>
              <div className='text-white'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                  Find me in
                </h2>
                <div className='flex gap-4'>
                  <a href='https://github.com/Chamidilshan' target='_blank' rel='noopener noreferrer'>
                    <span className='bannerIcon'>
                      <FaGithub />
                    </span>
                  </a>
                  <a href='https://www.linkedin.com/in/chamikadilshan/' target='_blank' rel='noopener noreferrer'>
                    <span className='bannerIcon'>
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href='https://chamidilshan.medium.com/' target='_blank' rel='noopener noreferrer'>
                    <span className='bannerIcon'>
                      <SiMedium />
                    </span>
                  </a>
                  <a href='https://www.facebook.com/chamika.dilshan.3386' target='_blank' rel='noopener noreferrer'>
                    <span className='bannerIcon'>
                      <FaFacebookF />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex items-center justify-center'>
              <img src={heroImg} alt='Hero' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;