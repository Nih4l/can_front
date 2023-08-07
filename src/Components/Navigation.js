import React, { useState } from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'



const Navigation = () => {

  const [selectedOption, setSelectedOption] = useState(1)

  const navOptions = [
    { id: 1, name: 'HOME' },
    { id: 2, name: `MEETING` },
    { id: 3, name: 'FEEDS' },
    { id: 4, name: 'MY SPACE' },
  ]

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      <div className='flex justify-between items-center px-20 mt-2'>
        <div className='flex flex-row items-center '>
          <img src={Logo} className='w-[80px] h-[80px]' alt='Logo not found' />
          <div><img src={CAN} className='w-[42.88px] h-[16.19px]' alt='Logo not found' /></div>
        </div>

        <div className='flex flex-row gap-10 content-center items-center '>
          <div className='flex gap-8'>
            {navOptions.map((option) => (
              <div
                key={option.id}
                className={`p-2 cursor-pointer ${selectedOption === option.id ? " text-[#EFC319] font-semibold" : ""}`}
                onClick={() => handleOptionClick(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>

          
            <div className='bg-[#EFC319] p-2 font-semibold rounded-xl text-white flex gap-1'>
              <div>
                <Link to= '/LoginForm'>Login</Link>
              </div>
              /
              <div>
              <Link to='/Register'> SignUp</Link>
              </div>
            </div>
          

        </div>
      </div>

    </>
  )
}

export default Navigation