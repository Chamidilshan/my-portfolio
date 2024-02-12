import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'

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
                        I'm Chamika Dilshan <br/>Software Engineer
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
                                Hire me
                            </a>
                        </button>

                        <a className='text-smallTextColor font-[600] text-[16px] 
                        border-b border-solid' 
                        href='#portfolio'>
                                See Portfolio
                            </a>
                    </div>

                    <p  data-aos= 'fade-left' 
                     data-aos-duration='1500'
                     className='flex gap-2 text-headingColor font-[500]
                     text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-12'>
                        <span>
                            <i class='ri-apps-2-line'></i>
                        </span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia asperiores quibusdam dignissimos at laudantium praesentium nemo quis rerum esse doloremque nam totam laboriosam. Accusantium deserunt odio quos! Cupiditate, fugit!
                        </p>

                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow me:
                            </span>
                            <span>
                                <a 
                                href='#youtube' 
                                className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class='ri-youtube-line'></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                href='#youtube' 
                                className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class='ri-youtube-line'></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                href='#youtube' 
                                className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class='ri-youtube-line'></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                href='#youtube' 
                                className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class='ri-youtube-line'></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                href='#youtube' 
                                className='text-smallTextColor text-[18px] font-[600]'>
                                    <i class='ri-youtube-line'></i>
                                </a>
                            </span>
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