import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor
             text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
              C
            </span>

            <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>
                Chamika
              </h2>
              <p className='text-smallTextColor text-[14px] font-[500]'>
                portfolio
              </p>
            </div>
 
          </div>
          <div className='menu hidden sm:flex'>
              <ul className='flex items-center gap-10 '>
                <li><a className='text-smallTextColor font-[600]' href='#about'>About</a></li> 
                <li><a className='text-smallTextColor font-[600]' href='#experience'>Expereince</a></li>
                <li><a className='text-smallTextColor font-[600]' href='#projects'>Projects</a></li>
                <li><a className='text-smallTextColor font-[600]' href='#contact'>Contact</a></li> 
              </ul>
            </div>

            {/* <div className='flex items-center gap-4'>
              <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid
              border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor
              hover:text-white hover:font-[500] ease-in duration-300'>
                <i class='ri-send-plane-line'>
                  Lets'Talk
                </i>
              </button>

              <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'> 
                <i class='ri-menu-line'></i>
              </span>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header 