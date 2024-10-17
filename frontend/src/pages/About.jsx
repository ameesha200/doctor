import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[330px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-sm text-gray-600'>
          <p>Welcome to prescripto , your trusted partner in managing your healthcare needs Conveniently and Effeciently.At prescripto.We understand The challenges individuls face when it comes To Scheduling Dpctor Appointment And Managging Their Health Records. </p>
          <p>Prescripto is commited to Excellence in healthcare Technology.We continously Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim repellat doloremque illo dolore obcaecati nam. Vitae distinctio placeat labore. Minus voluptatum perspiciatis minima? Deleniti quibusdam beatae quam aliquid consequatur.</p>
          <b className='text-gray-800'>Our vision</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis cum assumenda sequi commodi quas non? Delectus laboriosam at optio ullam, maiores dicta cum! Ipsa tempora repellendus dolorem perferendis rem expedita?</p>
        </div>
      </div>

<div  className='text-xl my-4'>
  <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
</div>

<div className='flex flex-col md:flex-row mb-20'>

  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
   <b>Efficiency:</b>
   <p>Stremlined appointment scheduling that fits into your busy lifesytle</p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Convenience:</b>
  <p>Access to a network of trusted healthcare professionals in your area.</p>
  </div>

  <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Personalization:</b>
  <p>Taillored recommendation and reminders to help you stay on top of your health.</p>
  </div>

</div>

    </div>
  )
}

export default About
