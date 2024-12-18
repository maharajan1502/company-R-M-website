import React from 'react'

const Home = () => {
  return (
    <div className='w-auto bg-[#CCE3DE] text- h-auto border-b-2 border-black'> 
     <nav className='flex text-black bg-[#6B9080] p-6 justify-center space-x-52 items-center '> 
     <div className='flex space-x-3 items-center'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431246/Pasted_image_jqlnuy.png" height-='25px' width='70px' alt="nothing" />
        <h1 className='font-bold text-2xl'>R&M Software Solutions</h1>
      </div>
      <div className='flex space-x-6 items-center font-extralight' >
        <a href="#aboutus" className=' hover:text-white'>About Us</a>
        <a href="#whatwedo" className=' hover:text-white'>What We Do</a>   
        <a href="#services" className=' hover:text-white'> Services</a>
        <a href="" className='button px-4 py-2 bg-white rounded-full font-bold hover:-translate-y-1 hover:scale-110 hover:bg-blue-950 hover:text-white duration-300'>Reach Us</a>
        
      </div>
     </nav>
     <div className='items-center m-48 text-center space-y-2'>
        <h1 className='text-5xl font-extrabold'>Fullstack Software</h1>
        <h1 className='text-5xl font-extrabold'>Development Company</h1>
        <p className='font-light text-xl'>Way to go, quality products!</p>
     </div>
     <div>
        <marquee className='flex p-6' direction="left">
            <div className='flex space-x-20 '>
                <div className='px-3 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431024/web-development_uzieko.png" height='40px' width='40px' alt="nothing" />
                <p >Web Development</p>
                </div>
                
                <div className='px-3 py-1 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/app-development_l2smzw.png" height='40px' width='40px' alt="nothing" />
                <p> Android Development</p>
                </div>
                    
                <div className='px-3 py-1 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431049/web-designing_tqkwwa.png" height='40px' width='40px' alt="nothing" />
                <p >Web Designing</p>
                </div>
                    
                <div className='px-3 py-1 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431309/digital-marketing_tgccno.png" height='40px' width='40px' alt="nothing" />
                <p >Digital Marketing</p>
                </div>
                
                <div className='px-3 py-1 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431308/document-management_qssmcq.png" height='40px' width='40px' alt="nothing" />
                <p >Data Handling</p>
                </div>
                    
            </div>

        </marquee>
     </div>
    </div>
  )
}

export default Home
