import React, { useState } from 'react'
import HomeNav from '../Components/HomeNav'
import VerticalAppointment from '../Components/VerticalAppointment'
import VerticalMedicine from '../Components/VerticalMedicine'
import premium from '../Photos/premium.png'
import HealthReco from '../Photos/HealthReco.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import SingleLineCalendar from '../Components/SingleLineCalender'
import VerticalSLC from '../Components/VericalSLC'
import { Link } from 'react-router-dom'
import SideMenu from '../Components/SideMenu'
import Page from "../Layouts/Pages";
const HealthRecord = () => {

    //vertical calender , appointments and Medicine
    const [vertical, setVertical] = useState('Upcoming')

    const toggleVertical = (item) => {
        setVertical(item)
    }

    return (
        <Page pageContent={(
        <>
                
                    {/* background */}
                    <div className='bg-[#FEF8FD] w-full flex flex-row h-full'>

                    <div className='flex flex-col w-[90%] mx-[5%]'>
                        <h1 className='lg:md:ml-[8%] mt-6 text-lg  font-semibold'>Health Record</h1>
                            <div className='bg-white lg:md:ml-[8%] mt-2 rounded-2xl  flex flex-col items-center gap-8 py-[100px] justify-center' >
                                <div>
                                    <img src={HealthReco} alt='Health_Record.jpg' />
                                </div>
                                <div className='lg:md:w-[25%]  text-[18px] text-center text-[#696969]'>
                                    Add your document here of easy access anytime anywhere.
                                </div>
                                <Link to = '/HealthRecord1'>
                                <div className=' bg-[#F2CF47] text-white px-4 py-2 rounded-3xl font-[500] text-[18px]'>
                                    Add health Record
                                </div>
                                </Link>
                            </div>

                        </div>

                        

                    </div>
                
            
        </> )}/>
    )
}

export default HealthRecord