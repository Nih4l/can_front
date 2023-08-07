import React, { useRef, useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const AppointmentPopup = () => {
  const [pop, setPop] = useState(true);
  const navigate = useNavigate();

  const [PDF, setPDF] = useState();
  const hiddenChoosePDF = useRef();
  const [PDFname, setPDFname] = useState('');

  const [formValues, setFormValues] = useState({
    appointmentName: '',
    doctorName: '',
    hospitalName: '',
    hospitalAddress: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentNote: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePDFUpload = (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      setPDF(file);
    } else {
      console.log('Invalid file type');
    }
    setPDFname(file.name);
  };

  const handleSave = () => {
    // Perform save operation or any other necessary actions

    // Close the popup
    setPop(!pop);

    // Redirect to Appointment1 page with form values as URL parameters
    const queryParams = new URLSearchParams(formValues);
    navigate(`/Appointment1?${queryParams}`);

    console.log(formValues);
  };

  const uploadPDF = () => {
    hiddenChoosePDF.current.click();
  };

  const closeUploadPDF = () => {
    setPDF(!PDF);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-2 bg-black bg-opacity-50 z-50 ${!pop ? 'hidden' : ''}`} style={{ backdropFilter: 'blur(2px)' }}>
      <div className='lg:md:w-[40%] h-fit bg-white rounded-[24px] flex flex-col justify-center px-5 py-2 relative'>
        <div className='flex items-center justify-center font-semibold'>
          <h1 className='text-lg'>Add Appointment</h1>
          <div className='absolute right-[8%] cursor-pointer' onClick={() => setPop(!pop)}>
            <RxCross1 />
          </div>
        </div>
        <div className='h-[80%] w-[100%] flex flex-col items-center'>
          <div className='w-[90%] h-[50%] mt-[3%] border-dotted rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center'>
            {!PDF ? (
              <>
                <div className='text-[12px] text-[#7E7E7E] pr-10 py-2 w-full'>
                  <p className='w-full text-right italic'>Max File Size: 3 MB</p>
                </div>
                <div className='flex flex-col items-center mb-4'>
                  <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                  <h1>Drag and drop or</h1>
                  <h1 className='text-[#3F75F3] font-semibold cursor-pointer' onClick={uploadPDF}>
                    Browse
                  </h1>
                  <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Appointment Letter</p>
                </div>
              </>
            ) : (
              <div className='relative flex items-center justify-center h-full w-full'>
                <div className='flex items-center gap-2'>
                  <BsFileEarmarkPdf size={30} />
                  <p className='font-semibold text-xl'>{PDFname}</p>
                  {/* <embed src={URL.createObjectURL(PDF)} className='h-[38%]' type='application/pdf' />    actual PDF */}
                </div>
                <button className='absolute top-5 right-5' onClick={closeUploadPDF}>
                  <IoCloseCircleSharp color='black' />
                </button>
              </div>
            )}
            <input
              type='file'
              accept='application/pdf'
              ref={hiddenChoosePDF}
              style={{ display: 'none' }}
              onChange={handlePDFUpload}
            />
          </div>
          <form className='flex flex-wrap justify-between mx-[4%] mt-4'>
            <div className='flex py-3 gap-6 w-full'>
            <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="appointmentName" id="appointmentName" value={formValues.appointmentName}
                onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />

        <label for="appointmentName" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Appointment Name</p></label>
    </div>
    <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="doctorName" id="doctorName" value={formValues.doctorName}
                onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />

        <label for="DoctorName" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Doctor's Name</p></label>
    </div>
            </div>
            <div className='flex py-3 gap-6 w-full'>
            <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="hospitalName" id="hospitalName" value={formValues.hospitalName}
                onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />

        <label for="hospitalName" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Hospital's Name</p></label>
    </div>
    <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="hospitalAddress" id="hospitalAddress" value={formValues.hospitalAddress}
                onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />

        <label for="hospitalAdd" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Hospital's Address</p></label>
    </div>
            </div>
            <div className='flex py-3 gap-6 w-full'>
            <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'date';}} value={formValues.appointmentDate}
                onChange={handleInputChange} id="appointmentDate" name="appointmentDate" className=" block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />
    <label for="appointmentDate" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>DD/MM/YYYY</p></label>
    </div> 
    <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'time';}} id="appointmentTime" name="appointmentTime" value={formValues.appointmentTime}
                onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />
    <label for="time" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Time</p></label>
    </div>
            </div>
            <div className="relative z-0 w-full mb-4 group">
    <input type="text" name="appointmentNote" id="appointmentNote" value={formValues.appointmentNote}
              onChange={handleInputChange} className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " required />

        <label for="appointmentNote" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Add note</p></label>
    </div>
          </form>
          <div className='flex gap-4 mb-3 mt-3 w-full justify-end px-8'>
            <button className='border-2 py-1 px-2 md:lg:w-[15%] border-[#7E7E7E] text-center rounded-[12px]' onClick={() => setPop(!pop)}>
              Cancel
            </button>
            <button className='bg-[#F2CF47] px-2 py-1 md:lg:w-[15%] text-white text-center rounded-[12px]' onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPopup;

// import React, { useRef, useState } from 'react'
// import { IoCloseCircleSharp } from 'react-icons/io5'
// import { BsFileEarmarkPdf } from 'react-icons/bs'
// import { MdOutlineCloudUpload } from 'react-icons/md'
// import { RxCross1 } from 'react-icons/rx'
// import { useNavigate } from 'react-router-dom';

// const AppointmentPopup = () => {
//     const [pop, setPop] = useState(true)
//     const navigate = useNavigate();
//     function PopUp() {
//         setPop(!pop)
//     }

//     //PDF
//     const [PDF, setPDF] = useState()

//     const hiddenChoosePDF = useRef()

//     function handlePDFUpload(event) {
//         const file = event.target.files[0];
//         if (file.type === 'application/pdf') {
//             setPDF(file);
//         } else {
//             console.log('Invalid file type');
//         }
//         setPDFname(file.name);
//     }

//     function uploadPDF() {
//         hiddenChoosePDF.current.click()
//     }

//     const [PDFname, setPDFname] = useState("");

//     function closeUploadPDF() {
//         setPDF(!PDF)
//     }

//     const [appointmentName, setAppointmentName] = useState("");
//     const [doctorName, setDoctorName] = useState("");
//     const [hospitalName, setHospitalName] = useState("");
//     const [hospitalAddress, setHospitalAddress] = useState("");
//     const [appointmentDate, setAppointmentDate] = useState("");  
//     const [appointmentTime, setAppointmentTime] = useState("");
//     const [appointmentNote, setAppointmentNote] = useState("");  
     
//       function handleSave() {
//         // Perform save operation or any other necessary actions
    
//         // Close the popup
//         setPop(!pop);
        
//         // Redirect to Appointment1 page with form values as URL parameters
//         const queryParams = new URLSearchParams({
//             appointmentName: appointmentName,
//             doctorName: doctorName,
//             hospitalName: hospitalName,
//             hospitalAddress: hospitalAddress,
//             appointmentDate: appointmentDate,
//             appointmentTime: appointmentTime,
//             appointmentNote: appointmentNote,
//           });
        
//           navigate(`/Appointment1?${queryParams}`);
//         console.log(appointmentName,doctorName,hospitalName,PDFname, );

//       }

//   return (
//    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${!pop ? 'hidden' : '' }`} style={{ backdropFilter: 'blur(2px)' }}>

//                     <div className='w-[40%] h-[83%] bg-white rounded-[24px] flex flex-col justify-center px-5 relative'>

//                         <div className='flex items-center justify-center font-semibold'>
//                             <h1 className='text-lg'>Add Appointment</h1>
//                             <div className="absolute right-[8%] cursor-pointer" onClick={PopUp}>
//                                 <RxCross1 />
//                             </div>
//                         </div>

//                         <div className='h-[80%] w-[100%] flex flex-col items-center'>
//                             <div className='w-[90%] h-[50%] mt-[3%] border-dotted rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center'>
//                                 {!PDF && (<>
//                                     <div className='text-[12px] text-[#7E7E7E] pr-10 py-2 w-full'>

//                                         <p className='w-full text-right italic'>Max File Size: 3 MB</p>
//                                     </div>
//                                     <div className='flex flex-col items-center mb-4 '>
//                                         <MdOutlineCloudUpload size={50} color='#7E7E7E' />
//                                         <h1>Drag and drop or</h1>
//                                         <h1 className='text-[#3F75F3] font-semibold cursor-pointer' onClick={uploadPDF}>Browse</h1>
//                                         <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Appointment Letter</p>
//                                     </div>
//                                 </>)}

//                                 {PDF && (
//                                     <div className='relative flex items-center justify-center h-full w-full'>
//                                         <div className='flex items-center gap-2'>
//                                             <BsFileEarmarkPdf size={30} />
//                                             <p className='font-semibold text-xl'>{PDFname}</p>
//                                             {/* <embed src={URL.createObjectURL(PDF)} className='h-[38%]' type='application/pdf' />    actual PDF */}

//                                         </div>

//                                         <button className='absolute top-5 right-5' onClick={closeUploadPDF} >
//                                             <IoCloseCircleSharp color='black' />
//                                         </button>
//                                     </div>
//                                 )}

//                                 <input
//                                     type='file'
//                                     accept='application/pdf'
//                                     ref={hiddenChoosePDF}
//                                     style={{ display: 'none' }}
//                                     onChange={handlePDFUpload}
//                                 />
//                             </div>

//                             <form className='flex flex-wrap justify-between mx-[4%] mt-4'>
//                             <div className='flex py-3 gap-6 w-full'>
//                                 <input type='text' name='appointmentName' placeholder='Appointment name' value={appointmentName} onChange={(e) => setAppointmentName(e.target.value)} className='border-2  p-2 rounded-[12px] w-1/2' />
//                                  <input type='text' name='doctorName' placeholder="Doctor's name" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} className='border-2  p-2 rounded-[12px] w-1/2' />
//                             </div>
//                             <div className='flex py-3 gap-6 w-full'>
//                                  <input type='text' name='hospitalName' placeholder="Hospital's name" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} className='border-2  p-2 rounded-[12px] w-1/2'/>
//                                  <input type='text' name='hospitalAddress' placeholder="Hospital's address" value={hospitalAddress} onChange={(e) => setHospitalAddress(e.target.value)} className='border-2  p-2 rounded-[12px] w-1/2' />
//                             </div>
//                             <div className='flex py-3 gap-6 w-full'>
//                              <input placeholder='DD/MM/YYYY' name='appointmentDate' value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className='border-2 p-2 w-1/2 rounded-[12px] ' onFocus={(e) => { e.target.type = 'date'}}/>

//                              <input placeholder='Time' type='text' name='appointmentTime' value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} onFocus={(e) => {e.target.type = 'time';}}className='border-2 p-2 rounded-[12px] w-1/2' />
//                             </div>
                        
//                                  <input type='text' placeholder='Add note' name='note' value={appointmentNote} onChange={(e) => setAppointmentNote(e.target.value)} className='border-2 my-3 p-2 rounded-[12px] w-full' />

//                             </form>

//                             <div className='flex gap-4 mb-3 mt-3 w-full justify-end px-8'>
//                                 <button className='border-2  py-1 w-[15%] border-[#7E7E7E] text-center rounded-[12px]' onClick={PopUp}>
//                                     Cancel
//                                 </button>
//                                 <button className='bg-[#F2CF47]  py-1 w-[15%] text-white text-center rounded-[12px] ' onClick={handleSave}>Save</button>
//                             </div>

//                         </div>


//                     </div>
//              </div>
        

//   )
// }

// export default AppointmentPopup
