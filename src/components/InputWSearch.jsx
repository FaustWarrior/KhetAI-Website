import React from 'react'

export const InputWSearch = () => {
    
    const data = ["Wheat", "Rice", "Maize","Corn", "Sugarcane"];


  return (
    <div className='main w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <label className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Choose your crop</label>
        <input list='data'/>
        <datalist id='data'>
            {/* <option>Wheat</option>
            <option>Rice</option>
            <option>Maize</option>
            <option>Corn</option>
            <option>Sugarcane</option> */}

            {data.map((op)=><option>{op}</option>)}
        </datalist>
    </div>
  )
}
