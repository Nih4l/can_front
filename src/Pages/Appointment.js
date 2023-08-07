import React, { useState } from 'react';
import HomeNav from '../Components/HomeNav';
import Appoint from '../Photos/Appoint.png';
import SideMenu from '../Components/SideMenu';
import AppointmentPopup from '../Components/AppointmentPopup';
import Page from '../Layouts/Pages';

const Appointment = () => {
  //pop up
  const [pop, setPop] = useState(false);

  function PopUp() {
    setPop(!pop);
  }

  return (
    <Page
      pageContent={
        <>
          <div className='bg-[#FEF8FD] w-full flex flex-col items-center h-full'>
            {/* background */}
            <div className='flex flex-col w-[90%] mx-[5%] justify-center'>
              <h1 className='lg:md:ml-[8%] mt-6 mb-2 text-lg font-semibold self-start'>Appointments</h1>
              <div className='lg:md:ml-[8%] bg-white rounded-[16px] flex flex-col items-center gap-8 justify-center py-[100px]'>
                <div>
                  <img src={Appoint} alt='Health_Record.jpg' />
                </div>
                <div className='lg:md:w-[30%] px-2 text-center'>
                  <p className='text-[18px] text-[#696969]'>
                    Add your Appointment and their timing here so we can help you keep track of them on time.
                  </p>
                </div>
                <div
                  className='bg-[#F2CF47] text-white font-[500] text-[18px] px-4 py-2 rounded-[20px] cursor-pointer'
                  onClick={PopUp}
                >
                  Add Appointments
                </div>
              </div>
            </div>
          </div>

          {/* pop up */}
          {pop && <AppointmentPopup />}
        </>
      }
    />
  );
};

export default Appointment;
