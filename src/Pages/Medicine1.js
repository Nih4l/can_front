import {React, useState} from "react";
import CalenderRecords from "../Components/CalenderRecords";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import MedicinePopup from '../Components/MedicinePopup';

import Page from "../Layouts/Pages";


const MedicineReminder= () => {
    const [isClickedAppointment, setIsClickedAppointment]=useState(false)
    const handleIsClickedAppointment=()=>{
        setIsClickedAppointment(!isClickedAppointment);
    }
    const [isClickedMedicine, setIsClickedMedicine]=useState(true)
    const handleIsClickedMedicine=()=>{
        setIsClickedMedicine(!isClickedMedicine);
    }


    const [medicinePopup, setMedicinePopup] = useState(false);
    const toggleMedicine=()=>{
      setMedicinePopup(!medicinePopup);
    }
  return (
    <Page pageContent={(
      <>
        
        <div className="flex">
          {/* background */}
          <div className="bg-[#FEF8FD] w-full flex flex-row h-full">
            <div className="flex flex-col w-[90%] mx-[5%]">
            <div className=' md:ml-8 mt-6 flex md:justify-between m-4 flex-nowrap'>
              <div className={`flex md:gap-8 justify-around md:justify-start md:w-[50%] w-full`}>
                <Link to='/Appointment1'> <button className={`md:text-lg flex text-sm font-semibold md:py-2 md:px-6 p-2 rounded-[20px] w-fit text-center h-fit '  ${isClickedAppointment ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'} `} onClick={()=>handleIsClickedAppointment()}>Appointments</button>  </Link>              
                <Link to='/Medicine1'><button className={`md:text-lg flex text-sm font-semibold md:py-2 md:px-10 p-2 shadow-lg rounded-[20px] w-fit h-fit text-center ${isClickedMedicine ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'}`} onClick={()=>{handleIsClickedMedicine()}}> Medicine</button>    </Link>
                </div>
                <div> <button className='md:text-lg text-sm absolute end-7 md:end-0 -bottom-4 md:bottom-0  md:relative font-semibold md:py-2 md:px-6 p-2 bg-[#F2CF47] text-white  shadow-lg rounded-[20px] w-fit text-center' onClick={toggleMedicine}>  Add Medicine  </button></div>                {medicinePopup && (
                  <MedicinePopup toggleMedicine={toggleMedicine}/>
                )}
              </div>

              <div className="bg-white h-[80vh] md:ml-8 mt-2 rounded-2xl shadow-xl flex flex-col items-center px-8">
                <div className="my-6">
                  <CalenderRecords />
                </div>

                <div className="bg-[#FEF8FD] h-[70%] w-full rounded-[24px] p-6 flex flex-col gap-3 overflow-y-visible">
                  <h1 className="font-semibold">Today's Medicine</h1>

                  <table className="w-[100%] justify-around bg-white border-gray-200 border-2 rounded-[16px]" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
 
    <tr className="flex md:flex-row flex-col h-fit " >
      <td className="flex flex-col items-center lg:min-w-[200px]  lg:border-[#C4C4C4] pr-4 justify-center">
          <h2 className="text-[18px] font-[500] flex-nowrap">Before Breakfast</h2>
          <h3 className="text-[16px] font-[500] px-10 md:px-0 flex-nowrap">12:10</h3>
       </td>
      <td>
        {/* Individual medicine block */}
        <div className="md:border-l-2 flex flex-col px-10 gap-4">
          <p className="text-[#7E7E7E] text-[14px] font-[500]">Medicine 1</p>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-10 py-0 justify-center align-middle text-[16px] font-[500]">
              <div>Mathadol</div>
              <div>5 mg</div>
            </div>
          </div>
        </div>
        {/* Individual medicine block ends */}
      </td>
      <td colSpan={2} className="flex px-4 w-full ">
        <table className='flex w-full h-full lg:justify-end justify-center md:justify-center items-center'>
          <tr className=' '>
          <td className='pr-2'>
          <div className="flex bg-[#C31A7F33] rounded-[15px] px-2 py-2 items-center justify-center text-[16px]">
              <RiDeleteBinLine />
            </div>
          </td>
          <td>
          <div className="flex bg-[#C31A7F33] rounded-[15px] px-2 py-2 items-center justify-center text-[16px]">
              <MdOutlineEdit />
          </div>
          </td>
          
          </tr>
          </table>
      </td>
    </tr>
 
</table>

                        </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )} />
  );
}

export default MedicineReminder;
