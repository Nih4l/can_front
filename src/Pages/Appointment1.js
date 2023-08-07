import React, { useRef, useState } from 'react'
import CalenderRecords from '../Components/CalenderRecords'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {TfiClipboard} from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AppointmentPopup from '../Components/AppointmentPopup'
import Page from '../Layouts/Pages';
const Appointment1 = () => {

    //pop up
    const [pop, setPop] = useState(false)

    function PopUp() {
        setPop(!pop)
    }

    const [isClickedAppointment, setIsClickedAppointment]=useState(true)
    const handleIsClickedAppointment=()=>{
        setIsClickedAppointment(!isClickedAppointment);
    }
    const [isClickedMedicine, setIsClickedMedicine]=useState(false)
    const handleIsClickedMedicine=()=>{
        setIsClickedMedicine(!isClickedMedicine);
    }
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

  const appointmentName = queryParams.get('appointmentName');
  const doctorName = queryParams.get('doctorName');
  const hospitalName = queryParams.get('hospitalName');
  const hospitalAddress = queryParams.get('hospitalAddress');
  const appointmentDate = queryParams.get('appointmentDate');
  const appointmentTime = queryParams.get('appointmentTime');
  const appointmentNote = queryParams.get('appointmentNote');
    
  const [notePop,setNotePop] =useState(false);
  const handleNotePopUp=()=>{
    setNotePop(!notePop);
  }

    return (
        <Page
        pageContent={(
        <>
           

                <div className='flex'>
                    {/* background */}
                    <div className='bg-[#FEF8FD] w-full h-full flex flex-row relative'>


                        <div className='flex flex-col  w-[90%] lg:md:mx-[5%] mx-auto '>

                            <div className=' lg:md:ml-8 mt-6 flex lg:md:justify-between m-4 flex-nowrap'>
                                <div className={`flex lg:md:gap-8 justify-around lg:md:justify-start lg:md:w-[50%] w-full`}>

                                <Link to='/Appointment1'> <button className={`lg:md:text-lg flex text-sm font-semibold lg:md:py-2 lg:md:px-6 p-2 rounded-[20px] w-fit text-center h-fit '  ${isClickedAppointment ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'} `} onClick={()=>handleIsClickedAppointment()}>Appointments</button>  </Link>              
                 <Link to='/Medicine1'><button className={`lg:md:text-lg flex text-sm font-semibold lg:md:py-2 lg:md:px-10 p-2 shadow-lg rounded-[20px] w-fit h-fit text-center ${isClickedMedicine ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'}`} onClick={()=>{handleIsClickedMedicine()}}> Medicine</button>    </Link>
                                </div>
                               <div> <button className='lg:text-lg text-sm absolute end-2 z-10 lg:z-0 lg:end-0  bottom-4 lg:bottom-0 lg:relative font-semibold lg:py-2 lg:px-6 p-2 bg-[#F2CF47] text-white  shadow-lg rounded-[20px] w-fit text-center' onClick={PopUp}>  Add Appointment     </button></div>
                                    
                               {/* pop up */} 
               {pop && ( <AppointmentPopup /> )}
                               
                            </div>

                            <div className='bg-white min-h-[80vh] max-h-fit lg:md:ml-8 mt-2 rounded-2xl shadow-xl flex flex-col items-center px-8' >

                                <div className='my-6'>
                                    <CalenderRecords />
                                </div>

                                <div className='bg-[#FEF8FD] relative min-h-[70%] max-h-fit w-full rounded-[24px] p-6 flex flex-col gap-3 overflow-scroll'>

                                    <h1 className='font-semibold'>
                                        Today's Appointment
                                    </h1>
                                    <table className="relative table w-full justify-around bg-white border-gray-200 border-2 rounded-[16px] text-left md:p-4 p-1 overflow-x-scroll" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
  
    <tr className="flex flex-col lg:flex-row overflow-x-scroll overflow-y-visible">
      <td className="flex flex-col items-center lg:border-r-[1px] lg:min-w-[150px]  lg:border-[#C4C4C4] pr-4">
        <h1 className="font-semibold whitespace-nowrap text-[18px]">{appointmentDate}</h1>
        <h1 className="text-[#7E7E77] px-6 lg:px-0">{appointmentTime}</h1>
      </td>
     
      <td className="flex flex-col lg:flex-col md:flex-row items-start text-left lg:min-w-[150px]  px-4 gap-2 lg:border-r-[1px] lg:border-[#C4C4C4]">
        <div className="whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]">Appointment name</div>
        <div className="font-semibold text-[15px]">{appointmentName}</div>
      </td>
      <td className="flex flex-col lg:flex-col md:flex-row text-left px-4 gap-2 lg:min-w-[150px]  lg:border-r-[1px] lg:border-[#C4C4C4]">
        <div className="whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]">Doctor's name</div>
        <div className="font-semibold text-[15px]">{doctorName}</div>
      </td>
     
      <td className="flex flex-col lg:flex-col md:flex-row text-left px-4 gap-2 lg:min-w-[150px] lg:border-r-[1px] lg:border-[#C4C4C4]">
        <div className="whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]">Hospital's name</div>
        <div className="font-semibold text-[15px]">{hospitalName}</div>
      </td>
     
      <td className="flex flex-col lg:flex-col md:flex-row text-left px-4 gap-2 lg:min-w-[300px] lg:border-r-[1px] lg:border-[#C4C4C4]">
        <div className="whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]">Hospital's address</div>
        <div className="font-semibold text-[15px] text-left">{hospitalAddress}</div>
      </td>
     
      <td colSpan={3} className="flex px-4 w-full ">
        <table className='flex w-full h-full lg:justify-end justify-center md:justify-center items-center'>
       <tr className=' '>
          <td className='pr-2'>
            <div className="bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer">
            {notePop && (
              <div className="absolute" onClick={handleNotePopUp}>
                <div className="relative lg:-left-24 -left-10 top-5 min-w-[100px] flex flex-col flex-wrap p-2 items-start text-left bg-white shadow-md rounded-[15px]">
                  <h4 className="text-[#7E7E77]">Note</h4>
                  <p className="flex flex-wrap max-w-[200px]">{appointmentNote}</p>
                </div>
              </div>
              
            )}
            <TfiClipboard onClick={handleNotePopUp} />
            </div>
          </td>
          <td>
          <div className="bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer">
            <AiOutlineFilePdf />
            </div>
          </td>
          <td className='pl-2'>
            <div className="bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer">
            <MdOutlineModeEditOutline />
            </div>
          </td>
          </tr>
          </table>
      </td>
    </tr>
  
</table>


                                    {/* <div className='relative flex lg:flex-row flex-col h-fit w-[100%] justify-around bg-white border-gray-200 border-2 rounded-[16px] text-left md:p-4 p-1'>

                                        <div className='flex lg:flex-row flex-col items-start h-full w-full gap-3 overflow-auto flex-nowrap '>
                                          <div className='flex lg:flex-row flex-col  gap-3'>
                                            <div className='flex lg:flex-col flex-row self-center items-center '>
                                                <h1 className='font-semibold whitespace-nowrap text-[18px]'>{appointmentDate}</h1>
                                                <h1 className='text-[#7E7E77] px-6 lg:px-0'>{appointmentTime}</h1>
                                            </div>
                                            <div className="md:h-16 md:w-[1px] lg:bg-[#C4C4C4]"></div>
                                            <div className='flex lg:flex-col flex-row items-start text-left px-4 gap-2 '>
                                                <div className=' whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Appointment name</div>
                                                <div className=' font-semibold text-[15px] '>{appointmentName}</div>
                                            </div>

                                            <div className="lg:h-16 lg:w-[1px] lg:bg-[#C4C4C4]"></div>

                                            <div className='flex lg:flex-col flex-row text-left px-4 gap-2 '>
                                            <div className=' whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Doctor's name</div>
                                                <div className='font-semibold text-[15px] '>{doctorName}</div>
                                            </div>

                                            <div className="lg:h-16 lg:w-[1px] lg:bg-[#C4C4C4]"></div>
                                            <div className='flex lg:flex-col flex-row text-left px-4 gap-2 '>
                                            <div className='whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Hospital's name</div>
                                                <div className='font-semibold text-[15px] '>{hospitalName}</div>
                                            </div>

                                            <div className="lg:h-16 lg:w-[1px] lg:bg-[#C4C4C4]"></div>

                                            <div className=' flex lg:flex-col flex-row text-left px-4 gap-2 lg:max-w-[250px]'>
                                            <div className='whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Hospital's address</div>
                                                <div className='font-semibold text-[15px] text-left  '>{hospitalAddress}</div>
                                            </div>

                                            <div className="lg:h-16 lg:w-[1px] lg:bg-[#C4C4C4]"></div>
                                            </div>
                                            <div className='flex lg:flex-row flex-col self-center justify-end flex-1'>
                                            <div className='flex flex-row gap-4 px-4 '>
                                               
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    
                                            {notePop && (
                                                <div className='absolute' onClick={handleNotePopUp}>
                                                <div className={`relative lg:-left-24 -left-10  top-5  min-w-[100px] flex flex-col flex-wrap p-2 items-start text-left bg-white shadow-md rounded-[15px] `}>
                                                <h4 className='text-[#7E7E77]'>Note</h4>
                                                <p className='flex flex-wrap max-w-[200px] '>{appointmentNote}</p>
                                                </div>
                                                </div>
                                            )}
                                            <TfiClipboard onClick={handleNotePopUp}/>
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    <AiOutlineFilePdf />
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    <MdOutlineModeEditOutline />
                                                </div>
                                                
                                            </div>
                                            </div>

                                        </div>

                                    </div> */}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
        )}/>
    )
}

export default Appointment1